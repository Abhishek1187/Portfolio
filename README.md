# Abhishek Kumar — Software Developer Portfolio

A high-performance, responsive personal portfolio website built with **Next.js 16 (App Router & Turbopack)**, **React 19**, and **Tailwind CSS v4**, featuring an electric cyberpunk / telemetry design language, interactive audio soundscapes, dynamic scroll background interpolation, dual Light/Dark themes, and isolated gaming telemetry.

---

## 🚀 Quick Start (For New Systems / Environments)

### Prerequisites
- **Node.js**: v18.18.0 or higher (v20+ recommended)
- **npm** / **yarn** / **pnpm** / **bun**

### Installation & Run Commands
```bash
# 1. Clone repository & navigate into project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server (Turbopack)
npm run dev

# 4. Production build check
npm run build

# 5. Production server start
npm run start
```
The development server will be live at `http://localhost:3000`.

---

## 📌 Project Identity & Profile Data

- **Developer Name**: Abhishek Kumar
- **Role / Title**: `SOFTWARE DEVELOPER` (Never use slashes or generic placeholder titles)
- **Education**: B.Tech in Computer Science & Engineering (2022 – Expected 2026), VIPS (GGSIPU), Delhi, India
- **Problem Solving**: 200+ LeetCode Data Structures & Algorithms solved
- **Core Focus**: Full-Stack Web Applications, Real-Time Systems, Scalable Cloud Backends, Component-Driven UI Architectures

---

## 🎨 Visual Identity & Design Guidelines

### 1. Color Palette
| Token | Hex Value | Role |
| :--- | :--- | :--- |
| **Neon Volt** | `#d2ff00` | Primary accent, status pings, highlights, key actions |
| **Pitch Black** | `#000000` | Primary dark surface background |
| **Dark Slate** | `#14161b` / `#0a0b0e` | Card surfaces, container backdrops |
| **Olive / Moss** | `#253612` / `#364f16` | Topographic contours, gradient transitions |
| **McLaren Papaya** | `#ff8000` | Secondary accent, warning telemetry |
| **Cyber Cyan** | `#00f0ff` | Technology badges, secondary glow |
| **Electric Violet**| `#a855f7` | Framework badges, tertiary highlights |
| **Light Canvas** | `#fbfbfb` / `#f4f4ed` | Light theme background & light scroll destination |

### 2. Geometry & Radii Tokens
- **Pill Radius**: `39.3px` (Used for HUD buttons, nav capsules, action badges)
- **Card Radius**: `8.77px` (Used for telemetry cards, terminal windows)
- **Subtle Radius**: `6.4px` (Used for small metric tags and inner pills)

### 3. Aesthetics & Special Effects
- **Dynamic Scroll Background ([`DynamicScrollBackground.js`](file:///src/components/ui/DynamicScrollBackground.js))**: Smooth real-time color interpolation that shifts from pitch black + volt green down to rich olive and light ivory `#fbfbfb` with dual-phase topographic contour lines.
- **Ambient Particles ([`CyberParticles.js`](file:///src/components/ui/CyberParticles.js))**: 60fps canvas particle constellation with mouse avoidance.
- **Glassy Light/Dark Theme Switcher ([`ThemeToggle.js`](file:///src/components/ui/ThemeToggle.js))**: Persisted in `localStorage`, controls CSS variables and `<html>` classes.
- **Synthesized Audio ([`sound.js`](file:///src/lib/sound.js))**: Zero-asset pure Web Audio API synthesizer for UI clicks, switches, and shift blips with an accessible mute toggle in the navbar.

---

## ⚠️ Critical Development Rules & Boundaries

1. **Gaming Information Isolation**:
   - All gaming statistics (Valorant Ascendant rank, combat stats, recent matches, battlestation hardware) are **STRICTLY ISOLATED** in the dedicated `GamerCorner.js` section.
   - **DO NOT** place gaming data, rank references, or gaming terms inside the Hero, About, Skills, or Experience sections.
2. **Hashless Navigation**:
   - Smooth scroll navigation must use the `scrollToSection` helper in `src/lib/utils.js` (`history.pushState` with no `#` hash pollution in the URL bar).
3. **Typography & Styling**:
   - Adhere strictly to the design tokens in `DESIGN.md`.
   - Ensure WCAG 2.2 AA accessibility with visible focus rings (`:focus-visible`).
4. **Data Integrity**:
   - All projects, education details, and contact information must stay synchronized with `src/data/`.

---

## 📂 Architecture & Directory Structure

```
portfolio/
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css           # Global Tailwind v4, CSS variables & keyframe animations
│   │   ├── layout.js             # Root HTML layout & SEO metadata
│   │   └── page.js               # Main page layout, theme state, & section orchestration
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.js         # Top HUD navbar with brand logo, nav links, theme & audio toggles
│   │   │   └── Footer.js         # Telemetry footer with social links & live copyright
│   │   ├── sections/
│   │   │   ├── Hero.js           # Full-bleed bold headline, bio lead, stats, & cockpit card
│   │   │   ├── About.js          # Engineering craft bio & quick spec sheet
│   │   │   ├── ProjectsGrid.js   # Featured full-stack projects with inspection modal trigger
│   │   │   ├── Skills.js         # Categorized tech stack grid with vector icons
│   │   │   ├── GamerCorner.js    # Dedicated Valorant telemetry & battlestation specs
│   │   │   ├── CareerTimeline.js # Education & milestones timeline
│   │   │   └── RadioContact.js   # Interactive transmission contact form console
│   │   └── ui/
│   │       ├── Badge.js          # HUD status pills with pulsing dot indicators
│   │       ├── Button.js         # Stylized rounded buttons (primary, outline, ghost)
│   │       ├── Card.js           # Glassmorphic telemetry cards with corner bracket accents
│   │       ├── CyberParticles.js # Ambient canvas particle background
│   │       ├── DynamicScrollBackground.js # Full-page scroll gradient + contour lines
│   │       ├── Modal.js          # Project detail dialog modal
│   │       ├── SectionHeader.js  # Consistent section header with sector tags
│   │       ├── TechIcon.js       # Authentic vector SVG logos for tech stack
│   │       └── ThemeToggle.js    # Glassmorphic animated Sun/Moon toggle button
│   ├── data/
│   │   ├── profile.js            # Name, title, bio, stats, location, contact
│   │   ├── projects.js           # Real-Time Chat App & Scalable Chat Backend
│   │   ├── skills.js             # Languages, frontend, backend, databases, tools
│   │   ├── timeline.js           # Academic & development milestones
│   │   └── gaming.js             # Valorant rank, combat stats, setup specs
│   └── lib/
│       ├── sound.js              # Web Audio API sound effects generator
│       └── utils.js              # Tailwind merge (cn) & hashless smooth scrolling
├── package.json
└── README.md
```

---

## 🛠️ Data Model Reference (`src/data/`)

- **`profile.js`**:
  - `name`: "Abhishek Kumar"
  - `title`: "SOFTWARE DEVELOPER"
  - `stats`: LeetCode count, Projects, Uptime, Status.
- **`projects.js`**:
  - Contains full details, architecture diagrams, tech stacks, and metrics for `Real-Time Chat App` (MERN, Socket.IO, Zustand) and `Scalable Real-Time Chat Backend` (Node.js, Redis Pub/Sub, MongoDB, WebSockets).
- **`gaming.js`**:
  - Valorant Ascendant stats, favorite agents (Jett/Reyna), combat telemetry, and PC battlestation specs.
