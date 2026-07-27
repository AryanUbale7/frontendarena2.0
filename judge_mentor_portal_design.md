# Frontend Arena: Judge & Mentor Portals Design Specification

This document defines the complete product layout, information architecture, interface design, and UX behavior for the **Frontend Arena Judge Portal** and **Mentor Portal**.

---

## 1. Judge Portal (Evaluation Engine)

### Brand Accent Color Association
*   **Accent Highlight:** **Gold/Amber** (`#FFD60A`). Represents scoring, evaluation, quality, and podium awards.
*   **Portal Signature:** Clean, distraction-free layout with high-density data visualizations and a split-pane workspace.

### Portal Navigation Shell
*   **Desktop Sidebar (240px):** Collapsible navigation stack containing:
    *   *Top Section:* Judge credentials and Assigned Event Selector.
    *   *Core Links:* Dashboard, Review Queue, Review History, Leaderboard Preview, Analytics, Certificates, Profile, Settings.
*   **Top Bar:** Active track indicator, queue count tag (`12 pending` in Space Grotesk), and profile toggle.

---

### Module 1: Judge Dashboard

#### 1. Purpose
The central operations panel for judges to view their review status, track deadlines, and monitor evaluation speed.

#### 2. User Journey
1.  **Entry:** Accesses the dashboard; reviews remaining submissions and queue progress.
2.  **Verify:** Evaluates recent score calibration metrics.
3.  **Action:** Clicks "Launch Review Workspace" to start evaluating the next project in the queue.

#### 3. Layout & Section Hierarchy
*   **Section 1: Active Stats Row** (4-column metric ribbon: Pending, Completed, Avg Time, Deadline).
*   **Section 2: Calibration Chart & Review Queue Preview** (Split column layout).
*   **Section 3: Leaderboard Snapshot & Recent Activity Logs** (2-column stack).

#### 4. Component Specification & Content
*   **Avg Review Time Metric:** Space Grotesk Large (`32px`, `#FFD60A`) showing `14.2m` per submission.
*   **Calibration Widget:** Displays a horizontal distribution bell curve comparing the judge's scoring deviation against other judges evaluating the same tracks.

#### 5. UX, Interaction & Motion Design
*   **UX Decision:** Highlight the average scoring deviation directly on the dashboard to help judges identify if they are grading too strictly or leniently early in the process.
*   **Animation:** Metric numbers count up smoothly from `0` on initial load.

---

### Module 2: Review Queue

#### 1. Purpose
A high-productivity workflow queue for managing assigned project reviews.

#### 2. User Journey
1.  **Filter:** Narrows view to "AI & Automation" track submissions.
2.  **Sort:** Sorts by "Pending Validation" or "Earliest Submitted".
3.  **Action:** Clicks a submission row to load the workspace.

#### 3. Layout & Section Hierarchy
*   **Queue Filter Toolbar:** Filters by track, submission status, and priority.
*   **Submissions Table:** List of assigned projects with progress bars.

#### 4. Component Specification & Content
*   **Review Table Row:**
    *   *Columns:* Team Name, Track, Automated Score (Space Grotesk, e.g., `85/100`), Time Submitted, Review Status Badge (Draft/Pending/Completed).

---

### Module 3: Submission Details & Module 4: Evaluation Workspace (Split-Pane Design)

To minimize window switching, the Judge Workspace uses a full-screen, split-pane layout.

```
+-------------------------------------------------------------+
| Team: PixelCraft > AI Design Track   [Prev] [5 / 12] [Next] | Header
+-------------------------------------------------------------+
|                              |  Innovation Score:  [ 9.2 ]  |
|                              |  UI/UX Score:       [ 8.5 ]  |
|        LIVE WEBSITE          |  Code Quality:      [ 9.0 ]  | Scorecard
|          PREVIEW             |                              | (Right Pane)
|      (Interactive iframe)    |  Judge Notes:                |
|                              |  [ Write feedback...      ]  |
|                              |                              |
|                              |  [Save Draft]  [Submit Score]|
+------------------------------+------------------------------+
  Left Pane (60% Width)          Right Pane (40% Width)
```

#### 1. Purpose
A side-by-side workspace that allows judges to test the live project build in an interactive preview pane while grading criteria on the scorecard.

#### 2. User Journey
1.  **Test:** Interacts with the live app preview in the left pane; clicks tabs to inspect the GitHub repo files.
2.  **Evaluate:** Inputs numerical scores in the right pane scorecard.
3.  **Submit:** Adds feedback comments, clicks "Submit Score", and locks the evaluation. The next submission loads automatically.

#### 3. Layout & Section Hierarchy
*   **Header Control Bar:** Active submission index, navigation buttons (`Previous` / `Next`), and validation checks.
*   **Left Pane (60% Width):** Tabbed viewport (Live Preview, Git Repo Viewer, Pitch Deck PDF, Demo Video).
*   **Right Pane (40% Width):** Interactive Rubric Scorecard, Judge Notes, and Action buttons.

#### 4. Component Specification & Content
*   **Live Preview Viewport:** Responsive iframe wrapper with custom device width controllers (Desktop, Tablet, Mobile) to test build responsiveness.
*   **Numeric Score Inputs:** Segmented sliders or inputs (`0` to `10.0` with `0.1` increments) utilizing Space Grotesk.

#### 5. UX, Interaction & Motion Design
*   **UX Decision:** Keep notes auto-saved in the background to prevent losing progress if the page is closed.
*   **Animation:** Swapping device previews slides the viewport container using standard easing.

---

### Module 5: Scorecard Spec

#### 1. Scoring Dimensions
*   **Innovation:** Metric tracking originality and uniqueness of the approach.
*   **UI/UX:** Visual elegance, accessibility standards, and styling.
*   **Functionality:** Feature completion and performance.
*   **Code Quality:** Repository architecture, test coverage, and documentation.
*   *Scorecard automatically calculates weighted totals based on the event's configuration.*

---

### Module 6: Review History

#### 1. Purpose
Provides an audit log of a judge's completed evaluations, allowing them to review or edit draft scores.

#### 2. User Journey
1.  **Entry:** Accesses history tab to edit a draft review.
2.  **Audit:** Compares scores for team #12 and team #18 to check calibration consistency.

#### 3. Layout & Section Hierarchy
*   **Data Loop Grid:** List of all evaluated submissions.
*   **Revision History Table:** Displays logs of score updates.

---

### Module 7: Analytics

#### 1. Purpose
Tracks judging speed, scoring distributions, and queue statistics.

#### 2. User Journey
1.  **Review:** Opens analytics to monitor average grading speed.
2.  **Audit:** Compares their grading distributions against the historical averages.

#### 3. Layout & Section Hierarchy
*   **Core Chart Panels:** Distribution curves, track distributions, and time logs.

---

### Module 8: Certificates, Module 9: Profile, & Module 10: Settings

#### 1. Purpose
Enables judges to access their credentials, update expertise profiles, and set availability slots.

#### 2. Layout & Section Hierarchy
*   **Certificates Showcase:** Displays credentials with verification links.
*   **Availability Planner Grid:** Interactive calendar view for configuring time slots.

---

## 2. Mentor Portal (Guidance Workspace)

### Brand Accent Color Association
*   **Accent Highlight:** **Emerald Mint** (`#10B981`). Represents guidance, development, and support.
*   **Portal Signature:** Calendar-focused workspace showing team support tickets and office hours.

### Portal Navigation Shell
*   **Desktop Sidebar (240px):** Collapsible sidebar containing:
    *   *Top Section:* Mentor details and Event Selector.
    *   *Core Links:* Dashboard, Team Support, Office Hours, Help Requests, Resource Center, Session History, Settings.

---

### Module 1: Mentor Dashboard

#### 1. Purpose
The landing hub for mentors to manage session requests, answer help tickets, and check team health.

#### 2. User Journey
1.  **Entry:** Views upcoming booked slots and pending help requests.
2.  **Action:** Clicks "Join Session Room" to jump into an active call with a team.

#### 3. Layout & Section Hierarchy
*   **Section 1: Active Schedule Strip** (Timeline showing today's bookings).
*   **Section 2: Help Request Queue & Assigned Teams List** (Split column layout).
*   **Section 3: Announcements & Activity Feed** (Split bottom cards).

#### 4. Component Specification & Content
*   **Upcoming Session Banner:** Background `#0D0D0E`, border `#1E1E22` with a green accent pulse (`#10B981`). Displays team name, track, booking time, and a prominent "Join Meeting" button.

---

### Module 2: Team Support

#### 1. Purpose
Provides deep visibility into the progress, commits, and health status of assigned teams.

#### 2. User Journey
1.  **Entry:** Navigates to Team Support to review their team list.
2.  **Review:** Selects a team to view their recent milestone submissions.
3.  **Action:** Initiates a team chat message or suggests a video sync.

#### 3. Layout & Section Hierarchy
*   **Assigned Teams Grid:** Cards detailing team metrics.
*   **Team Health Dashboard:** Project checklist tracker.

#### 4. Component Specification & Content
*   **Team Progress Checklist:** Multi-row list tracking tasks (e.g., "GitHub Linked", "Design Uploaded", "Deployment Configured"). Done tasks display green checkmarks.

---

### Module 3: Office Hours Calendar & Module 6: Session Management

#### 1. Purpose
Configure booking availability, manage requests, and launch virtual meeting links.

#### 2. User Journey
1.  **Set Availability:** Clicks availability calendar to select open timeslots.
2.  **Accept:** Reviews booking requests from teams and accepts them.
3.  **Execute:** Joins the meeting link, adds post-session notes, and updates attendance.

#### 3. Layout & Section Hierarchy
*   **Availability Planner Grid:** 7-day grid view of time blocks.
*   **Sessions List:** Tabbable list (Upcoming, Completed, Cancelled).
*   **Session Notes Card:** Rich-text input editor for recording feedback.

#### 4. Component Specification & Content
*   **Time Block Selector:** Drag-and-select calendar container. Green boxes indicate available hours, grey boxes indicate booked slots.

---

### Module 4: Help Requests Queue

#### 1. Purpose
A real-time ticketing queue where teams submit specific technical issues for mentor support.

#### 2. User Journey
1.  **Scan:** Opens the queue to search for help tickets matching their expertise.
2.  **Claim:** Claims a "React Hydration Error" ticket.
3.  **Resolve:** Mentors the team to resolve the issue, updates the status, and closes the ticket.

#### 3. Layout & Section Hierarchy
*   **Help Queue Table:** Displays active tickets by priority, track, and submission date.
*   **Ticket Details Overlay:** Displays issue descriptions, code snippets, and terminal logs.

#### 4. Component Specification & Content
*   **Code Snippet Card:** Monospace container with syntax highlighting and action copy controls.

---

### Module 5: Resource Center, Module 7: Communications, & Modules 8-11: Analytics, Profiles, Settings

#### 1. Purpose
Provides mentors with guides, templates, and analytics to measure their effectiveness.

#### 2. Layout & Section Hierarchy
*   **Resource Grid:** Catalog listing starter kits and templates.
*   **Performance Metrics:** Charts displaying sessions conducted, feedback scores, and average ticket response times.

---

## Shared Responsive Breakpoint Specifications

*   **Desktop Layout (`≥ 1280px`):** Sidebar pinned (`240px`). Main view displays split-pane workspace.
*   **Tablet Layout (`768px - 1279px`):** Sidebar collapses to icon view (`64px`). The split-pane workspace shifts to a stacked layout (website preview on top, scorecard below).
*   **Mobile Layout (`< 768px`):** Bottom floating navigation bar. The workspace displays a tabbed interface (e.g., "Preview", "Scorecard") to fit mobile viewports.
