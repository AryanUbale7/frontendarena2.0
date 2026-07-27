# Frontend Arena: API Architecture Specification (v1.0)

This document is the official API Architecture Specification for **Frontend Arena**. It outlines the routing conventions, request/response payloads, error structures, rate-limiting rules, and permission matrices for both frontend and backend engineering teams.

---

## Section 1: Global API Standards

### 1. Conventions & Versioning
*   **Protocol:** HTTPS only. RESTful resource mapping.
*   **Versioning:** URI-based versioning prefixed at path root (`/api/v1/`).
*   **Media Types:** Requests and responses must use `application/json`.
*   **Naming Conventions:** Paths use kebab-case (e.g., `/user-profiles`). Keys use camelCase (e.g., `userId`).

### 2. Pagination, Filtering, & Sorting
*   **Pagination:** Cursor-based pagination using `startingAfter` and `endingBefore` parameters.
*   **Filtering:** Multi-key query selectors (e.g., `?skills=react,typescript&difficulty=advanced`).
*   **Sorting:** Query parameter `sort` with prefix direction (e.g., `?sort=-createdAt` for descending).

### 3. Rate Limiting & Idempotency
*   **Rate Limits:** Standard limits: 100 requests per minute per IP. Auth routes: 5 requests per minute.
*   **Idempotency:** Write transactions (POST/PUT) accept an optional `Idempotency-Key` header to prevent duplicate executions.

---

## Section 2: Core Endpoint Directory

### 1. Authentication Service

#### Endpoint 1: Login
*   **Endpoint:** `/api/v1/auth/login`
*   **HTTP Method:** `POST`
*   **Purpose:** Authenticates user credentials and returns session tokens.
*   **Authentication:** None.
*   **Request Schema:**
    ```json
    {
      "email": "user@domain.com",
      "password": "securepassword123"
    }
    ```
*   **Response Schema (200 OK):**
    ```json
    {
      "token": "eyJhbGciOiJSUzI1NiIs...",
      "refreshToken": "r_eyJhbGciOiJ...",
      "expiresIn": 3600
    }
    ```
*   **Error Codes:** `INVALID_CREDENTIALS` (401), `UNVERIFIED_EMAIL` (403), `ACCOUNT_LOCKED` (423).
*   **Permission Matrix:** Public.
*   **Rate Limits:** 5 requests per minute.

---

### 2. User Service

#### Endpoint 2: View Profile
*   **Endpoint:** `/api/v1/users/{userId}/profile`
*   **HTTP Method:** `GET`
*   **Purpose:** Fetches developer profile details, skills, and XP metrics.
*   **Authentication:** Bearer JWT required.
*   **Request Schema:** Path parameter `userId` (UUID).
*   **Response Schema (200 OK):**
    ```json
    {
      "userId": "d2516f83-9955-4aad-8423-2333abdc2132",
      "username": "aryan_patel",
      "skills": ["React", "TypeScript", "Next.js"],
      "xpLevel": 12,
      "xpScore": 2420
    }
    ```
*   **Error Codes:** `USER_NOT_FOUND` (404).
*   **Permission Matrix:** Anyone (Public profile visibility rules apply).
*   **Rate Limits:** 120 requests per minute.

---

### 3. Submission Service

#### Endpoint 3: Create Project Submission
*   **Endpoint:** `/api/v1/hackathons/{hackathonId}/submissions`
*   **HTTP Method:** `POST`
*   **Purpose:** Submits code repository links and project descriptions.
*   **Authentication:** Bearer JWT required (Participant scope).
*   **Request Schema:**
    ```json
    {
      "teamId": "f128c8de-e0ef-4f19-b003-7b3bb164cb89",
      "gitRepoUrl": "https://github.com/aryan/frontend-arena",
      "liveDemoUrl": "https://arena.live",
      "techStack": ["Next.js", "Redis"],
      "pitchDeckUrl": "https://s3.amazonaws.com/arena/decks/pixelcraft.pdf"
    }
    ```
*   **Response Schema (201 Created):**
    ```json
    {
      "submissionId": "4a7b5d1e-84d4-4bb2-b5e1-0c58e5f15951",
      "status": "PENDING_VALIDATION",
      "createdAt": "2026-07-27T23:56:26Z"
    }
    ```
*   **Error Codes:** `SUBMISSION_CLOSED` (400), `INVALID_GIT_REPO` (400), `UNAUTHORIZED_TEAM_CAPTAIN` (403).
*   **Permission Matrix:** Team Captain role only.
*   **Rate Limits:** 10 requests per minute.

---

### 4. Evaluation Service

#### Endpoint 4: Get AI Evaluation Report
*   **Endpoint:** `/api/v1/submissions/{submissionId}/ai-report`
*   **HTTP Method:** `GET`
*   **Purpose:** Fetches the automated AI assessment and scoring matrix.
*   **Authentication:** Bearer JWT required (Judge / Organizer / Captain scope).
*   **Response Schema (200 OK):**
    ```json
    {
      "submissionId": "4a7b5d1e-84d4-4bb2-b5e1-0c58e5f15951",
      "scores": {
        "performance": 9.2,
        "accessibility": 8.5,
        "codeQuality": 9.0
      },
      "summary": "Clean Next.js architecture utilizing optimized caching strategies.",
      "recommendations": ["Refactor direct database queries out of layout files."]
    }
    ```
*   **Error Codes:** `REPORT_NOT_FOUND` (404), `PIPELINE_IN_PROGRESS` (202).
*   **Permission Matrix:** Read access restricted to team members, assigned judges, and organizers.

---

### 5. Leaderboard Service

#### Endpoint 5: Get Hackathon Rankings
*   **Endpoint:** `/api/v1/hackathons/{hackathonId}/leaderboard`
*   **HTTP Method:** `GET`
*   **Purpose:** Fetches cached event participant rankings.
*   **Request Schema:** Query parameters: `limit` (int), `track` (string).
*   **Response Schema (200 OK):**
    ```json
    {
      "lastUpdated": "2026-07-27T23:55:00Z",
      "rankings": [
        { "rank": 1, "teamName": "PixelCraft", "score": 92.40 },
        { "rank": 2, "teamName": "DevQuery", "score": 90.15 }
      ]
    }
    ```
*   **Rate Limits:** Cached. 200 requests per minute.

---

## Section 3: Webhook Configurations

### 1. GitHub Webhook Ingest
*   **Endpoint:** `/api/v1/webhooks/github`
*   **Method:** `POST`
*   **Signature Header:** `X-Hub-Signature-256` (HMAC hex digest validated against our secrets vault).
*   **Events Handled:** `push` (automatically queues a re-evaluation task if code modifications are pushed to the registered team branch).

---

## Section 4: Global Error Schemas

The API follows a standardized JSON schema for all error states.

### 1. Validation Error Payload (400 Bad Request)
```json
{
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "Invalid submission payload.",
    "errors": [
      {
        "field": "gitRepoUrl",
        "reason": "URL must point to a valid public GitHub repository."
      }
    ]
  }
}
```

### 2. Authorization Error Payload (403 Forbidden)
```json
{
  "error": {
    "code": "FORBIDDEN_ACTION",
    "message": "User does not have the required permissions to execute this request."
  }
}
```
