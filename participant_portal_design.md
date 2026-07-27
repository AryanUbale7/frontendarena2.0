# Frontend Arena: Participant Portal Design Specification

This document defines the complete product layout, information architecture, interface design, and UX behavior for the **Frontend Arena Participant Portal**. 

---

## Portal Navigation & Shell Architecture

The participant workspace utilizes a split-screen container structure optimized for productivity.

```
+-------------------------------------------------------------+
| [=] Dashboard > Active Event   [Search...]  [XP: 2,420] [O] | Header
+-------------------------------------------------------------+
| ( ) Dashboard       |                                       |
| ( ) My Events       |                                       |
| ( ) Team Workspace  |             MAIN VIEWPORT             |
| ( ) Submission      |             (Scrollable)              | Workspace
| ( ) Evaluation      |                                       |
| ( ) Leaderboard     |                                       |
| ( ) Certificates    |                                       |
+---------------------+---------------------------------------+
  Sidebar (240px)
```

### 1. Desktop Sidebar (Navigation Shell)
*   **Visual Style:** Width `240px` (collapsible to `64px` icon-only view). Background `#0D0D0E`, border right `1px solid #161619`.
*   **Layout:**
    *   *Top Section:* Brand wordmark and collapse trigger. Directly below sits the **User Status Block**: Circular avatar with active border glow (`#FF006E`), username (Inter Medium, `#F5F5F7`), and level badge (`Lv. 12` in Space Grotesk). A micro progress bar displays XP progression (`2420 / 3000 XP` in Inter Small, `#71717A`).
    *   *Middle Section (Primary Links):* Vertical stack of navigation options with Lucide icons (Dashboard, My Events, Explore Events, Team Workspace, Submission Center, Evaluation Reports, Leaderboard, Certificates, Achievements).
    *   *Bottom Section:* Direct entryways for Messages (showing inline unread counters), Settings, and Help & Support.

### 2. Mobile Navigation
*   **Aesthetic:** Floating bottom bar (`height: 56px`, `radius-lg`, backdrop-blur `12px`, margins `16px`). Contains 5 core icons: Home, Explore, Team, Submissions, Profile. All other options are grouped inside a "More" sliding panel that slides up from the bottom when tapped.

### 3. Command Palette (`Ctrl + K`)
*   **Visual Style:** Triggers a centered modal dialog (`width: 600px`). Backdrop overlay `rgba(0, 0, 0, 0.7)` with blur. Background `#0D0D0E`, border `1px solid #1E1E22`.
*   **Aesthetic:** A clean search input at the top (Inter, `16px`) with placeholder "Search events, team tasks, commands...". Underneath, results are grouped: *Navigate to*, *Event Actions*, *Quick Commands* (e.g., "Submit Project", "Create Team").
*   **Interactions:** Fully accessible by keyboard. Up/Down arrows select items, `Enter` executes, `Esc` dismisses.

---

## 1. Dashboard (The Command Center)

### 1. Purpose
The central landing hub. It highlights active timelines, immediate tasks, evaluation status, and peer rankings, helping the user stay on track without getting overwhelmed by navigation.

### 2. User Journey
1.  **Entry:** Enters the portal; sees a welcome header showing active status and next steps.
2.  **Urgent Tasks:** Scans the countdown timer for the next submission deadline.
3.  **Recent Updates:** Reviews recent test cases passed or feedback left by mentors.
4.  **Action:** Clicks "Open Submission Center" to upload code updates.

### 3. Layout & Section Hierarchy
*   **Section 1: Hero Welcome Banner** (Wide aspect ratio, dark gradient fill)
*   **Section 2: Active Events & Deadlines** (Left column) and **Quick Actions & Announcements** (Right column)
*   **Section 3: Submission & Test Validation Status** (Wide stat widget)
*   **Section 4: Leaderboard Snapshot & Achievements** (2-column layout)
*   **Section 5: Recommendations Carousel** (Bottom slider)

### 4. Component Specification & Content
*   **Hero Welcome Banner:** Accent gradient `linear-gradient(135deg, rgba(255, 0, 110, 0.15) 0%, rgba(255, 214, 10, 0.05) 100%)`. Headline: Hatton Display (`28px`). Text: *"Build week is live, Aryan."* Subtitle: *"Next milestone: Pitch Deck due in 14 hours."*
*   **Quick Actions Panel:** Stack of secondary buttons (`radius-sm`): *Create Team*, *Launch Playground*, *Book Mentor*, *Verify Certificate*.
*   **Upcoming Deadlines Widget:** Space Grotesk large numbers displaying time remaining, styled with a flashing warning red outline (`#EF4444`) when under 2 hours remain.

### 5. UX, Interaction & Motion Design
*   **UX Decision:** Keep information density high but highly structured. Use dividers (`1px solid #161619`) instead of heavy card backgrounds.
*   **Interaction:** Clicking the timeline points directly to relevant tasks.
*   **Animation:** Hovering over dashboard widgets triggers a soft shadow glow expansion and a scale transition (`1.01x`).

---

## 2. My Events (Registration Manager)

### 1. Purpose
A dashboard dedicated to tracking events the user is registered for, currently competing in, or has completed.

### 2. User Journey
1.  **Entry:** Navigates to "My Events" to check team registration status.
2.  **Filter:** Swings tabs from "Active" to "Past Results" to find official certificates.
3.  **Review:** Expands an event card to view the status of their registration (e.g., "Pending Team Match").

### 3. Layout & Section Hierarchy
*   **Tab Segmented Control:** (Registered, Active, Completed, Wishlist).
*   **Search & Filters Toolbar:** Inline sorting inputs.
*   **Cards Loop:** Responsive card listing.

### 4. Component Specification & Content
*   **Progress Status Cards:**
    *   *Top Badge:* Status (Active / Registration Open / Evaluating / Finished).
    *   *Title:* Hatton Medium (`20px`).
    *   *Progress Bar:* Inline indicator tracking milestones (e.g., "Milestone 2/3 complete" using a `#FF006E` progress line).
    *   *Action Button:* Ghost button for details, Primary Button for active workspaces.

### 5. UX, Interaction & Motion Design
*   **UX Decision:** Group upcoming registration tasks at the top of the cards to avoid missing event launch checklists.
*   **Animation:** Toggling tabs runs a sliding transition on the pill container background.

---

## 3. Explore Events (Discovery Portal)

### 1. Purpose
Connects participants with new coding contests, hackathons, and company recruitment drives.

### 2. User Journey
1.  **Entry:** Lands looking for events with cash prizes.
2.  **Filter:** Filters by "Prize Pool > $10,000" and "Difficulty > Advanced".
3.  **Review:** Explores featured events and trending categories.

### 3. Layout & Section Hierarchy
*   **Featured Banner Carousel:** Prominent top sliders.
*   **Search & Filter Matrix:** Left side contains filter options, right side shows the results grid.
*   **Recommended Section:** Grouped recommendations based on skills list in profile.

### 4. Component Specification & Content
*   **Tag Pills:** Mini rectangular tags. Background `#141416`, border `#1E1E22`. Active tags use a solid `#FF006E` background with white text.
*   **Filter Matrix:** Options include Category (AI, Frontend, Web3), Difficulty (Beginner, Intermediate, Elite), Mode (Online, In-Person), and Duration.

### 5. UX, Interaction & Motion Design
*   **UX Decision:** If search yields zero results, show a clean Empty State with clear actions to clear filters or browse all events.
*   **Animation:** Carousel sliders slide smoothly using the standard easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 4. Team Workspace (Collaboration Engine)

### 1. Purpose
The virtual headquarters for a participant's hackathon team. Consolidates team building, communication, and project planning.

### 2. User Journey
1.  **Entry:** Joins a team or creates a new team card.
2.  **Invite:** Copies invite token link or searches for participants by skill.
3.  **Organize:** Updates tasks on the project Kanban board.
4.  **Communicate:** Drops a message in the integrated chat sidebar.

### 3. Layout & Section Hierarchy
*   **Workspace Header:** Team Name (Hatton H2), Member count, and Settings.
*   **Collaboration Grid:**
    *   *Column 1 (Kanban Board):* Task management lists (Todo, In Progress, In Review, Done).
    *   *Column 2 (Discussion Panel):* Live message board and shared resource links.
    *   *Column 3 (Team Info):* Invites list, roles list (Lead, Builder, Designer), and repository links.

### 4. Component Specification & Content
*   **Kanban Task Card:**
    *   *Visuals:* Background `#0D0D0E`, border `#1E1E22`, rounded corners (`radius-md`).
    *   *Content:* Task Title (Inter, `13px`), assignee avatar, priority badge, and comments count.
*   **Invite Token Bar:** Clean text input with disabled token key and a persistent "Copy Link" button on the right.

### 5. UX, Interaction & Motion Design
*   **UX Decision:** Display clear visual tags indicating submission ownership (e.g., "Only the Team Captain can make final submissions").
*   **Interaction:** Drag-and-drop tasks across board stages.
*   **Animation:** Dragged cards scale up slightly, opacity changes to `0.8`, and they snap into place on release with a smooth spring transition.

---

## 5. Submission Center (Code & Deliverables)

### 1. Purpose
The hub for final submissions. Integrates Git, hosts visual media uploads, validates files, and records version history.

### 2. User Journey
1.  **Entry:** Accesses page; checks remaining time to upload deliverables.
2.  **Link Repos:** Syncs GitHub repo using the integrated auth pipeline.
3.  **Details:** Uploads pitch deck PDF, screenshots, demo video, and inputs descriptions.
4.  **Validate:** Clicks "Validate Build". The platform runs checks on the live deployment and repo links.
5.  **Submit:** Confirms submission and locks version record.

### 3. Layout & Section Hierarchy
*   **Time Indicator Banner:** Visual alert showing deadline countdown.
*   **Form Structure:**
    *   *Section A:* Project Basics (Title, Tagline, Description, Tech Stack).
    *   *Section B:* Deployment Links (GitHub Link, Live App URL).
    *   *Section C:* Assets (Video file upload, PDF Pitch Deck, Screens gallery).
    *   *Section D:* Validation Logs & Version History list.
*   **Submission Control Row:** Save Draft, Verify, and Final Submit buttons.

### 4. Component Specification & Content

```
+--------------------------------------------------------------+
| [   Time Remaining: 02h : 14m : 05s   ]                      |
+--------------------------------------------------------------+
|  GitHub Integration              Live Deployment Link        |
|  +---------------------------+  +--------------------------+  |
|  | [GitHub Connected / Repo] |  | [https://arena-live.app] |  |
|  +---------------------------+  +--------------------------+  |
|                                                              |
|  Asset Upload Drag-Zone (Pitch Deck PDF, Images, Demo video) |
|  +---------------------------------------------------------+  |
|  |                     [ Drag & Drop ]                     |  |
|  +---------------------------------------------------------+  |
|                                                              |
|  [Save Draft]                              [Final Submit]    |
+--------------------------------------------------------------+
```

*   **Drag & Drop Zone:**
    *   *Visuals:* Dashed border `1px solid #2E2E35`. Background `#0D0D0E`. Centered upload icon (`24px`, `#71717A`).
    *   *Interaction:* Dragging files over changes the border to `#FF006E` and the background to a soft pink tint.
*   **Validation Terminal Widget:**
    *   *Visuals:* Dark terminal view (`#050505`, border `#1E1E22`, monospace text).
    *   *Content:* Logs showing validation checks:
        *   `Checking GitHub repository connection... [OK]`
        *   `Validating packages & package-lock... [OK]`
        *   `Validating Live App SSL Certificate... [OK]`

### 5. UX, Interaction & Motion Design
*   **UX Decision:** Auto-save form drafts locally every 30 seconds to prevent data loss.
*   **Interaction:** Clicking "Final Submit" opens a confirmation dialog, prompting the user to type their project name to confirm lock.
*   **Animation:** Validation checklist triggers green tick icons fading in and sliding from left to right sequentially.

---

## 6. Evaluation Reports (Feedback & Analysis)

### 1. Purpose
Provides transparent, detailed evaluations of project submissions, helping participants understand their scores and identify areas for improvement.

### 2. User Journey
1.  **Entry:** Opens page after receiving an "Evaluation Complete" alert.
2.  **Overview:** Scans overall score compared to the average participant score.
3.  **Detailed Review:** Navigates category logs (Accessibility, Security, Code Quality) to read judge comments.
4.  **Export:** Downloads a PDF copy of the report for their resume portfolio.

### 3. Layout & Section Hierarchy
*   **Score Header Bar:** Large-scale score display + PDF download button.
*   **Score Breakdown Grid:**
    *   *Left:* Multi-dimension radar chart (Categories: Code Quality, Design, Innovation, Accessibility, Performance).
    *   *Right:* Score Card matrix with comparison bars (My Score vs Average).
*   **Judge Review Logs:** Card list containing qualitative feedback and improvement recommendations.

### 4. Component Specification & Content
*   **Score Card Component:**
    *   *Metric Title:* Inter Bold (`14px`), e.g., "Accessibility".
    *   *Score:* Space Grotesk Large (`24px`), showing e.g., `9.2 / 10`.
    *   *Visual Range Bar:* A horizontal bar chart tracking progress. The team's score is represented by a solid `#FF006E` bar, with a small tick mark showing the competition average.

### 5. UX, Interaction & Motion Design
*   **UX Decision:** Always display the average score contextually alongside the user's score to help them gauge their performance relative to the competition.
*   **Animation:** Radar chart shapes animate outwards from the center to their final coordinate points on load (`duration: 500ms`).

---

## 7. Event & Global Leaderboards

### 1. Purpose
Displays contest rankings, dynamic position updates, and team scores.

### 2. User Journey
1.  **Entry:** Visits the Leaderboard tab to check their team's rank.
2.  **Filter:** Selects specific tracks or narrows findings to collegiate cohorts.
3.  **Profile Preview:** Clicks on a rival team to inspect their profile card.

### 3. Layout & Section Hierarchy
*   **Leaderboard Tab Selector:** Toggle between Event Leaderboard, Global Rankings, and College Lists.
*   **Quick Filter Options Row:** Input fields for track, team size, and region.
*   **Podium Showcase Widget:** Visual highlight for ranks 1st, 2nd, and 3rd.
*   **Leaderboard Row List:** Alternating list items showing details for ranks 4 through 100.

### 4. Component Specification & Content
*   **Podium Widget:**
    *   *Structure:* Three vertical pedestals. Center is highest (1st Rank, `#FFD60A` gold accent), left is medium (2nd Rank), right is lower (3rd Rank). Displays team avatar, name, score, and rank.
*   **Leaderboard Row Item:**
    *   *Columns:* Rank Number (Space Grotesk), Trend Indicator (`▲` green, `▼` red, or `-`), Team Name & Avatars, Tech Stack tags, Final Score (Space Grotesk, `#FF006E`).

### 5. UX, Interaction & Motion Design
*   **UX Decision:** Keep user context pinned. If the participant's team is rank #42, display their row pinned to the bottom of the viewport as they scroll through the top entries.
*   **Animation:** Rank shifting triggers row swaps with smooth vertical translations (`cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 8. Certificates Portal (Trophies & Credentials)

### 1. Purpose
Issue verifiable completion and placement credentials to participants, boosting brand sharing.

### 2. User Journey
1.  **Entry:** Receives notification that a certificate is ready.
2.  **Review:** Opens page; reviews digital certificate mockup.
3.  **Share:** Clicks "Share to LinkedIn", generating metadata for social networks.

### 3. Layout & Section Hierarchy
*   **Certificates Grid:** Responsive cards listing all certificates earned.
*   **Certificate Viewer Panel (Split Grid):**
    *   *Left:* Document Preview Card (High-fidelity graphic).
    *   *Right:* Verification ID, issuing authority, metadata details, and sharing button group (LinkedIn, Twitter, PDF download).

### 4. Component Specification & Content
*   **Share Button:** Outline button incorporating brand logo icon (e.g., LinkedIn colors on hover).
*   **Credential Verification Badge:** Pill shape stating "Verified Cryptographically" in emerald green text, highlighting the verified hash.

---

## 9. Achievements & Level Progression

### 1. Purpose
Implements gamification mechanics (XP, levels, and badges) to drive year-round user engagement.

### 2. User Journey
1.  **Entry:** Checks profile rank progress and badges.
2.  **Track Milestones:** Reviews locked badges to see how to earn them (e.g., "Submit 3 pull requests to open-source repos").

### 3. Layout & Section Hierarchy
*   **XP Progress Block:** Large Level display, active XP bar, and XP history log.
*   **Badges Matrix Grid:** Categorized grid (Completed, Locked, Rare achievements).

### 4. Component Specification & Content
*   **Badge Component:** Circular shape. Active achievements display full color illustrations. Locked achievements are greyscale with a lock icon mask. Hovering displays the unlock criteria tooltip.

---

## 10. Notifications (Alerts Hub)

### 1. Purpose
Consolidates all system, event, team, and evaluation updates.

### 2. User Journey
1.  **Entry:** Clicks the bell icon in the header; lands on the notifications hub.
2.  **Filter:** Switches between "Unread", "Deadlines", and "System Alerts".
3.  **Action:** Clicking an alert takes the user directly to the relevant dashboard action.

### 3. Layout & Section Hierarchy
*   **Filter Tabs Row:** All, Unread, Mentoring, Team Updates.
*   **Notification Stack:** Vertical list of alert blocks with time stamps.

---

## 11. Messages (Inboxes & Support)

### 1. Purpose
Handles communications from hackathon organizers, judges, mentors, and teammates.

### 2. User Journey
1.  **Entry:** Opens "Messages" to check a mentor's feedback.
2.  **Respond:** Opens a thread and writes a response in the input box.

### 3. Layout & Section Hierarchy
*   **Inbox Layout (Split view):**
    *   *Sidebar Left:* Active conversations categorized by category (Mentors, Teammates, System Announcements).
    *   *Chat Window Right:* Active message thread, input box, and file attachments attachment bar.

---

## 12. Public Portfolio Profile

### 1. Purpose
Acts as a developer's professional resume, showcasing their hackathon history, projects, ratings, and validated achievements to sponsors and employers.

### 2. User Journey
1.  **Entry:** Wants to share progress with recruiters.
2.  **Configure:** Adds their GitHub profile, skills tags, bio, and resume download link.
3.  **Share:** Copies their public vanity link (`frontendarena.com/@username`).

### 3. Layout & Section Hierarchy
*   **Profile Cover & Header:** User avatar, bio, quick social links, and current rank.
*   **Analytics Summary Row:** 3 metrics (Events Competed, Total Wins, XP Level).
*   **Portfolios Loop Grid:** Showcases cards for completed projects, including live links and tech tags.
*   **Verified Badges Case:** Visual badge shelf.

### 4. Component Specification & Content
*   **Project Showcase Card:**
    *   *Image:* Project screenshot (`radius-md`).
    *   *Content:* Title, description, tech badges, and hackathon rank badge (e.g., "1st Place Winner").

---

## 13. Settings Portal

### 1. Purpose
Manage user profiles, email preferences, security tokens, and linked developer accounts.

### 2. User Journey
1.  **Entry:** Wants to link their GitHub account.
2.  **Sync:** Navigates to "Connected Accounts", clicks "Link GitHub", and completes OAuth.

### 3. Layout & Section Hierarchy
*   **Sub-Navigation Tab Stack (Left):** Profile, Security, Connected Accounts, Privacy, System Theme.
*   **Form Settings Panel (Right):** Editable inputs and toggle inputs.

---

## 14. Help & Support Desk

### 1. Purpose
Provides self-service documentation and support ticket entry.

### 2. User Journey
1.  **Entry:** Encounters a workspace error.
2.  **Search:** Searches for "GitHub Action build failure".
3.  **Ticket:** If unresolved, clicks "Open Support Ticket" to detail the issue.

### 3. Layout & Section Hierarchy
*   **FAQs Accordion Grid:** Commonly asked questions.
*   **Contact Support Form:** Input forms + direct ticketing options.

---

## Micro-Interactions Spec

All animations use our **Standard Easing (`cubic-bezier(0.16, 1, 0.3, 1)`)** for clean, premium, and functional UI transitions.

1.  **XP Bar Progress:** Fills from left to right over `800ms` when a user unlocks XP.
2.  **Achievement Unlock Modal:** Slides up from center, scales from `0.9` to `1`, accompanied by a subtle `#FFD60A` gold ambient glow behind the badge, over `350ms`.
3.  **Submission Progress Spinner:** A clean geometric line ring indicator rotates at `1.2s` intervals. On success, it morphs into a green checkmark using a quick elastic-ease transition.
4.  **Rank Changing Row Swap:** Rows slide vertically to swap rankings over `400ms`.

---

## Responsive Breakpoint Strategy

### 1. Desktop Layout (`≥ 1280px`)
*   Main navigation sidebar pinned (`240px`). Main view displays wide multi-column grids (density high, spacing standard `24px` grid).

### 2. Tablet Layout (`768px - 1279px`)
*   Sidebar collapses to icon-only view (`64px`). Multi-column widgets collapse to a single vertical stack.

### 3. Mobile Layout (`< 768px`)
*   Sidebar hidden. Floating bottom navigation bar handles navigation. Page paddings reduce to `16px`. Tables convert to vertical stacked lists.
