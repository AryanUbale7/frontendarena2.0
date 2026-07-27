# Frontend Arena: Public Website Experience Design

This blueprint specifies the visual structure, layout hierarchy, interactive flow, and content design for the Frontend Arena public website. The entire system is built upon the approved **Frontend Arena Design System (v1.0)**, utilizing dark-theme obsidian layers, Hatton display serif headlines, Inter UI typography, Space Grotesk tabular data numbers, and functional accents of `#FF006E` (Pink) and `#FFD60A` (Gold).

---

## Global Navigation & Footer System

### 1. Global Navigation (Header)
*   **Visual Style:** Fixed at the top (`position: sticky; top: 0; z-index: 1000`). Height `64px`. A frosted-glass barrier (`rgba(5, 5, 5, 0.8)` with `backdrop-filter: blur(16px)`). A thin bottom border (`1px solid #161619`).
*   **Desktop Layout:**
    *   **Left (Logo):** Wordmark "Frontend Arena". "Frontend" in Hatton sentence case (`#F5F5F7`), "Arena" in Inter Medium (`#FF006E`). 
    *   **Center (Navigation Links):** Inter UI Medium (`13px`). Spacing: `gap: 24px`.
        *   *Explore* (triggers Mega Menu on hover)
        *   *Enterprise* (direct link)
        *   *Pricing* (direct link)
        *   *Resources* (triggers dropdown)
    *   **Right (Search, Notifications, & Auth CTAs):**
        *   *Search Trigger:* Glassmorphic input outline (`180px` width) with search icon and `Ctrl+K` shortcut indicator.
        *   *Notification Area:* Bell icon (`18px`) with a tiny `#FF006E` dot indicating active alerts.
        *   *Login:* Ghost button (`Inter Medium`, `#A1A1AA`).
        *   *Host Event:* Primary Button (`#FF006E`, `#F5F5F7` text, `radius-sm`).
*   **Mega Menu (Explore Hackathons):**
    *   **Trigger:** Hovering over the "Explore" nav link. Animates down from header base via `translateY(0)` from `-10px` with a fade-in (`duration: 200ms`, `cubic-bezier(0.16, 1, 0.3, 1)`).
    *   **Layout:** Two-column grid (`800px` width, suspended floating panel with `#1E1E22` border and `Shadow High`).
        *   *Left Column (2/3 width):* Featured Event Spotlight. Image thumbnail (`radius-md`), event title in Hatton, short summary, prize pool highlighted in Space Grotesk.
        *   *Right Column (1/3 width):* Category Quick Links. Vertical list of categories (AI & Machine Learning, Open Source, Web3 & Blockchain, Mobile Design, Enterprise Challenges) with tiny linear icons.
*   **Mobile Navigation:**
    *   **Aesthetic:** Standard header height (`56px`). Menu button on the right transitions from hamburger (3 horizontal lines) to "X" close mark.
    *   **Expansion:** Full-screen slide-down menu overlay in obsidian background (`#050505`). Large-scale typography for navigation links (Inter, `20px` font size, `gap: 24px`). Active section expands to reveal secondary links.

### 2. Global Footer
*   **Visual Style:** Desktop height variable. Background `#0D0D0E`, top border `1px solid #161619`. Margins: `padding: 80px 0 40px 0`.
*   **Layout:** 5-column grid system.
    *   **Column 1 (Brand/Newsletter):** Logo, trademark copy, and social links (horizontal row of Lucide icons: GitHub, Twitter, Discord, LinkedIn). Monospace version block in Space Grotesk (`v1.0.0`).
    *   **Column 2 (Platform):** Explore, Host an Event, Code Playground, Arena Live, Rules & Code of Conduct.
    *   **Column 3 (Resources):** Help Center, API Docs, System Status, Brand Kit, Sponsor Guides.
    *   **Column 4 (Company):** About Us, Careers, Press, Contact Sales, Security & Compliance.
    *   **Column 5 (Legal):** Privacy Policy, Terms of Service, DPA, Cookie Preferences.
*   **Newsletter Subscription (Inside Column 1):** Inline form. Input box (Background `#050505`, border `#1E1E22`) and dynamic arrow button. Placeholder: "Email address". Hovering on the input transitions border to active state `#FF006E`.
*   **Responsive Behavior:** 5-column grid collapses to a 2-column grid on Tablet, and a single vertical stack on Mobile, prioritizing legal/trademark information at the absolute bottom.

---

## Page 1: Home (Platform Gateway)

### 1. Purpose
The Homepage acts as the primary conversion funnel. It must instantly validate Frontend Arena's credibility, showcase active events, demonstrate scale, and split traffic into two main profiles: **Participants (Developers/Designers)** and **Organizers (Enterprises/Colleges)**.

### 2. User Journey
1.  **Entry:** Arrives at the Hero section; absorbs high-end branding (Hatton Headline) and immediate CTA actions.
2.  **Validation:** Scrolls to live platform statistics and corporate sponsor logos, proving scale.
3.  **Discovery:** Views active featured events and interacts with the leaderboard preview.
4.  **Proof:** Explains "How It Works" and provides social proof via testimonials.
5.  **Conversion:** Clicks either "Browse Events" or "Request Demo".

### 3. Layout & Section Hierarchy
*   **Sticky Announcement Banner** (Top of page, 32px height)
*   **Hero Section** (Fullscreen/low-density)
*   **Live Platform Statistics** (Stat bar)
*   **Featured Hackathons** (Visual grid)
*   **Explore Categories** (Iconic grid)
*   **Why Frontend Arena** (Value propositions)
*   **Platform Features** (Interactive bento grid)
*   **How It Works** (Stepper flow)
*   **Upcoming Events & Past Winners** (Carousels)
*   **Live Leaderboard Preview** (Interactive data visual)
*   **Sponsors, Partners & Testimonials** (Social proof)
*   **Community Section** (Discord callout)
*   **FAQ & Newsletter Signup** (Closing blocks)
*   **Final Call-To-Action** (Full-width banner)

### 4. Component Specification & Interactions

#### Section A: Hero Section
*   **Layout:** Centered single column with generous whitespace (`padding-top: 120px; padding-bottom: 96px`). Background has a subtle radial gradient centered at the top (`rgba(255, 0, 110, 0.05)` blending into `#050505`).
*   **Headline:** Hatton Display (`72px`, `#F5F5F7`, line-height `1.1`, letter-spacing `-0.03em`). Text: *"Where engineering meets execution."*
*   **Subhead:** Inter Regular (`18px`, `#A1A1AA`, maximum width `680px`, line-height `1.6`). Text: *"Host, compete, and build the future on the most refined hackathon platform ever designed. Built for developers, designers, and innovators."*
*   **CTAs (Inline Group):**
    *   *Primary CTA:* "Compete Now" (Primary Button: solid `#FF006E` with subtle hover bounce).
    *   *Secondary CTA:* "Create an Arena" (Secondary Button: outline with inline arrow icon `→`).
*   **Interaction:** Floating code elements or abstract wireframe boxes float in the background, interacting with mouse movement (parallax effect).
*   **Motion:** Page load animates the Hatton headline from bottom-up (`y: 30px` to `0`, `opacity: 0` to `1`) with standard easing.

#### Section B: Live Platform Statistics
*   **Layout:** Horizontal ribbon (`#0D0D0E`, border-top and border-bottom `1px solid #161619`, padding `24px 0`).
*   **Metrics:** 4 columns centered:
    *   `$1,250,000+` (Prize Pools Awarded)
    *   `240,000+` (Active Developers)
    *   `1,420+` (Builds Submitted)
    *   `98.4%` (Participant Satisfaction)
*   **Typography:** Numbers in `Space Grotesk Giant` (32px, `#FFD60A` or `#F5F5F7`), labels in `Inter UI Small` (`#71717A`, uppercase).

#### Section C: Featured Hackathons
*   **Layout:** 3-column grid containing Hackathon Cards.
*   **Interaction:** Clicking card leads directly to Event Details. Hovering scales card up slightly (`1.01x`) and activates a subtle gradient border transition.

#### Section D: Live Leaderboard Preview
*   **Layout:** Split-screen layout.
    *   *Left Column:* Hatton headline: *"The Arena is Live."* Inter body text describing real-time scoring, live-test execution pipelines, and ranking updates.
    *   *Right Column:* Interactive mini-leaderboard component. Displays top 5 participants with profile avatars, active problem score counters, and country tags.
*   **Interaction:** Live mock updates. A score will occasionally flash green, count up by 150 points, and swap rows with the competitor above it with a smooth slide transition.

### 5. UX & Accessibility Best Practices (Home)
*   Ensure the radial gradient behind the hero has adequate contrast relative to text.
*   The live leaderboard updates must respect `prefers-reduced-motion` settings.
*   All images must have defined `alt` descriptions.

---

## Page 2: Explore Hackathons (Discovery Hub)

### 1. Purpose
Provides a lightning-fast event discovery hub. It allows participants to filter through hundreds of events using advanced parameters, helping them find contests matching their skills, timeframe, and budget.

### 2. User Journey
1.  **Entry:** Arrives looking for a competition; sees a prominent search bar.
2.  **Filter/Search:** Toggles between "Active", "Upcoming", and "Completed" events; filters by category (AI, Blockchain, Web Dev) or prize pool size.
3.  **Evaluation:** Scans the visual grid of cards, comparing dates and rewards.
4.  **Conversion:** Clicks a card to view specific details.

### 3. Layout & Section Hierarchy
*   **Search & Filter Toolbar:** Sticky layout control row.
*   **Featured Spotlight Hero:** Horizontal, full-width showcase of the month's biggest event.
*   **Dynamic Grid/List Display:** Main event loop showing active and trending cards.
*   **Pagination Control:** Space Grotesk page selector.

### 4. Component Specification & Interactions

```
+--------------------------------------------------------------+
| [ Search hackathons... ]  [Category V]  [Sort: Prize V]  [=] |
+--------------------------------------------------------------+
|                                                              |
|  +--------------------------------------------------------+  |
|  | FEATURED SPOTLIGHT HACKATHON CARD                      |  |
|  +--------------------------------------------------------+  |
|                                                              |
|  +------------------+  +------------------+  +------------+  |
|  | Hackathon Card 1 |  | Hackathon Card 2 |  | Card 3     |  |
|  +------------------+  +------------------+  +------------+  |
|                                                              |
+--------------------------------------------------------------+
```

#### Section A: Search & Filter Toolbar
*   **Layout:** Multi-row bar that locks below the main navigation. Background `#050505` with a divider beneath it.
*   **Components:**
    *   *Search Input:* Search icon, dynamic typing filter.
    *   *Filter Selects:* "Skill Level", "Event Type (Online/In-Person)", "Timeline".
    *   *Sort Dropdown:* "Highest Prize Pool", "Newly Added", "Closing Soon".
    *   *Grid/List Toggle:* Two square icon-buttons in an outline group. Highlighted active state in `#FF006E`.
*   **Interaction:** Instant filtering. Page content does not hard-refresh; rather, the grid items reorganize with a quick fade-in-out transition.

#### Section B: The Hackathon Card Component
*   **Structure:**
    *   **Header:** Dynamic status badge (e.g., "7 days left" in `#FFD60A` or "Registration Open" in emerald green).
    *   **Main Body:** Hatton Headline of the event title. Secondary copy for subtitle. Organizer icon logo + name.
    *   **Footer Metrics:** Left side shows "Prize Pool: $50,000" in Space Grotesk. Right side displays tag pill of the category (e.g., "Web3").
*   **Hover State:** Card background transitions from `#0D0D0E` to `#141416`. Border highlights.

### 5. UX & Accessibility Best Practices (Explore)
*   Provide a clear visual focus state for each dropdown filter.
*   Keyboard navigation (Tab) must cycle through search input, filters, grid cards, and pagination in a logical left-to-right order.
*   Results count must be read by screen readers on update.

---

## Page 3: Event Details Page (Conversions & Detail)

### 1. Purpose
This is the highest-conversion page on the platform. It must provide all critical details (Prizes, Rules, Timeline, Tracks) and convince the participant to register for the event.

### 2. User Journey
1.  **Entry:** Lands on the page; immediately notices the countdown timer and the sticky registration panel.
2.  **Analysis:** Scans the timeline, prize distribution, and sponsors.
3.  **Details:** Reviews the specific tracks and problem statements.
4.  **Conversion:** Clicks "Register for Hackathon" on the sticky sidebar panel, opening the registration modal.

### 3. Layout & Section Hierarchy
*   **Hero Banner:** Event cover image or abstract brand gradient.
*   **Countdown & Title Block:** Large title, dates, and live clock.
*   **Two-Column Layout Grid:**
    *   *Left Column (Main Info):* About the Hackathon, Tracks/Themes, Prizes & Rewards, Timeline/Schedule, Judges, Rules, FAQs.
    *   *Right Column (Sticky Sidebar, 340px width):* Floating registration card, registrant count, official sponsors, resources (GitHub templates, API keys).
*   **Similar Events Loop:** Carousel at the bottom.

### 4. Component Specification & Interactions

#### Section A: Event Hero & Countdown
*   **Layout:** Full-bleed background cover, dark mask overlay to guarantee readability. Title in Hatton (`48px`).
*   **Countdown Component:** Renders in the header block. Space Grotesk numbers (`32px`), showing `02d : 14h : 05m : 42s`. Numbers count down in real time.

#### Section B: Tracks & Problem Statements
*   **Layout:** Accordion group or horizontal layout cards.
*   **Components:** Track Cards. Each track features a short icon-title (e.g., "Best Use of AI") with a description, criteria, and prize allocation.
*   **Interaction:** Clicking a track card expands it to reveal sample resources, getting started code repos, and specific judging criteria.

#### Section C: Floating Registration Card (Sticky Sidebar)
*   **Layout:** Sticks to screen bounds `24px` below the main nav as user scrolls.
*   **Components:**
    *   *Title:* "Join this Arena"
    *   *Metrics:* "2,420 registered" with a row of overlapping small user avatars.
    *   *CTA Button:* Full-width Primary Button (`#FF006E`) reading "Register Now".
    *   *Subtext:* "Registration closes in 2 days".

### 5. UX & Accessibility Best Practices (Event Details)
*   The sticky registration panel must remain accessible on mobile, docking to the bottom of the viewport as a persistent banner.
*   FAQ accordions must use standard semantic HTML `<details>` and `<summary>` tags to support assistive tech.

---

## Page 4: About Us (Vision & Scale)

### 1. Purpose
Builds enterprise trust and highlights the human side of the platform. Demonstrates that Frontend Arena is run by a dedicated team focused on fostering tech innovation.

### 2. User Journey
1.  **Entry:** Arrives looking to understand the company or find press kits.
2.  **Read:** Learns about the mission, values, and milestone timeline.
3.  **Meet:** Views the leadership team and advisor board.
4.  **Join:** Clicks CTA to view open career roles or join the community.

### 3. Layout & Section Hierarchy
*   **Editorial Hero:** Hatton title explaining *why* we built this platform.
*   **Mission & Vision statement:** Large-type typographic quote block.
*   **Timeline Journey:** Vertical timeline marking company milestones.
*   **Core Values:** 3-column card grid.
*   **Team Grid:** High-fidelity portraits of team members with social links.
*   **Community Callout:** Discord metrics and stats.

### 4. Component Specification & Interactions
*   **Milestone Timeline:** A vertical track with pulsing nodes. Scrolling down triggers a line reveal animation (masking gradient reveals the line as you scroll).
*   **Team Card:** Minimalist square. On hover, the portrait flips or displays a secondary interactive card showing their developer profile, role, and favorite programming language.

---

## Page 5: Blog & Articles (Thought Leadership)

### 1. Purpose
Inbound marketing hub. Host developer tutorials, product updates, organizer success stories, and thought leadership articles about tech innovation.

### 2. User Journey
1.  **Entry:** Lands from search or social link directly onto an article or the blog index.
2.  **Explore:** Filters by category (e.g., "Developer Tips", "Case Studies").
3.  **Read:** Experiences a clean, distraction-free typography layout.
4.  **Subscribe:** Signs up for the newsletter inside the article flow.

### 3. Layout & Section Hierarchy
*   **Featured Article Hero:** Left/Right split. Large card, Hatton title, metadata, reading time.
*   **Category Filter Bar:** Minimal horizontal tabs (Inter UI).
*   **Article Grid:** 3-column clean cards.
*   **Newsletter Box:** Inline form container with background surface.
*   **Reading View (Single Article):**
    *   Header metadata (Author name, date, read time).
    *   Centered text column (Max width `680px`, Inter Regular `16px`, line-height `1.7` for optimal reading).
    *   Right margin contains sticky social share buttons.
    *   Bottom: "Related Articles" grid.

### 4. Component Specification & Interactions
*   **Category Tabs:** Segmented pill shape with sliding highlight element.
*   **Code Block Component (Inside Articles):** Dark code blocks with syntax highlighting, a "Copy Code" button on the top right, and monospace font.

---

## Page 6: Contact & Sales (Inquiries)

### 1. Purpose
Inbound lead generation for enterprises, universities, and sponsors. Directs users to the appropriate support channels.

### 2. User Journey
1.  **Entry:** Navigates from navigation or footer to contact.
2.  **Select Channel:** Chooses between "Sales Inquiry", "Technical Support", or "Partnerships".
3.  **Submit:** Completes the form fields.
4.  **Confirmation:** Views a reassurance message confirming expected response times.

### 3. Layout & Section Hierarchy
*   **Page Header:** Hatton title: *"Let's build something together."*
*   **Two-Column Split Grid:**
    *   *Left Column (Sales/Support Details):* Direct email contacts, physical office address, and support ticketing shortcuts.
    *   *Right Column (Interactive Form):* Dropdown selectors, name, organization, size, and message fields.
*   **Interactive FAQ Section:** Frequently asked questions for quick self-service support.

### 4. Component Specification & Interactions
*   **Contact Form Fields:** Float label animation. Clicking into the input field floats the label upwards, changing its color to `#FF006E`.
*   **Success Confirmation Modal:** Replaces the form on submission with a green checkmark and a personalized note using standard slide-up transitions.

---

## Page 7: Pricing Plans (SaaS Packages)

### 1. Purpose
Converts organizations (companies, universities, communities) into paying clients by presenting clear, transparent pricing and feature packages.

### 2. User Journey
1.  **Entry:** Arrives looking for costs to host an event.
2.  **Compare:** Toggles between billing structures (Annual/Monthly); scans columns.
3.  **Detail Check:** Scrolls down to check the specific feature checklist matrix.
4.  **Conversion:** Clicks "Get Started" on the selected plan.

### 3. Layout & Section Hierarchy
*   **Header:** Hatton title, billing toggle switch.
*   **Plan Grid:** 3 main columns (Startup, Organization, Enterprise) + 1 highlighted College variant.
*   **Feature Matrix Table:** Extensive line-by-line comparison of limits, customization, support, and tools.
*   **Closing FAQs & Sales Contact.**

### 4. Component Specification & Interactions

```
            [ Annual Billing (Save 20%) ]  [ Monthly ]

  +------------------+  +------------------+  +------------------+
  | STARTUP          |  | ORGANIZATION     |  | ENTERPRISE       |
  | $499/mo          |  | $1,999/mo        |  | Contact Sales    |
  |                  |  | (Popular)        |  |                  |
  | [ Get Started ]  |  | [ Get Started ]  |  | [ Contact Us ]   |
  +------------------+  +------------------+  +------------------+
```

*   **Plan Cards:**
    *   *Organization Card:* Highlighted with a subtle `#FF006E` top border line and a "Most Popular" tag. 
    *   *Pricing Typography:* Dollar values in Space Grotesk Large (`36px`), billing term in Inter UI Small (`#71717A`).
*   **Interactive Compare Table:** Sticky column headers remain at top of viewport as user scrolls through the feature checklist.

---

## Page 8: Enterprise (Scale & Security)

### 1. Purpose
Targeted specifically at Chief Technology Officers, HR Directors, and Innovation Managers at Fortune 500 companies. Establishes security, white-labeling, and scale capabilities.

### 2. User Journey
1.  **Entry:** Navigates to Enterprise looking for secure internal event tools.
2.  **Verify:** Reviews SOC2 validation badges, compliance, and white-labeling options.
3.  **Discovery:** Inspects dedicated analytics features and success cases.
4.  **Conversion:** Clicks "Request a Demo".

### 3. Layout & Section Hierarchy
*   **Enterprise Hero:** Large Hatton display headline, subtext, logo wall of corporate clients.
*   **Key Pillars Grid:** White-label options, enterprise-grade security, custom integrations, dedicated support.
*   **Security & Compliance Section:** Large SOC2, ISO, GDPR badges with security policy links.
*   **Analytics Showcase:** High-end mock dashboards showing corporate activity reports.
*   **Request Demo Form:** Deep form capturing company requirements.

### 4. Component Specification & Interactions
*   **Interactive Analytics Mockup:** A visual mockup of the administrator dashboard. Hovering over graph elements highlights data points (Space Grotesk metrics) and reveals customizable export options.

---

## Page 9: Careers (Hiring portal)

### 1. Purpose
Attracts world-class engineering, design, and product talent to build the platform.

### 2. User Journey
1.  **Entry:** Arrives looking for remote roles or company culture details.
2.  **Examine:** Reads about cultural values, perks, and working standards.
3.  **Discovery:** Browses active job listings, filtering by department.
4.  **Conversion:** Clicks a listing, leading to the application flow.

### 3. Layout & Section Hierarchy
*   **Culture Hero:** Editorial typography, group photos.
*   **Perks Grid:** 3-column icon-grid (flexible hours, remote stipend, wellness).
*   **Open Positions:** Vertical list grouped by department (Engineering, Product, Sales).

### 4. Component Specification & Interactions
*   **Job Row Component:** Rows hover-transition to surface color `#141416` and display an arrow icon pointing to the right. Job details include department, location (Remote/Hybrid), and type (Full-time).

---

## Page 10: Help Center (Knowledge Base)

### 1. Purpose
Reduces support ticket volume by enabling participants and organizers to self-solve issues.

### 2. User Journey
1.  **Entry:** Arrives with an issue (e.g., "How to submit code").
2.  **Search:** Enters keywords in the central search input.
3.  **Browse:** Selects category boxes (e.g., "Submissions", "Team Management").
4.  **Read:** Finds step-by-step documentation with screenshots.

### 3. Layout & Section Hierarchy
*   **Search Hero:** Massive input block centered.
*   **Quick Links Category Grid:** 6 cards covering main topics.
*   **Popular Articles:** 2-column list of frequently read guides.
*   **Support Banner:** Callout box for direct ticketing.

### 4. Component Specification & Interactions
*   **Predictive Search Bar:** As you type, a dropdown list displays matching article titles instantly under the input box with standard fade-in easing.

---

## Animation & Motion Spec

To keep the platform feeling premium, avoid cheap bounce animations or excessive flash. All transitions use our **Standard Easing (`cubic-bezier(0.16, 1, 0.3, 1)`)** for smooth, professional motion.

### Core Motion Library
1.  **Hero Title Reveal:** Opacity `0` to `1`, `translateY(24px)` to `0`, over `450ms`.
2.  **Interactive Card Hover:** Scale `1x` to `1.01x`, border color changes to dynamic gradient, shadow expands to Low Shadow, over `150ms`.
3.  **Accordion Expand:** Height `0` to `auto`, opacity `0` to `1`, over `250ms` using standard easing.
4.  **Sidebar Sticky Transition:** Clean, stutter-free position locking using hardware-accelerated translation layers.

---

## Visual Assets & Graphics Guidelines

Since we do not use placeholders, all visual assets must follow these strict style rules:
*   **Style:** Minimal vector schematics, wireframes, and raw code snippets in high contrast. No cartoonish flat-art characters.
*   **Visual Elements:** Subtle mesh gradients using our primary pink (`#FF006E`) fading into black, representing deep space, focus, and creativity.
*   **Screenshots:** Frameless screenshots showing code editors, ranking grids, and dashboard analytics. All screenshots must use dark-mode styling matching the design system.
