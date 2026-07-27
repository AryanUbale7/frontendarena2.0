# Frontend Arena: Evaluation & Live Operations Design Specification

This document defines the complete product layout, information architecture, interface design, and UX behavior for the **Frontend Arena Evaluation Platform & Live Operations Center**.

---

## Portal Navigation & Shell Architecture

To support real-time data flows, live build logs, and continuous server telemetry, the Live Operations Center utilizes an ultra-dense, full-screen viewport layout.

```
+-------------------------------------------------------------+
| Telemetry Console > Live Ops    [Ops: Active]   [Workers: 42]| Header
+-------------------------------------------------------------+
| ( ) Dashboard       |                                       |
| ( ) Jobs Queue      |                                       |
| ( ) Pipeline View   |             MAIN VIEWPORT             |
| ( ) Infrastructures |             (Scrollable)              | Workspace
| ( ) Engine Config   |                                       |
| ( ) System Logs     |                                       |
| ( ) Incident Center |                                       |
+---------------------+---------------------------------------+
  Sidebar (240px)
```

### 1. Global Navigation Sidebar
*   **Visual Style:** Width `240px` (collapsible to `64px`). Background `#0D0D0E`, border right `1px solid #161619`.
*   **Active Theme:** Accent highlight color is **Neon Cyan** (`#06B6D4`). Represents execution pipelines, performance metrics, and server telemetry.
*   **Layout:**
    *   *Top Section:* Telemetry Console brand mark in Hatton display typography.
    *   *Middle Section:* Dashboard, Jobs Queue, Pipeline View, Infrastructure Status, Engine Configuration, System Logs, Incident Center.
    *   *Bottom Section:* Cluster selectors and active warning alert tags.

---

## 1. Live Operations Center (The Main Command Center)

### 1. Purpose
The central dashboard displaying real-time events, registrations, active evaluations, and infrastructure health signals.

### 2. User Journey
1.  **Entry:** Opens the Live Ops center; scans the current participant counter and build activity line charts.
2.  **Verify:** Inspects the active queue indicators and API gateway latency stats.
3.  **Action:** Notices a processing bottleneck in the worker cluster; clicks the queue widget to allocate extra servers.

### 3. Layout & Section Hierarchy
*   **Section 1: Live Status Header** (Active user and server health counters).
*   **Section 2: Telemetry Metrics Grid** (4-column metric ribbon: Active Events, Submissions, Running Jobs, Database Load).
*   **Section 3: Operations Split Grid**
    *   *Left (2/3 width):* Real-time build trends and registration growth charts.
    *   *Right (1/3 width):* Active Job Queues & Worker Status monitors.

### 4. Component Specification & Content
*   **Running Jobs Gauge:** Space Grotesk Large (`32px`, `#06B6D4`) showing `82 / 120` workers active.
*   **Telemetry Bar:** Displays real-time database query latency, memory consumption, and network bandwidth details.

---

## 2. Evaluation Queue

### 1. Purpose
Provides absolute visibility into the database queue containing pending, running, completed, and failed compilation jobs.

### 2. User Journey
1.  **Search:** Searches for a failing build ID.
2.  **Filter:** Narrows results to the "Retry Queue" to examine error patterns.
3.  **Action:** Selects 5 failed jobs and clicks "Bulk Retry".

### 3. Layout & Section Hierarchy
*   **Queue Filter Toolbar:** Status tab filters (Pending, Running, Retrying, Failed).
*   **Queue Data Table:** Dense listing of active and pending jobs.

---

## 3. Submission Processing (The 17-Stage Pipeline View)

This module provides a detailed visualization of the 17 sequential stages in the submission lifecycle.

```
[Received] -> [Validate] -> [Clone] -> [Install] -> [Build] -> [Deploy] -> [Audits] -> [AI Review] -> [Score]
```

### 1. Purpose
Visualizes the execution state of a project submission as it progresses from raw repository inputs to final leaderboard score updates.

### 2. User Journey
1.  **Select:** Selects a team submission card to audit.
2.  **Audit:** Watches the pipeline run test actions step-by-step.
3.  **Investigate:** Notices a build failure at **Stage 5 (Build)**; opens the log console to view details.

### 3. Layout & Section Hierarchy
*   **Pipeline Header:** Project Name, Active Stage, Time Elapsed.
*   **Horizontal Pipeline Node Row:** 17 circular node indicators with status paths.
*   **Active Job Console Log Drawer:** Live terminal window showing current command output.

### 4. Stage Flow Details
1.  **Submission Received:** Validates payload parameters.
2.  **Repository Validation:** Checks access permissions for target Git URLs.
3.  **Repository Clone:** Pulls remote source trees.
4.  **Dependency Installation:** Runs package install pipelines.
5.  **Build:** Compiles static files and assets.
6.  **Deployment Verification:** Deploys builds to isolated staging environments.
7.  **Lighthouse Audit:** Records performance, accessibility, and SEO reports.
8.  **Accessibility Audit:** Audits accessibility rule violations.
9.  **Security Scan:** Runs security scanning audits for compromised packages.
10. **Code Quality Scan:** Checks lint rules and codebase patterns.
11. **Responsive Testing:** Renders builds in headless viewports to evaluate layout integrity.
12. **Performance Analysis:** Records CPU execution metrics.
13. **AI Review:** Triggers LLM-based evaluation engines.
14. **Judge Review:** Queues entries for manual scorecard reviews.
15. **Final Score:** Aggregates automated and manual ratings.
16. **Leaderboard Update:** Re-calculates rankings across grids.
17. **Certificate Ready:** Renders credential templates and hashes.

### 5. Component Specification & Content
*   **Pipeline Node:** Circle (`28px`). Active nodes feature a pulsing Cyan (`#06B6D4`) ring. Completed nodes display green checkmarks, and failed nodes display a red warning icon.
*   **Live Log Console:** Monospace panel (`#050505`, border `#1E1E22`). Displays stdout logs in real-time.

### 6. UX, Interaction & Motion Design
*   **UX Decision:** Keep terminal views interactive, enabling log searches and text copying.
*   **Animation:** Status transitions slide nodes from left to right using standard easing.

---

## 4. AI Evaluation Reports

### 1. Purpose
Presents detailed automated feedback reports summarizing strengths, weaknesses, and scores.

### 2. Layout & Section Hierarchy
*   **Score Header Bar:** Large metric score displays + download button.
*   **Category Grid:** Visual charts displaying performance, code quality, and accessibility scores.

---

## 5. Manual Review Status

### 1. Purpose
Tracks manual reviews, assigned judges, and status lists.

### 2. User Journey
1.  **Monitor:** Accesses dashboard to view queue review statuses.

---

## 6. Worker Monitoring & 7. Infrastructure Dashboard

### 1. Purpose
Provides cluster-level views of CPU load, RAM usage, worker scaling status, and CDN latency metrics.

### 2. Layout & Section Hierarchy
*   **Infrastructure Telemetry Grid:** Metrics displaying CPU, RAM, and network traffic.
*   **Service Maps Chart:** Visual node diagram mapping database, Redis, CDN, and worker connections.

---

## 8. Queue Analytics

### 1. Purpose
Tracks queue bottlenecks, average processing times, and failure rates.

### 2. Layout & Section Hierarchy
*   **Analytics Charts Area:** Line charts mapping processing latency, queue loads, and retry spikes.

---

## 9. Leaderboard Engine

### 1. Purpose
Monitors ranking updates, track score calculations, and tie-breakers.

### 2. Layout & Section Hierarchy
*   **Leaderboard Audit Console:** Data table previewing proposed ranks before public publication.

---

## 10. Notification Engine & 11. System Health

### 1. Purpose
Tracks delivery rates for SMS/Email notifications and displays core API service statuses.

---

## 12. Logs & Events

### 1. Purpose
Centralized repository for searching, filtering, and exporting system and API logs.

### 2. Layout & Section Hierarchy
*   **Log Explorer Workspace:** Dense data grid showing timestamps, severities, services, and raw log copy fields.

---

## 13. Incident Center & 14. Analytics

### 1. Purpose
Track active outages, document post-mortems, and analyze platform execution costs.

### 2. User Journey
1.  **Create:** Declares a severity-1 outage, automatically posting alert notices across portals.
2.  **Resolve:** Resolves the issue, logs recovery times, and drafts post-mortem docs.

### 3. Layout & Section Hierarchy
*   **Outage Timeline Tracker:** Vertical timeline showing incident updates.
*   **Post-Mortem Form Panel:** Document editor for recording resolutions.

---

## Shared Responsive Breakpoint Specifications

*   **Desktop Layout (`≥ 1280px`):** Sidebar pinned (`240px`). Main view displays split telemetry panels.
*   **Tablet Layout (`768px - 1279px`):** Sidebar collapses to icon view. Split panels stack vertically.
*   **Mobile Layout (`< 768px`):** Swaps to "Mobile Monitoring Mode", displaying high-priority alerts, worker counts, and active outage controls.
