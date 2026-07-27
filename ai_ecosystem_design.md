# Frontend Arena: AI Ecosystem & Product Integration Spec

This document defines the complete product specifications, user flows, input/output architectures, interface layouts, and trust parameters for the **Frontend Arena AI Ecosystem**. It moves beyond standard chat interfaces, integrating machine learning and LLMs directly into key workflows across all portals.

---

## Global AI Architecture & Design Integration

To maintain our dark-theme first luxury SaaS visual signature, all AI-generated elements utilize a consistent design token:
*   **Visual Indicator:** Micro-gradients fading from brand Pink (`#FF006E`) to Neon Cyan (`#06B6D4`), representing AI synthesis.
*   **Typography:** AI-generated text is rendered in Inter UI with a tiny status badge labeled "AI Generated" in Space Grotesk (`10px`).
*   **Input Interfaces:** Natural Language search boxes and inline generation buttons (`[Generate with AI]`).

---

## 1. Global AI Copilot (`Ctrl + I` Panel)

### 1. Purpose
A global, keyboard-triggered overlay offering context-aware commands, semantic workspace searches, and task execution across all portals.

### 2. User Journey & UX Flow
1.  **Trigger:** User taps `Ctrl + I` (or `Cmd + I` on macOS) on any page.
2.  **Display:** A centered modal slides down (`width: 680px`), blurring the background page.
3.  **Command:** User types: *"Invite 3 React developers from the waitlist to my team"* or *"Summarize the current infrastructure load"*.
4.  **Confirm:** Copilot previews the proposed actions; user clicks "Approve" or taps `Enter` to execute.

### 3. Interface Layout
*   **Top:** Clean text input with a glowing left border gradient.
*   **Body:** Split-list containing *Suggested Prompts* based on active page context, and *Action Preview* boxes showing what the AI is preparing to execute.

### 4. AI Input & Output Specs
*   **Inputs:** Active page URL, user portal permissions, text query, and active workspace metadata.
*   **Outputs:** Structured action cards (e.g., inviting users, modifying database settings) with a prominent confirm CTA.

---

## 2. Participant AI Assistant

### 1. Purpose
Guides developers through team matching, project ideation, skill gap analyses, and submission validations.

### 2. User Journey & UX Flow
1.  **Matchmaking:** A solo developer navigates to the Team Workspace.
2.  **Suggest:** The AI scans active team profiles and recommends: *"Teammate suggestion: Sarah Connor has complementary PyTorch skills; click to invite."*
3.  **Verify:** During compilation, the AI scans logs to suggest: *"Warning: Tailwind version mismatch detected in package.json; click to auto-resolve."*

### 3. Interface Layout
*   **Floating Workspace Widget:** Docked right panel on the submission center, showing a checklist tracking project readiness.

### 4. AI Input & Output Specs
*   **Inputs:** User profile (linked GitHub repo, skill tags, past projects) and active event description.
*   **Outputs:** Learning roadmap links, complementary teammate suggestions, and repository health alerts.

---

## 3. Organizer AI Assistant

### 1. Purpose
Assists event organizers in building event schedules, suggesting rubrics, predicting registration counts, and highlighting operational risks.

### 2. User Journey & UX Flow
1.  **Build:** Launches the Event Wizard. Click `[Generate Rubrics with AI]`.
2.  **Analyze:** The dashboard highlights a warning: *"Prediction Alert: Registration rates suggest 20% drop-off; we recommend broadcasting a target notification to pending applicants."*

### 3. Interface Layout
*   **Predictive Alert Banner:** Highlighted box at the top of the Organizer dashboard showing growth forecasts.

---

## 4. Judge AI Assistant

### 1. Purpose
Reduces judge workload by summarizing repository contents, identifying plagiarism, and drafting initial evaluation scorecards.

### 2. User Journey & UX Flow
1.  **Audit:** Opens a project submission.
2.  **Read:** AI displays a 3-bullet summary: Technical Stack, Strengths (clean modular layout), and Weaknesses (poor unit test coverage).
3.  **Validate:** Displays a warning: *"94% code similarity matching Team #12. View comparison."*
4.  **Grade:** Pre-fills rubric draft notes based on automated test runs.

### 3. Interface Layout
*   **Workspace Top Pane:** Multi-column view. Left: project brief summaries. Center: code comparison diffs. Right: draft scorecards.

### 4. AI Input & Output Specs
*   **Inputs:** Submission files, repository commit history, and automated build logs.
*   **Outputs:** Project brief summaries, code similarity reports, and scorecard drafts.

---

## 5. Mentor AI Assistant

### 1. Purpose
Highlights blocked teams and recommends specific developer resources to mentors.

### 2. User Journey & UX Flow
1.  **Alert:** Mentor dashboard flags a team: *"Team PixelCraft has failed Stage 5 (Build) 3 times consecutively; click to join their chat."*
2.  **Suggest:** Recommends technical links to send: *"Here is the official guide to resolve Webpack devServer configurations."*

---

## 6. Recruiter & 7. Company AI Assistants

### 1. Purpose
Sifts through talent pools, ranks profiles based on event metrics, and generates candidate summaries.

### 2. User Journey & UX Flow
1.  **Search:** Recruiter inputs: *"Find intermediate React developers in Chicago who won a UI track challenge."*
2.  **Sift:** AI displays matching profiles alongside custom developer summaries: *"Best known for robust CSS architectures."*

---

## 8. College & 9. Sponsor AI Insights

### 1. Purpose
Forecasts student registrations and calculates ROI brand engagement metrics for sponsors.

### 2. Layout
*   **Sponsor Analytics Card:** Highlights brand impressions, clicking rates, and project integrations.

---

## 10. Platform Admin AI

### 1. Purpose
Monitors cluster load spikes, detects suspicious activities, and automates server auto-scaling allocations.

### 2. User Journey & UX Flow
1.  **Detect:** Dashboard displays an alert: *"Traffic anomaly detected. 120 registrations from identical IP range. Flagging for review."*
2.  **Scale:** Automatically launches 4 extra evaluation worker clusters to handle concurrent submissions.

---

## Global Safety, Trust, & Moderation Rules

To ensure privacy and build trust, all AI models conform to the following boundaries:

*   **Explicit Data Isolation:** Participant repositories and project files are never used to train global LLMs.
*   **Explainable Outputs:** All AI-suggested scores or alerts must display a tooltip explaining the reasoning (e.g., *"Plagiarism score calculated using token-level matching metrics"*).
*   **Human-in-the-Loop Enforcements:** AI cannot disqualify teams, publish scores, or change billing rates directly. All AI recommendations must be explicitly approved by human administrators.
