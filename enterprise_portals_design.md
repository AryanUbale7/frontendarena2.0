# Frontend Arena: Enterprise Portals Design Specification

This document defines the complete product layout, information architecture, interface design, and UX behavior for the four enterprise-grade extensions of **Frontend Arena**:
1. **Company Portal** (Accent: Teal `#0D9488`)
2. **College Portal** (Accent: Violet `#8B5CF6`)
3. **Sponsor Portal** (Accent: Emerald Mint `#10B981`)
4. **Recruiter Portal** (Accent: Slate Blue `#64748B`)

---

## 1. Company Portal (Innovation & Corporate Drives)

### 1. Purpose
Enables enterprises to host internal innovation workshops, run product design contests, launch engineering hackathons, and manage corporate hiring pipelines.

### 2. Information Architecture
*   **Company Dashboard** (Overall statistics, current campaigns)
*   **Organization Profile & Settings** (Branding rules, domains)
*   **Campaigns Manager** (Challenge Builder, active Hackathons)
*   **Directory** (Employees list, departments, custom roles)
*   **Submissions Audit** (Challenge entries, shortlisted candidates)
*   **Hiring Pipeline Console** (Candidate review, interview schedules, offers tracker)
*   **Corporate Analytics & PDF Reporting**
*   **Billing & Integrations Settings** (Slack, Workday, Greenhouse sync)

### 3. User Journey
1.  **Creation:** An HR Admin logs in; launches the "Innovation Challenge Builder" to set up a product campaign.
2.  **Monitor:** Accesses the Dashboard to track registration metrics and departments competing.
3.  **Hiring Audit:** Checks the hiring pipeline to review top-ranked submissions and candidate portfolios.
4.  **Hire:** Drags a top performer from "Evaluation Complete" to "Schedule Interview".

### 4. Layout & Section Hierarchy
*   **Section 1: Corporate Campaign Overview** (Visual progress charts of active challenges).
*   **Section 2: Dual Action Grids** (Left: Challenge Builders / Right: Active Talent Pipeline snapshots).
*   **Section 3: Department Participation & Submissions Loop** (Metric breakdown by business unit).

### 5. Component Specification & Content
*   **Hiring Pipeline Kanban Card:** Displays candidate name/avatar, event rank (Space Grotesk), current role/skills list, and integrated calendar action hooks.
*   **Dynamic Challenge Builder Form:** Field inputs with validation checks for rules, prize distribution, and employee eligibility.

### 6. UX, Interaction & Motion Design
*   **UX Decision:** Keep candidates anonymous during initial grading rounds to prevent bias.
*   **Animation:** Drag-and-drop actions on the Kanban board transition cards smoothly between columns, highlighting active targets in Teal (`#0D9488`).

---

## 2. College Portal (Academic Hackathons & Workshops)

### 1. Purpose
Allows educational institutions to host student hackathons, coordinate training workshops, track student participation, and manage performance analytics across departments.

### 2. Information Architecture
*   **Academic Dashboard** (Student counts, event metrics)
*   **Student Registry** (User directory, attendance logs)
*   **Faculty & Coordinators List** (Permission management)
*   **Event Workspace Manager** (Hackathons list, workshops registry)
*   **Academic Certificates Vault** (Issued credentials, templates)
*   **Department Leaderboards** (Inter-departmental performance metrics)
*   **Resource Library** (Starter decks, reading lists)
*   **Settings & Analytics Portal**

### 3. User Journey
1.  **Initiation:** A faculty coordinator launches a collegiate hackathon event.
2.  **Invite:** Invites students via university email domains (automatically approved).
3.  **Track:** Audits student attendance and submissions.
4.  **Reward:** Issues academic certificates in bulk to completing students.

### 4. Layout & Section Hierarchy
*   **Section 1: Academic Metric Ribbon** (Total Students, Registrations, Verified Submissions, Certificates Issued).
*   **Section 2: Department Rankings Table** (Space Grotesk rankings displaying departments by score).
*   **Section 3: Student Registry Loop** (High-density list containing attendance status tags).

### 5. Component Specification & Content
*   **Department Score Card:** Displays department name, active students count, and a performance bar chart in Violet (`#8B5CF6`).
*   **Attendance Row:** Standard cell showing student ID, verified registration status, and entry checklist buttons.

### 6. UX, Interaction & Motion Design
*   **UX Decision:** Display clear warning indicators for students with incomplete profiles to ensure verification details are resolved prior to event start.
*   **Animation:** Department score bars grow horizontally on page load with standard easing.

---

## 3. Sponsor Portal (Branding & ROI Control)

### 1. Purpose
Enables corporate sponsors to manage sponsored hackathon tracks, edit branding assets, track logo impressions, and export leads.

### 2. Information Architecture
*   **Sponsor ROI Dashboard** (Brand impressions, engagement statistics)
*   **Branding Configuration Drawer** (Logo sizes, visual assets vault)
*   **Sponsored Challenges Console** (Track setup, prize pools)
*   **Leads Database Table** (Participant opt-in lists, resume downloads)
*   **Event Analytics & Reports** (Export PDF summary)
*   **Settings**

### 3. User Journey
1.  **Upload:** Sponsor uploads brand assets and updates challenge specifications.
2.  **Monitor:** Tracks live participant reach, impressions, and track clicks during the event.
3.  **Harvest:** Reviews project submissions in their sponsored track.
4.  **Export:** Filters and exports developer opt-in email leads.

### 4. Layout & Section Hierarchy
*   **Section 1: ROI Snapshot Cards** (Impressions count, leads generated, developer reach in Space Grotesk).
*   **Section 2: Brand Assets Upload Panel** (Drag-and-drop assets editor).
*   **Section 3: Opt-in Leads Grid** (Participant directory with quick resume download columns).

### 5. Component Specification & Content

```
Sponsor Leads Table
+--------------------------------------------------------------+
| Candidate       | Skills           | Event Rank | Resume     |
+-----------------+------------------+------------+------------+
| Aryan Patel     | React, Next.js   | #3 (Gold)  | [Download] |
| Sarah Connor    | Python, PyTorch  | #12        | [Download] |
+-----------------+------------------+------------+------------+
```

*   **Lead Card:** Displays candidate name, expertise tags, github links, and a direct download button.

### 6. UX, Interaction & Motion Design
*   **UX Decision:** Clearly display participant privacy opt-in consent states on all downloadable lead logs.
*   **Animation:** Drag-and-drop zone changes border style to Mint Green (`#10B981`) on hover.

---

## 4. Recruiter Portal (Talent Sourcing Console)

### 1. Purpose
A specialized sourcing hub for recruitment agencies and corporate talent acquisition teams to discover, filter, and contact top-performing developers.

### 2. Information Architecture
*   **Recruiter Dashboard** (Top recommendations, active hiring stages)
*   **Talent Search Console** (Advanced filters, skills matching)
*   **Leaderboard Audits** (Ranking matrices)
*   **Candidate Profile Preview Details** (Resume, project ratings, code histories)
*   **Shortlists Folder System** (Group candidates by project requirement)
*   **Hiring Pipelines Console** (Interview booking schedules)
*   **Sourcing Analytics & Reports**

### 3. User Journey
1.  **Search:** Enters search query (e.g., "Svelte developer, Top 10 rank").
2.  **Filter:** Narrows results to developers located in "San Francisco" who have uploaded resumes.
3.  **Review:** Opens a profile card to view hackathon project scores and git code checkups.
4.  **Shortlist:** Saves the candidate to a recruitment pipeline folder.

### 4. Layout & Section Hierarchy
*   **Section 1: Sourcing Core Search Bar** (Dynamic input with predictive tag filters).
*   **Section 2: Sourcing Split Panel**
    *   *Left (2/3 width):* Candidates loop grid with skill tags and ranking scores.
    *   *Right (1/3 width):* Detailed Candidate Profile Flyout containing resume views and contact buttons.

### 5. Component Specification & Content
*   **Talent Card:** Displays candidate avatar, bio tagline, top hackathon finishes, verified skills list, and a "Shortlist" bookmark indicator.
*   **Search Toolbar:** Includes filters for Tech Stack, Location, Availability, Hackathon Ranks, and Verification Status.

### 6. UX, Interaction & Motion Design
*   **UX Decision:** Keep recruiter actions (like bookmarking or emailing candidates) easily accessible on a sticky action footer within the profile detail view.
*   **Animation:** Profile cards expand into place with a subtle slide transition on selection.

---

## Global Search & Communications Center

### 1. Unified Search Command Bar
*   **Search Box:** Pinned to top of all viewports. Supports fuzzy matching across pages, events, candidates, companies, and credentials. Results are organized into clean, scannable subcategories.

### 2. Multi-Channel Communications Center
*   **Template Builder:** Configures templates for Email, SMS, WhatsApp, and Push Notifications. Include customizable placeholders (e.g., `{{team_name}}`, `{{score}}`).
*   **Scheduling Configurator:** Set delivery schedules, throttle rates, and target criteria groups (e.g., "All waitlisted participants").

---

## Responsive Breakpoint Strategy

*   **Desktop Layout (`≥ 1280px`):** Pinned navigation sidebar. Layout uses multi-column dashboards and high-density tables.
*   **Tablet Layout (`768px - 1279px`):** Sidebar collapses to icon view. High-density data tables enable horizontal scrolls.
*   **Mobile Layout (`< 768px`):** Floating navigation footer bar. Multi-column views collapse to single vertical lists, optimizing charts and alerts for readability.
