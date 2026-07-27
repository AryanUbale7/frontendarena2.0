# Frontend Arena: Platform Admin Portal Design Specification

This document defines the complete product layout, information architecture, interface design, and UX behavior for the **Frontend Arena Platform Admin Portal**. This acts as the internal operating system and control panel for the operations team.

---

## Portal Navigation & Shell Architecture

To accommodate real-time infrastructure logs, database states, and massive user lists, the Platform Admin Portal utilizes a split-navigation layout optimized for widescreen environments.

```
+-------------------------------------------------------------+
| Root Admin Console > Infrastructure    [Sys: Healthy]   [O] | Header
+-------------------------------------------------------------+
| ( ) Overview        |                                       |
| ( ) Organizations   |                                       |
| ( ) Events          |             MAIN VIEWPORT             |
| ( ) Users & Roles   |             (Scrollable)              | Workspace
| ( ) Moderation      |                                       |
| ( ) Engine & Workers|                                       |
| ( ) Infrastructure  |                                       |
+---------------------+---------------------------------------+
  Sidebar (240px)
```

### 1. Global Navigation Sidebar
*   **Visual Style:** Width `240px` (collapsible to `64px` icon-only view). Background `#0D0D0E`, border right `1px solid #161619`.
*   **Active Theme:** Accent highlight color changes to **Electric Indigo** (`#6366F1`) inside the internal Admin Portal to establish root operations context (distinguishing it from the organizer's `#3B82F6` Blue and the participant's `#FF006E` Pink).
*   **Layout:**
    *   *Top Section:* Brand wordmark labeled "Root Console" in Hatton display typography.
    *   *Middle Section (Primary Admin Links):* Dashboard Overview, Organizations, Events, Users, Roles & Permissions, Moderation Center, Evaluation Engine, Worker Monitoring, Storage, Certificate Management, Analytics & Reports, Audit Logs, Security Center, API Management, Billing & Invoices, Feature Flags, Support Desk, System Settings.
    *   *Bottom Section:* Maintenance toggle and active API status indicators.

### 2. Header Control Bar
*   **Visual Style:** Sticky header, height `56px`. Background: Glassmorphic blur `16px` over `rgba(5, 5, 5, 0.8)`. Bottom border `1px solid #161619`.
*   **Layout:**
    *   *Left:* Breadcrumbs showing `Root Admin > Active View`.
    *   *Right:* Global Search input (`Ctrl+K` command launcher), active alerts count tag, and Profile settings selector.

---

## 1. Platform Admin Dashboard (The Root Command Center)

### 1. Purpose
The real-time command center monitoring the overall operational health of the platform, user traffic, and server infrastructure.

### 2. User Journey
1.  **Entry:** Enters the dashboard; scans the platform status and active user traffic.
2.  **Verify:** Evaluates server CPU load, RAM usage, and active queue lengths.
3.  **Action:** Notices a backup delay alert in the database logs; navigates to the infrastructure dashboard to restart the worker pool.

### 3. Layout & Section Hierarchy
*   **Section 1: Platform Health & Alerts Bar** (Wide ribbon with color indicator blocks).
*   **Section 2: Live Activity Metrics Grid** (4-column metric ribbon: Active Users, Running Events, Queue Length, Active Workers).
*   **Section 3: Operations Split Grid**
    *   *Left (2/3 width):* Real-time User Registrations & Submission volume charts.
    *   *Right (1/3 width):* Worker Health Check & Active Queue meters.
*   **Section 4: Active System Alerts & System Logs** (Split bottom cards).

### 4. Component Specification & Content
*   **Active Queue Meter:** Space Grotesk Large (`32px`, `#FFD60A` or `#6366F1`) showing `142` pending submissions.
*   **System Alert Card:** Background `#0D0D0E`, border `#1E1E22` with a yellow warning pulse. Labeled "Database CPU Spike: 92% usage" with a link to view logs.

### 5. UX, Interaction & Motion Design
*   **UX Decision:** Display alerts on a priority scale (Critical, Warning, Info) to ensure that billing issues or server failures are prioritized.
*   **Animation:** Health status pulses animate smoothly every 1.5 seconds.

---

## 2. Organization Management

### 1. Purpose
Verify, manage, and audit corporate, academic, and community organizers hosting challenges on the platform.

### 2. User Journey
1.  **Entry:** Views verification requests.
2.  **Audit:** Opens a college registration card to review tax and non-profit documents.
3.  **Action:** Clicks "Verify Organization", updating their billing structure to a collegiate Tier.

### 3. Layout & Section Hierarchy
*   **Toolbar:** Search bar, tier filters, and verification selectors.
*   **Large Data Table:** Rows of organizations with subscription tier details.

---

## 3. Event Management

### 1. Purpose
Provides root control over every event hosted on Frontend Arena, with capabilities to suspend, clone, or moderate contents.

### 2. User Journey
1.  **Search:** Searches for a reported event.
2.  **Moderate:** Flags an event for infringing copyrights, suspending registration.

### 3. Layout & Section Hierarchy
*   **Filters Bar:** Status filters (Draft, Live, Under Review, Suspended).
*   **Large Data Table:** Rows detailing event names, owners, team sizes, and reports count.

---

## 4. User Management & 5. Role & Permission Management (RBAC)

### 1. Purpose
Manage user credentials, block abusive accounts, and assign custom Role-Based Access Control (RBAC) scopes.

### 2. User Journey
1.  **Entry:** Enters permissions workspace.
2.  **Configure:** Modifies the "Track Coordinator" role template, checking permissions boxes.

### 3. Layout & Section Hierarchy
*   **Roles & Permission Matrix Table:** Interactive checklist grid showing roles against CRUD permissions.

### 4. Component Specification & Content

```
Permission Matrix
+-------------------------------------------------------------+
| Role                 | Edit Event | Evaluate | Manage Billing|
+----------------------+------------+----------+---------------+
| Platform Admin [X]   |    [X]     |   [X]    |      [X]      |
| Event Organizer [X]  |    [X]     |   [ ]    |      [ ]      |
| Assigned Judge [X]   |    [ ]     |   [X]    |      [ ]      |
+----------------------+------------+----------+---------------+
```

*   **Checkbox Inputs:** Standard check containers (`16px`). Checked boxes display a solid `#6366F1` background.

---

## 6. Moderation Center (Abuse & Plagiarism Control)

### 1. Purpose
Auditing plagiarism flags, reported submissions, and account abuse notifications.

### 2. User Journey
1.  **Entry:** Reviews code plagiarism matches.
2.  **Audit:** Opens the code comparison tool to review matching repositories.
3.  **Resolve:** Applies a disqualification penalty, sending automated alerts to the team.

### 3. Layout & Section Hierarchy
*   **Abuse Reports Stack:** Vertical list of tickets.
*   **Code Comparison View:** Split pane showing matching code blocks side-by-side.

---

## 7. Evaluation Engine & 8. Worker Monitoring

### 1. Purpose
Real-time monitoring and control of active worker pools, test execution pipelines, sandbox servers, and auto-scaling limits.

### 2. User Journey
1.  **Monitor:** Reviews CPU loads across worker clusters.
2.  **Action:** Launches 5 additional worker nodes during peak submission hours.

### 3. Layout & Section Hierarchy
*   **Worker Cluster Grid:** Cards showing individual server stats (CPU, RAM, Running Jobs).
*   **Auto-scaling Rule Panel:** Form config settings for scaling triggers.

### 4. Component Specification & Content
*   **Server Health Card:** Features live charts showing CPU/RAM usage (Space Grotesk percentages), active job lists, and a "Restart Worker" action button.

---

## 9. Storage, 10. Certificates, & 11-13. Analytics, Reports, & Audit Logs

### 1. Purpose
Manage repository sizes, issue certificates, track revenue growth, and audit root action histories.

### 2. User Journey
1.  **Audit:** Filters logs by "User: admin-42" to trace infrastructure changes.

### 3. Layout & Section Hierarchy
*   **Audit Logs Table:** Chronological listing showing user, event action, timestamp, IP address, and changed keys.

---

## 14. Security Center & 15. API Management

### 1. Purpose
Monitor failed logins, track rate limit spikes, and configure developer webhooks.

### 2. User Journey
1.  **Alert:** Notices a rate-limiting spike on the public API endpoints.
2.  **Resolve:** Adjusts limits for the offending token.

---

## 16. Billing, 17. Feature Flags, & 18-20. Support, Integrations, System Settings

### 1. Purpose
Handle corporate billing accounts, toggle beta features using feature flags, and toggle maintenance mode settings.

### 2. User Journey
1.  **Feature Flag:** Configures a beta feature flag (`enable-sandbox-run`) to roll out to 15% of active organizers.
2.  **Maintenance:** Toggles Maintenance Mode, updating public viewports to display offline screens.

### 3. Layout & Section Hierarchy
*   **Feature Flag Config Card:** Input form settings controlling rollout percentages.
*   **Maintenance Mode Panel:** System toggle with verification checkbox.

---

## Shared Responsive Breakpoint Specifications

*   **Desktop Layout (`≥ 1280px`):** Sidebar pinned (`240px`). Main view displays dense tables and charts.
*   **Tablet Layout (`768px - 1279px`):** Sidebar collapses to icon view (`64px`). Large tables display horizontal scroll bars.
*   **Mobile Layout (`< 768px`):** Swaps to "Mobile Monitoring Mode". Focuses exclusively on high-priority metrics (System Health, Alerts) rather than complex configuration tables.
