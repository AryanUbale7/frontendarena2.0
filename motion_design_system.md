# Frontend Arena: Motion Design System & Brand Experience

This document defines the complete motion guidelines, physics parameters, curve presets, layout transitions, micro-interactions, and visual storytelling rules for **Frontend Arena** across Web, Mobile, and PWA viewports.

---

## Section 1: Motion Principles

To ensure that animations improve usability rather than becoming a distraction, the motion framework adheres to four core principles:

1.  **Purposeful & Contextual:** Motion must validate an action, direct user attention, or represent system state transitions. Never add animation purely for decoration.
2.  **Performance First:** Animations must target hardware-accelerated CSS properties (`transform`, `opacity`) and target a stable 60 FPS (or 120 FPS on compatible screens) with zero layout shifts.
3.  **Natural Physics (Easing over Linear):** Elements must accelerate and decelerate smoothly. Linear motion is forbidden.
4.  **Time-Optimized:** Micro-interactions must feel near-instantaneous (`150ms` or less) to maintain responsiveness.

---

## Section 2: Motion Tokens

Developers must define the following transition values globally in the design system variables:

### 1. Easing Curve Presets

```css
:root {
  /* The default easing curve. Fast start, decelerating smoothly. */
  --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
  
  /* Accelerating entry. For elements entering the screen. */
  --ease-enter: cubic-bezier(0.7, 0, 0.84, 0);
  
  /* Quick exit curve. For elements leaving the screen. */
  --ease-exit: cubic-bezier(0.42, 0, 1, 1);
  
  /* Snappy spring curve. Micro-bounces for celebrations/achievements. */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### 2. Duration Scale

| Token | Duration (ms) | Usage |
| :--- | :--- | :--- |
| `duration-fast` | 100ms | Tooltips, checkbox checks, hover states |
| `duration-standard` | 200ms | Buttons active states, dropdown reveals |
| `duration-medium` | 300ms | Accordion expansion, modal transitions |
| `duration-slow` | 450ms | Page transitions, hero logo reveals |
| `duration-celebration`| 800ms | Certificate unlock, level-up card reveals |

### 3. Spring Physics Parameters (Framer Motion Spec)
*   **Micro Spring (Active toggles, check states):** `stiffness: 400`, `damping: 30`, `mass: 0.8`.
*   **Celebration Spring (Badge unlock, card flips):** `stiffness: 180`, `damping: 12`, `mass: 1.0` (deliberate bouncy feedback).

---

## Section 3: Page Transitions & Navigation

### 1. Portal Navigation (Sidebar Links)
*   **Motion:** As the user switches sections, the main viewport displays a cross-fade combined with a subtle vertical translation.
*   **Formula:** `opacity: 0` to `1`, `translateY(12px)` to `0`, over `300ms` using `--ease-standard`.

### 2. Modal Open/Close Transitions
*   **Modal Open:** Backdrop fades in (`opacity: 0` to `1` over `200ms`). The dialog scales up from center (`scale(0.95)` to `1.0` and `translateY(20px)` to `0` over `300ms` using `--ease-spring`).
*   **Modal Close:** Fades out while scaling down (`scale(1.0)` to `0.97`, `opacity: 1` to `0` over `150ms`).

### 3. Mobile Bottom Sheets
*   **Slide Sheet:** Enters by sliding vertically upwards from bottom edge (`translateY(100%)` to `0` over `350ms` using `--ease-standard`). Dismisses by sliding down on swipe gesture.

---

## Section 4: Component Animations

### 1. Button Interaction
*   **Hover:** Foreground elements highlight; secondary buttons translate slightly (`translateX(2px)` for arrows).
*   **Pressed State:** Button scales down (`scale(0.96)`) on mouse click, rebounding instantly on release.

### 2. Hackathon Cards & Grid Loops
*   **Hover:** Card scales up (`scale(1.01)`), shadow shifts from low to medium elevation, and the card's border fades to a gradient using `--ease-standard` over `200ms`.

### 3. Dropdowns & Selects
*   **Reveal:** Scale and slide downwards (`scaleY(0.95)` to `1`, `translateY(-8px)` to `0` over `150ms` using `--ease-standard`).

---

## Section 5: Micro-Interactions

### 1. Form Inputs & Floating Labels
*   **Focus State:** The text field border highlights. The input label floats upwards (`translateY(-20px)`), scales down (`scale(0.85)`), and changes color to the primary accent over `200ms`.

### 2. Success Verification Checkmark
*   **Animation:** The outer circle scale-bounces outwards. The inner checkmark path draws from left to right using SVG stroke-dashoffset over `400ms` with `--ease-spring`.

```
SVG Checkmark Path Draw
Frame 1: [ O ]  - Circle expands
Frame 2: [ O\ ] - Checkmark line begins
Frame 3: [ OK ] - Checkmark locked
```

---

## Section 6: Live Data Telemetry Animations

### 1. Leaderboard Rank Transitions
*   **Interaction:** Real-time shifts. When team ranks change, rows slide vertically into their new layout slots over `450ms` using CSS grid translation.

### 2. Dynamic Metric Tickers
*   **Interaction:** Counts up from `0` to target numbers (e.g., registration counts, dollar values) over `800ms` using Space Grotesk tabular numbers.

---

## Section 7: Hackathon Experience Celebrations

### 1. Submission Complete
*   **Animation:** A full-width micro-confetti burst (Neon Pink `#FF006E` and Gold `#FFD60A` particles) triggers, expanding from the submission button and fading out over 2 seconds.

### 2. Certificate Unlock Card
*   **Animation:** The credential card performs a 3D flip reveal on load, displaying a gold foil reflection texture that follows mouse coordinates.

---

## Section 8: Brand & Scroll Experience

### 1. Cursor Parallax (Hero Section)
*   **Interaction:** Moving the cursor over the landing page hero translates abstract dashboard mockup layers in the background, creating a 3D depth effect.
*   **Formula:** `translateX(dx * 0.02) translateY(dy * 0.02)`.

### 2. Scroll Storytelling (How it Works)
*   **Interaction:** As the user scrolls down, timeline milestones fade in and light up sequentially based on their scroll offset.

---

## Section 9: Mobile Ecosystem Transitions

### 1. Pull to Refresh
*   **Interaction:** Dragging down reveals a spinning logo icon. Releasing triggers a haptic click feedback (`light`) and updates the data pool.

### 2. Gesture Swipe Card Expansion
*   **Interaction:** Tapping a card in the dashboard expands it to fill the screen view, utilizing a seamless morphing animation over `300ms`.

---

## Section 10: Accessibility (Reduced Motion)

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable scaling, sliding, and complex 3D flips */
  *, ::before, ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
  
  /* Fallback to simple opacity cross-fades instead */
  .fade-in-on-reduced {
    transition: opacity 150ms linear !important;
  }
}
```

---

## Section 11: Design QA & Performance Budgets

*   **Allowed Properties:** Only animate properties that do not trigger layout calculations or paint phases: `transform` (scale, translate, rotate) and `opacity`.
*   **Forbidden Animating Properties:** Do **not** animate `height`, `width`, `margin`, `padding`, `top`, `left`, or `border-width`.
*   **Performance Targets:** Ensure all animations maintain a stable **60 FPS** target. Avoid launching multiple animations concurrently on low-spec mobile hardware.
