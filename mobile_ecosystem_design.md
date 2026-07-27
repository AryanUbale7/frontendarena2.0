# Frontend Arena: Mobile Ecosystem Design Specification

This document defines the complete product layout, information architecture, interface design, gesture configurations, and UX behavior for the **Frontend Arena Mobile Application** (supporting iOS, Android, and Progressive Web App versions).

---

## Mobile Navigation Shell & Gestures

To deliver native-level responsiveness (matching platforms like Linear Mobile and Discord), the app utilizes a tab-based navigation shell with unified gesture controls.

```
+-----------------------------------------------------+
| [Avatar] Home Dashboard                 [Search] [B] | Header Bar
+-----------------------------------------------------+
|                                                     |
|                                                     |
|                   MAIN MOBILE VIEWPORT              |
|                      (Scrollable)                   | Screen Canvas
|                                                     |
|                                                     |
|                                                     |
+-----------------------------------------------------+
|  (Home)   (Explore)   (Team)   (Submit)   (Profile) | Bottom Tab Bar
+-----------------------------------------------------+
```

### 1. Unified Gesture Framework
*   **Pull to Refresh:** Standard drag-down action. Features a custom spinning Neon Pink (`#FF006E`) micro-animation and haptic feedback trigger.
*   **Swipe Back (iOS):** Edge swipe from left to right triggers standard page navigation pop transitions.
*   **Swipe to Open Chat Info:** Dragging from the right edge inside direct messages reveals the team profile sidebar.
*   **Bottom Sheet Dismissal:** Dragging a bottom sheet down past a `60px` threshold dismisses the modal.

### 2. Bottom Tab Bar Configurations by User Role
*   **Participant:** Home, Explore, Team Workspace, Submission Center, Profile.
*   **Judge:** Dashboard, Review Queue, Scorecard Workspace, Review History, Profile.
*   **Mentor:** Schedule, Booking Requests, Help Tickets Queue, Chat, Profile.
*   **Organizer:** Live Operations Dashboard, Submissions Queue, Broadcast Console, Settings.
*   **Admin (Monitoring Mode):** Telemetry Console, Cluster Health, Logs Explorer, Alerts center.

---

## 1. Splash & Onboarding

### 1. Purpose
Loads application assets, validates active sessions, and guides new users through the platform value propositions.

### 2. User Journey
1.  **Launch:** Opens the app; views splash animation.
2.  **Slide:** Swipes through onboarding carousels illustrating challenge structures.
3.  **Configure:** Enables push notifications, selects theme preferences, and chooses language.

### 3. Layout & Section Hierarchy
*   **Splash State:** Centered logo mark against a deep black canvas.
*   **Onboarding Carousel:** Full-screen paging interface.
*   **Setup View:** Bottom sheet controls for notifications permission and language selection.

### 4. Component Specification & Content
*   **Onboarding Slide Card:** Large illustration representing code collab, Hatton display text headline (`24px`), Inter UI body subtext (`14px`), and progress dot indicators.

---

## 2. Authentication

### 1. Purpose
Provides secure, low-friction entryways including SSO integrations and biometric login protocols.

### 2. User Journey
1.  **Entry:** Arrives from onboarding; notices biometric FaceID prompt.
2.  **Verify:** Scans biometric to log in instantly.

### 3. Layout & Section Hierarchy
*   **Header:** Brand mark, welcome tagline.
*   **Auth Inputs:** Username, password fields, and single-tap Biometric button.
*   **SSO Row:** Horizontal buttons for GitHub and Google oauth.

---

## 3. Mobile Home (Dashboard)

### 1. Purpose
The personalized mobile control room, keeping participants aware of current timelines, active deadlines, and recommendations.

### 2. User Journey
1.  **Entry:** Opens app; scans the countdown banner.
2.  **Update:** Reads recent system announcements.

### 3. Layout & Section Hierarchy
*   **User Welcomer Header:** User avatar, name, and notifications bell icon.
*   **Deadline Alert Bar:** High-contrast countdown strip showing time remaining.
*   **Scrollable Dashboard Cards:** Live statistics, upcoming milestones, and recommended challenges.

---

## 4. Explore & 5. Event Details

### 1. Purpose
Allows participants to discover events and read timelines on-the-go.

### 2. Layout & Section Hierarchy
*   **Search Box:** Locks to top on scroll. Includes quick filter category tags.
*   **Mobile Event Card:** Large visual header, Hatton title (`18px`), category tags, and a prominent "Register" bottom sheet action.

---

## 6. Participant Workspace & 7. Team Workspace

### 1. Purpose
Supports mobile communication and project coordination within a hackathon team.

### 2. Layout & Section Hierarchy
*   **Team Hub:** Tabbed view: Chat, Tasks, Resources.
*   **Tasks View:** Vertical checklist showing assignees and checkboxes.

### 3. Component Specification & Content
*   **Team Chat Component:** Native chat view. Bubble layouts: teammate messages are left-aligned in grey, the user's messages are right-aligned in Teal/Pink. Input bar includes file attach and image hooks.

---

## 8. Mobile Submission Experience

### 1. Purpose
Allows participants to draft submissions, upload pitch decks, and verify deployment status from their phone.

### 2. User Journey
1.  **Draft:** Inputs project descriptions and connects their GitHub repository.
2.  **Submit:** Uploads pitch deck PDF and clicks "Verify Build".

### 3. Layout & Section Hierarchy
*   **Form Scroll View:** Text fields, asset upload drag-zones, and validation logs.
*   **Sticky Footer Action:** "Save Draft" and "Validate Submission" controls.

---

## 9. Evaluation Report & 10. Leaderboard

### 1. Purpose
Access detailed project evaluations and view live rankings.

### 2. Layout & Section Hierarchy
*   **Interactive Radar Chart:** SVG-rendered radar chart showing performance scores.
*   **Podium Banner:** Displays top 3 teams on a visual podium layout, with the leaderboard list scrolling below it.

---

## 11. Notifications Hub & 12. Messages

### 1. Purpose
Receive push notifications, chat with mentors, and read organizer broadcasts.

### 2. User Journey
1.  **Alert:** Taps a push notification stating "Submission Evaluated".
2.  **Navigate:** Opens directly to the evaluation report.

---

## 13. Judge Mode & 14. Mentor Mode

### 1. Purpose
Enables judges to grade submissions and mentors to manage bookings on-the-go.

### 2. Layout & Section Hierarchy
*   **Judge Review Sheet:** Bottom sheet containing rubric scales, numeric input buttons, and comment fields.
*   **Mentor Schedule View:** Calendar display showing active booking times and quick buttons to launch Zoom/Teams meetings.

---

## 15. Organizer Mode & 16. Admin Mode

### 1. Purpose
Read-only monitoring views for organizers and root admins to track platform health.

### 2. Layout & Section Hierarchy
*   **Telemetry Strip:** High-density, compact stats page tracking worker queues, cluster CPU usages, and system errors.

---

## 17. Portfolio Profile, 18. Settings, & 19. Offline Support

### 1. Purpose
Showcase developer achievements, configure preferences, and handle offline activities.

### 2. Offline Behavior Specifications
*   **Local Caching:** Submissions, calendars, and certificates are cached locally using SQLite/IndexDB.
*   **Offline Submissions:** Users can edit project draft fields offline. Changes are saved locally and synced automatically when network connection is restored.
*   **Visual Offline Banner:** Displays a thin warning bar stating "Working Offline — changes will sync once connection is restored".

---

## Shared Accessibility (a11y) & Gesture Specifications
*   **Minimum Target Area:** All tap actions and form inputs maintain a minimum touch target area of `44px x 44px`.
*   **Font Scaling:** Layouts must support dynamic type adjustments without overlapping text containers.
*   **Haptic Engine Integration:** Haptic vibration feedbacks occur on:
    *   *Succesful validation checks* (light double tap feedback).
    *   *System errors* (medium warning vibration).
    *   *Pull-to-refresh reload* (micro click feedback).
