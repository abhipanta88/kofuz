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

## Deploy to Render

The repository includes a [Render Blueprint](https://render.com/docs/infrastructure-as-code) at `render.yaml` (static site).

### Option 1 — Blueprint (recommended)

1. Push this project to a Git repo (GitHub / GitLab / Bitbucket).
2. In the [Render Dashboard](https://dashboard.render.com/), choose **New** → **Blueprint**, connect the repo, and select `render.yaml`.
3. Apply the blueprint. Render will create a **Static Site** with:
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`

### Option 2 — Static Site manually

1. **New** → **Static Site**, connect the same repo.
2. Set **Build Command** to `npm install && npm run build` and **Publish directory** to `dist`.
3. Add the same **Redirects/Rewrites** and **HTTP Headers** as in `render.yaml` (SPA rewrite to `/index.html`, caching, security headers), or copy them from the file after the first deploy.

### What's included in `render.yaml`

- SPA rewrite (`/*` → `/index.html`) for client-side routing.
- Long-cache immutable headers for `/assets/*` and common image/font extensions.
- Basic security headers (`X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`).

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
