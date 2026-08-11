# ⚡ Velocity Marketing — Brand Activation Platform

> **Next-Gen BTL & Brand Activation Engine** — South India's premier on-ground marketing execution company.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-FF0055?logo=framer&logoColor=white)
![OGL](https://img.shields.io/badge/OGL-WebGL-orange)

---

## 🚀 Overview

A world-class, fully responsive marketing website for **Velocity Marketing** — built from scratch with a premium design system, WebGL shader animations, smooth scroll-driven transitions, and an interactive campaign estimator.

### Key Features

- **WebThreads WebGL Background** — Real-time animated glowing thread strands powered by OGL shaders with mouse-interactive bloom effects
- **Smooth Framer Motion Animations** — Staggered section reveals, card entrance animations, and cross-fade tab transitions
- **CountUp Number Animations** — Scroll-triggered smooth number counters using `requestAnimationFrame` and `IntersectionObserver`
- **Interactive Campaign Estimator** — Slider-based calculator with real-time workforce and touchpoint projections
- **Tech Platform Simulator** — Live GPS Attendance, Photo Proof, and ROI Analytics preview dashboard
- **South India Coverage Network** — Interactive city hub selector with animated capacity counters
- **Brand Preloader** — Full-screen logo preloader with pulsing animation on initial page load
- **Proposal Modal** — Multi-step campaign proposal request form with validation
- **Fully Responsive** — Optimized for desktop, tablet, and mobile breakpoints
- **High-Contrast Design System** — WCAG AA/AAA compliant with centralized color tokens

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Component-based UI framework |
| **Vite 8** | Lightning-fast build tool & dev server |
| **Tailwind CSS v4** | Utility-first styling with custom design tokens |
| **Framer Motion** | Scroll-driven animations & transitions |
| **OGL** | WebGL shader rendering for WebThreads background |
| **Lucide React** | Premium SVG icon system |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/beyondwebco-lgtm/velocity-marketing.git
cd velocity-marketing

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`.

---

## 🏗 Build for Production

```bash
npm run build
```

Output will be generated in the `dist/` directory.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx              # Hero section with WebThreads background
│   ├── Header.jsx            # Sticky navigation with mobile drawer
│   ├── Services.jsx          # Interactive service tabs with deep-dive modal
│   ├── TechPlatform.jsx      # Field intelligence tech simulator
│   ├── CoverageNetwork.jsx   # South India hub selector
│   ├── ClientEcosystem.jsx   # Enterprise client showcase
│   ├── CampaignEstimator.jsx # Interactive campaign calculator
│   ├── WhyUsAndContact.jsx   # Advantages grid & CTA banner
│   ├── ProposalModal.jsx     # Multi-step proposal form modal
│   ├── Footer.jsx            # Editorial footer with SEO keywords
│   ├── Preloader.jsx         # Brand logo loading screen
│   ├── CountUp.jsx           # Animated number counter component
│   ├── MotionWrapper.jsx     # Framer Motion animation helpers
│   ├── WebThreads.jsx        # WebGL animated thread strands (OGL)
│   └── WebThreads.css        # WebThreads container styles
├── data/
│   └── contentData.js        # Centralized company data & content
├── App.jsx                   # Root application component
├── main.jsx                  # Entry point
└── index.css                 # Global design system & theme tokens
```

---

## 🎨 Design System

### Color Tokens

| Token | Value | Usage |
|---|---|---|
| `--bg-light-primary` | `#F8FAFC` | Page background |
| `--accent` | `#2563EB` | Primary brand blue |
| `--accent-hover` | `#1D4ED8` | Interactive hover state |
| `--text-light-primary` | `#0F172A` | Primary text color |
| `--text-light-secondary` | `#334155` | Secondary text color |

### Theme Modes

- `data-theme="light"` — Light sections with slate backgrounds
- `data-theme="dark"` — Dark sections (footer, estimator output cards)

---

## 🌐 Deployment

This project is optimized for deployment on **Vercel**, **Netlify**, or any static hosting platform.

```bash
# Build and preview locally
npm run build
npm run preview
```

---

## 📄 License

© 2026 Velocity Marketing. All rights reserved.

---

<p align="center">
  Built with ⚡ by <strong>BeyondWebco</strong>
</p>
