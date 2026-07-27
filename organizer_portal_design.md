# Frontend Arena: Organizer Portal Design Specification

This document defines the complete product layout, information architecture, interface design, and UX behavior for the **Frontend Arena Organizer Portal**. This acts as the administrative operating system for hackathons.

---

## Portal Navigation & Shell Architecture

To support massive data tables, dashboard analytics, and live operational consoles, the Organizer Portal utilizes a high-density, screen-optimized fluid container layout.

```
+-------------------------------------------------------------+
| Org: Vercel Inc. > Next.js Hackathon    [Live Console]  [O] | Header
+-------------------------------------------------------------+
| ( ) Overview        |                                       |
| ( ) Create Event    |                                       |
| ( ) Registrations   |             MAIN VIEWPORT             |
| ( ) Teams           |             (Scrollable)              | Workspace
| ( ) Evaluation      |                                       |
| ( ) Live Operations |                                       |
| ( ) Analytics       |                                       |
+---------------------+---------------------------------------+
  Sidebar (240px)
```

### 1. Global Navigation Sidebar
*   **Visual Style:** Width `240px` (collapsible to `64px` icon-only view). Background `#0D0D0E`, border right `1px solid #161619`.
*   **Active Theme:** Accent highlight color changes to **Royal Blue** (`#3B82F6`) inside the Organizer Portal to establish visual context (distinguishing it from the participant's `#FF006E` Pink).
*   **Layout:**
    *   *Top Section:* Organization Selector dropdown (e.g., "Vercel Inc." with a square logo grid) and Active Event Switcher.
    *   *Middle Section (Primary Admin Links):* Dashboard Overview, Create Event, Event Settings, Registrations, Participants, Teams, Track Config, Problem Statements, Resources, Judges, Mentors, Sponsors, Evaluation Builder, Submissions, Live Operations, Leaderboard Manager, Communications.
    *   *Bottom Section:* Organization Settings, Reports & Analytics, Help Desk.

### 2. Header Control Bar
*   **Visual Style:** Sticky header, height `56px`. Background: Glassmorphic blur `16px` over `rgba(5, 5, 5, 0.8)`. Bottom border `1px solid #161619`.
*   **Layout:**
    *   *Left:* Breadcrumbs showing `Event Name > Current View` (Inter, `#F5F5F7` / `#71717A`).
    *   *Right:* "Live Console" button (flashing cyan active pulse), Notification Bell, and Admin Profile dropdown.

---

## 1. Organizer Dashboard (The Command Center)

### 1. Purpose
The operational command center for an active hackathon. It aggregates real-time stats, submission milestones, and system health signals, enabling organizers to quickly identify bottlenecks.

### 2. User Journey
1.  **Entry:** Enters the dashboard; notices the active event's health score.
2.  **Monitor:** Scans the live registration counter and submission progress charts.
3.  **Action:** Notices 14 pending submissions in the evaluation queue; clicks the queue widget to allocate judges.

### 3. Layout & Section Hierarchy
*   **Section 1: Event Health Header** (Wide status bar)
*   **Section 2: Core Metrics Grid** (4-column Space Grotesk metrics cards)
*   **Section 3: Operations Split Grid**
    *   *Left (2/3 width):* Real-time Registration & Submission Line Chart
    *   *Right (1/3 width):* Evaluation Queue & Worker Status Monitor
*   **Section 4: Recent Activities & System Alerts** (Split bottom cards)

### 4. Component Specification & Content
*   **Event Health Score Card:** Background `#0D0D0E`, border `#1E1E22`. Displays a large circle gauge showing `98%` (Space Grotesk), labeled "Event Health Score". Alerts display status tags (e.g., "All systems operational" in green, or "3 judges inactive" in orange).
*   **Queue Widget:** Vertical list items showing:
    *   *AI Track Submissions:* `42 pending validation` (Space Grotesk).
    *   *UI Track Submissions:* `12 pending review` (Space Grotesk).
*   **Quick Action Buttons:** Row of outline icons: *Add Judge*, *Send Global Email*, *Export Submissions*.

### 5. UX, Interaction & Motion Design
*   **UX Decision:** Prevent administrative fatigue by clustering critical alerts (such as database failures or late submissions) at the top of the dashboard.
*   **Animation:** Loading states utilize custom shimmer overlays. Line chart elements draw coordinates over `800ms` using standard easing.

---

## 2. Create Hackathon (Multi-Step Wizard)

### 1. Purpose
An intuitive, step-by-step setup workflow for configuring all parameters of a hackathon.

### 2. User Journey
1.  **Launch:** Clicks "Create Hackathon"; enters the multi-step configuration interface.
2.  **Configure:** Steps through basic details, timeline, track settings, judging rubrics, and sponsor blocks.
3.  **Review:** Inspects the configuration summary card.
4.  **Launch:** Clicks "Publish Live", launching the public landing page.

### 3. Layout & Section Hierarchy
*   **Wizard Stepper Header:** Horizontal timeline showing steps 1-10.
*   **Main Configuration Canvas:** Centered layout column (`max-width: 800px`) for input forms.
*   **Wizard Control Dock:** Sticky footer bar containing "Save Draft", "Back", and "Continue" buttons.

### 4. Component Specification & Content

```
Step 1 ---- Step 2 ---- [Step 3: Registration Rules] ---- Step 4 .... Step 10
+--------------------------------------------------------------------------+
|  Registration Rules                                                      |
|  * Select Limit: [ 500  ] Participants (Space Grotesk)                   |
|  * Team Sizes: Min [ 2 ] - Max [ 5 ] Members                             |
|  * Auto-Approve Domains: [ *.edu, *.org ]                                |
|                                                                          |
|  [ Back ]                                                   [ Continue ] |
+--------------------------------------------------------------------------+
```

*   **Timeline Input Component (Step 4):**
    *   *Visuals:* Vertical track layout with editable calendar inputs, time selectors, and timezone indicators.
*   **Judging Rubric Configurator (Step 5):**
    *   *Content:* Table row inputs mapping score criteria (e.g., "Code Quality") to weight percentages (e.g., "30%"). System validates that totals sum to `100%`.

### 5. UX, Interaction & Motion Design
*   **UX Decision:** Keep wizard states cached. If the user exits midway, cache their progress locally so they can resume without losing inputs.
*   **Animation:** Form pages slide in from the right to left (`translate-x: 20px` to `0`, `opacity: 0` to `1`) during transition steps.

---

## 3. Event Settings

### 1. Purpose
The control panel for general event parameters, visibility, branding, custom domain mappings, and staff permissions.

### 2. User Journey
1.  **Entry:** Accesses settings to map a custom domain (e.g., `hack.vercel.com`).
2.  **Verify:** Inputs CNAME keys and reviews verification status indicators.

### 3. Layout & Section Hierarchy
*   **Settings Vertical Sub-nav:** General, Domain Config, SEO, Permissions.
*   **Configuration Panels:** Card forms with action buttons.

### 4. Component Specification & Content
*   **Domain Verification Card:** Form with direct inputs for TXT and CNAME values. Status badges show "Active" or "Checking DNS Records" in yellow.

### 5. UX, Interaction & Motion Design
*   **UX Decision:** Guard dangerous settings (like event deletion or public URL changes) behind double-factor authentication prompts.

---

## 4. Registration Management

### 1. Purpose
The control desk for viewing, approving, rejecting, and waitlisting applicants.

### 2. User Journey
1.  **Entry:** Opens page; views new registrations.
2.  **Filter:** Narrows views to "Waitlisted" applicants from specific universities.
3.  **Action:** Selects 20 rows, clicks "Bulk Approve", and registers them.

### 3. Layout & Section Hierarchy
*   **Toolbar:** Search bar, CSV Import/Export buttons, status filters.
*   **Large Data Table:** Rows of registrants with checkbox selections, avatar columns, and metadata.
*   **Approve/Reject Bulk Control Panel:** Renders fixed to the bottom of the screen only when rows are checked.

### 4. Component Specification & Content
*   **Registration Table Row:**
    *   *Columns:* Checkbox, Name/Avatar, Email, Domain, Organization (Space Grotesk), Applied Date, Status Badge (Approved/Pending/Rejected).
    *   *Hover State:* Row background turns to `#141416`, exposing action menus.

### 5. UX, Interaction & Motion Design
*   **UX Decision:** Support quick actions using keyboard shortcuts (e.g., `A` key to approve, `J`/`K` to navigate rows).

---

## 5. Participant Management

### 1. Purpose
Provides detailed views of individual participants, their project history, team affiliations, and activity timelines.

### 2. User Journey
1.  **Entry:** Searches for a specific developer.
2.  **Detail Check:** Opens their profile card to inspect their GitHub history.

### 3. Layout & Section Hierarchy
*   **Search Box Toolbar:** Inline search input.
*   **Cards/List Grid:** Displays cards representing active participants.
*   **Flyout Detail Panel:** Renders from the right edge on row click, showcasing their portfolio.

### 4. Component Specification & Content
*   **Participant Profile Preview Flyout:**
    *   *Visuals:* Width `480px`. Slide-in card panel (`z-index: 500`).
    *   *Content:* User metadata, skill badges, linked teams list, activity logs, and a button to email the participant directly.

---

## 6. Team Management

### 1. Purpose
Administrate team formations, merge requests, disbandments, and mentor allocations.

### 2. User Journey
1.  **Entry:** Looks for solo participants requesting team matchmaking.
2.  **Merge:** Pairs two incomplete teams together.

### 3. Layout & Section Hierarchy
*   **Teams Directory Grid:** Multi-column grid showcasing teams.
*   **Matchmaking Action Bar:** Utility to group individuals into teams based on complementary skill tags.

### 4. Component Specification & Content
*   **Team Detail Card:** Lists team captain, team size progress indicator (e.g., `3/5 members` in Space Grotesk), assigned tracks, and direct links to active workspaces.

---

## 7. Track Management

### 1. Purpose
Create and configure multiple tracks/themes (e.g., "Best Use of AI", "Social Impact") for the event.

### 2. User Journey
1.  **Entry:** Navigates to Tracks to add a new category.
2.  **Configure:** Enters theme rules and assigns a track coordinator.

### 3. Layout & Section Hierarchy
*   **Track Grid Card List:** Visual list of active tracks.
*   **New Track Creation Drawer:** Form drawer for inputting details.

### 4. Component Specification & Content
*   **Track Card:** Features track title, description, dedicated prize allocation (Space Grotesk), and active submissions count.

---

## 8. Problem Statements & 9. Resources

### 1. Purpose
Enables organizers to publish event guidelines, datasets, API keys, and starter templates.

### 2. User Journey
1.  **Entry:** Uploads a datasets package.
2.  **Publish:** Saves as a draft to release at the hackathon kick-off.

### 3. Layout & Section Hierarchy
*   **Resources Directory List:** Table listing all uploaded datasets, APIs, and document links.
*   **Resource Upload Panel:** Drag-and-drop input container.

---

## 10. Judge Management & 11. Mentor Management

### 1. Purpose
Manage judge assignments, track mentor bookings, and monitor workload distribution to prevent review bottlenecks.

### 2. User Journey
1.  **Invite:** Sends invite links to 10 judges.
2.  **Allocate:** Assigns judges to specific tracks and sets target submission counts.
3.  **Monitor:** Tracks real-time evaluation speeds.

### 3. Layout & Section Hierarchy
*   **Judges Directory Grid:** Profile cards containing judge names, assigned tracks, and evaluation speed charts.
*   **Workload Balance Chart:** Real-time bar chart showing how many submissions each judge has evaluated vs their remaining queue.

### 4. Component Specification & Content
*   **Workload Bar Chart:** Visual bar. Green represents completed reviews, grey represents remaining queue. Hovering displays the average evaluation time per submission (Space Grotesk).

### 5. UX, Interaction & Motion Design
*   **UX Decision:** Detect judging conflicts (e.g., a judge affiliated with a participant's university) and automatically alert organizers.

---

## 12. Sponsor Management

### 1. Purpose
Manage corporate sponsors, display logos, publish partner challenges, and track sponsor reports.

### 2. User Journey
1.  **Entry:** Navigates to Sponsors to add a corporate partner.
2.  **Upload:** Uploads logos and sets up custom prize tracks.

### 3. Layout & Section Hierarchy
*   **Sponsor Tier Grid:** Categorized grid (Platinum, Gold, Silver).
*   **Branding Configuration Panel:** Controls logo sizing and landing page visibility.

---

## 13. Evaluation Configuration (Rubric Builder)

### 1. Purpose
The core builder for configuring evaluation criteria, scoring weights, automated checking pipelines, and manual review processes.

### 2. User Journey
1.  **Configure:** Defines scoring criteria (e.g., Code Quality, Design, Innovation).
2.  **Weights:** Sets weight distributions (e.g., Innovation: 40%, Design: 30%, Code: 30%).
3.  **Automate:** Syncs automated verification scripts (e.g., checking for specific dependencies or test coverage).
4.  **Confirm:** Saves the configuration to apply across all judge scorecards.

### 3. Layout & Section Hierarchy
*   **Rubric Builder Canvas:** Centered workspace container.
*   **Interactive Formula Panel:** Real-time visual mapping showing how scores are calculated.
*   **Automated Verification Settings:** Configures API checks and automated testing pipelines.

### 4. Component Specification & Content

```
+--------------------------------------------------------------+
| Evaluation Rubric Builder                                    |
|                                                              |
| [X] Innovation (Manual Review)  |  Weight: [ 40% ]           |
| [X] Code Quality (Auto check)   |  Weight: [ 30% ]           |
| [X] Design System (Manual)      |  Weight: [ 30% ]           |
|                                                              |
| * Total Weight validation marker: [ 100% ] (Space Grotesk)   |
+--------------------------------------------------------------+
```

*   **Weight Input Field:** Custom numeric input. Adjusting weights dynamically updates a pie chart rendering on the right.

### 5. UX, Interaction & Motion Design
*   **UX Decision:** Ensure the system prevents saving unless the total weight distribution equals exactly `100%`.
*   **Animation:** Changing weight values transitions the pie chart segments smoothly using standard easing.

---

## 14. Submission Management

### 1. Purpose
The workspace for auditing project submissions, managing late submissions, and viewing validation test logs.

### 2. User Journey
1.  **Review:** Accesses submissions list.
2.  **Audit:** Views logs for a project that failed automated checks.
3.  **Override:** Accepts a late submission from a team with verified technical issues.

### 3. Layout & Section Hierarchy
*   **Filters Bar:** Status filters (Validated, Failed, Pending Review, Flagged).
*   **Large Submissions Table:** Rows of submissions, tech stacks, and check results.
*   **Log Console Drawer:** Displays raw CLI test execution outputs.

---

## 15. Live Operations (Real-Time Control Room)

### 1. Purpose
The real-time operations room for monitoring the active hackathon, tracking judge speeds, and publishing announcements.

### 2. User Journey
1.  **Launch:** Opens Live Operations on a secondary screen.
2.  **Monitor:** Tracks live submission rates and API check health.
3.  **Announce:** Broadcasts a global announcement that the submission window is closing in 30 minutes.

### 3. Layout & Section Hierarchy
*   **Operations Core Grid (Full screen):**
    *   *Panel A:* Real-time activity timeline stream (new registrations, code commits, submissions).
    *   *Panel B:* API Service Health & automated verification worker status logs.
    *   *Panel C:* Judge performance tracking and active evaluation queues.
*   **Sticky Announcement Broadcast Panel:** Top bar utility for quick messages.

### 4. Component Specification & Content
*   **Active Worker Monitor:** Displays active verification servers. Green pulses indicate healthy server status, red pulses indicate offline servers.
*   **Broadcast Banner Input:** Red text area with a prominent "Broadcast to All Devices" button.

### 5. UX, Interaction & Motion Design
*   **UX Decision:** Limit live UI updates to critical data points to avoid distraction. Use subtle color pulses for state transitions.

---

## 16. Leaderboard Management

### 1. Purpose
Controls rankings visibility, manually publishes results, freezes updates, and manages tie-breaker rules.

### 2. User Journey
1.  **Freeze:** Freezes the public leaderboard 2 hours before the closing ceremony to build suspense.
2.  **Resolve:** Applies a tie-breaker rule to resolve a tie between the top two teams.

### 3. Layout & Section Hierarchy
*   **Rankings Controller Bar:** Quick actions (Freeze, Unfreeze, Recalculate, Publish).
*   **Tie-Breaker Configurator:** Dropdown rules selector.
*   **Leaderboard Audit Grid:** Preview of current rankings before they are published.

---

## 17. Communication Center

### 1. Purpose
Handles bulk communications via Email, SMS, WhatsApp, and Push Notifications.

### 2. User Journey
1.  **Draft:** Creates a templates message (e.g., "Mentor Sessions are open").
2.  **Filter:** Targets "Web3 Track participants only".
3.  **Schedule:** Schedules the email to send at 10:00 AM tomorrow.

---

## 18. Certificate Builder

### 1. Purpose
Design, generate, and issue digital completion and placement certificates in bulk.

### 2. User Journey
1.  **Design:** Uploads certificate templates, positioning dynamic text fields (Name, Rank, Event Date) on the canvas.
2.  **Issue:** Selects all participants and issues the certificates with unique verification hashes.

---

## 19. Reports & 20. Analytics

### 1. Purpose
Generates high-fidelity event performance reports and displays analytics dashboards.

### 2. User Journey
1.  **Analyze:** Reviews participant drop-off funnels and judge evaluation times.
2.  **Export:** Generates a PDF summary report to share with corporate sponsors.

### 3. Layout & Section Hierarchy
*   **Performance Metrics Grid:** Charts displaying registration conversion rates and average build speeds.
*   **Data Table Grid:** Details registration drop-offs by category.
*   **Export Actions Panel:** Quick actions to export datasets in PDF, JSON, or CSV formats.

---

## 21. Organization Settings

### 1. Purpose
Administrate team members, configure RBAC roles, manage billing plans, and set up API integrations.

### 2. User Journey
1.  **Invite:** Invites a teammate as an "Event Coordinator".
2.  **Setup:** Creates an API Key to integrate the event with their Slack channel.

---

## Accessibility (a11y) & Spacing Specs
*   **Typography Contrast:** High-density tables must maintain `#F5F5F7` text on `#050505`/`#0D0D0E` surfaces, ensuring a contrast ratio exceeding WCAG AA standards.
*   **Spacing Grid:** High-density viewports utilize compact spacing guidelines (`padding: 12px` inside tables, `gap: 16px` for layouts) to maximize visible data on screen.
*   **Keyboard Navigation:** Fully accessible keyboard focus states (`2px` solid `#3B82F6` blue border with offsets) on all fields.
*   **Responsive Collapses:** Large tables collapse to card blocks on mobile viewports.
