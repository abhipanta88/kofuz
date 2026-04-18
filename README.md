# Kofuz — Creative & Product Studio

A premium black-and-white, editorial portfolio website for **Kofuz**, a Southern
Ontario creative and product studio helping new businesses, rebrands, and youth
sports organizations turn ambition into momentum.

Built with **React 18** + **Vite**, using a strict monochrome design system,
typographic hierarchy, CSS Modules, and subtle scroll-reveal animations.

## Tech stack

- React 18 + React Router
- Vite 5
- CSS Modules with a custom design-token system
- Google Fonts (Fraunces / Inter / JetBrains Mono)
- IntersectionObserver-based reveal animations (no heavy motion libs)

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

### Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

The repository is pre-configured for Vercel (see `vercel.json`).

### Option 1 — Dashboard (recommended)

1. Push this project to a Git repo (GitHub / GitLab / Bitbucket).
2. Go to https://vercel.com/new and import the repo.
3. Vercel will auto-detect the **Vite** framework and read `vercel.json`.
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Click **Deploy**. First build typically finishes in under a minute.

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel           # first time, answers a few setup questions
vercel --prod    # deploy to production
```

### What's included in `vercel.json`

- SPA rewrite (`/(.*) → /index.html`) so any future client-side route works.
- Long-cache immutable headers for `/assets/*` and image/font files.
- Basic security headers (`X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`).
- `cleanUrls: true` for prettier URLs.

### Environment variables

None required. The site is fully static.

## Project structure (enterprise-style)

```
src/
  assets/            # images, fonts, media
    images/
      work/teamfgn/  # TeamFGN case-study photography
  components/
    common/          # reusable primitives (Button, Container, SectionHeader, Marquee)
    layout/          # app chrome (Header, Footer)
    sections/        # page-level sections (Hero, Services, Work, Pricing, …)
  data/              # content sources for services, pricing, FAQ, projects
  hooks/             # useReveal — scroll animation
  pages/             # route-level pages (Home)
  styles/            # globals + design tokens (colors, type, spacing, motion)
  utils/             # small helpers (cn)
  App.jsx
  main.jsx
```

## Design principles

- **Monochrome only** — black, white, grayscale. No gradients, no neon, no glow.
- **Editorial** — large serif display, generous whitespace, hairline rules.
- **Structured** — strong grids, numbered sections, clear hierarchy.
- **Subtle motion** — reveal on scroll, hover transitions, no aggressive effects.
- **Responsive** — fluid typography (`clamp()`), grid collapses down to mobile.

## Content

All copy, service tiers, FAQs, and project summaries live in `src/data/*.js`
so the site is easy to maintain without touching components.

The TeamFGN case study uses the four photos bundled in
`src/assets/images/work/teamfgn/`.
