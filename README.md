# Team Devlux

A modern, animated marketing site for **Team Devlux**, a web design & development studio — built with Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4, GSAP, Lenis, and Framer Motion.

## Stack

- **Next.js 16** (App Router, Turbopack, static generation) on **React 19** — requires Node 20.9+
- **Tailwind CSS 4** — design tokens live in CSS (`@theme` in `app/globals.css`); there is no `tailwind.config.js`
- **GSAP + ScrollTrigger** for scroll-driven reveals, counters, magnetic buttons, cursor, and the mobile menu
- **Lenis** for smooth scrolling, synced to GSAP's ticker
- **Framer Motion** installed and ready for extra interactive components
- **next/font/google** (Bricolage Grotesque, Inter, IBM Plex Mono in `app/fonts.js`) — needs internet access at build time to fetch fonts
- Page transitions: GSAP curtain wipe driven by `app/template.js` on every route change
- `three`, `@react-three/fiber`, `@react-three/drei` are installed for a future WebGL/3D hero — not wired in by default

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

Lint with `npm run lint` (ESLint 9 flat config; Next 16 removed `next lint`).

> **Note:** the production build fetches Google Fonts at build time. If you're building in a network-restricted environment (CI without internet, sandboxed containers, etc.), either allow access to `fonts.googleapis.com` / `fonts.gstatic.com`, or swap `app/layout.js` to self-hosted font files.

## Editing content

All copy lives in `/data`, separate from the components that render it:

- `data/site.js` — company info, nav links, footer links, socials
- `data/home.js` — home page copy (hero, services, process, stats)
- `data/about.js` — about page copy (story, values, team, stats)
- `data/services.js` — services list, engagement models, FAQ
- `data/work.js` — portfolio/case study entries
- `data/testimonials.js` — client testimonials
- `data/contact.js` — contact details, budget/timeline options, FAQ

Edit these files to update content without touching any component code.

## Structure

```
app/
  layout.js        Root layout: fonts, metadata, JSON-LD, providers
  template.js       Drives the page-transition animation on route change
  page.js            Home
  about/page.js
  services/page.js
  work/page.js
  contact/page.js
  sitemap.js         Auto-generated sitemap.xml
  robots.js          robots.txt
  not-found.js       Custom 404
components/          All UI building blocks (Navbar, Footer, Cursor, Reveal, etc.)
data/                Site content, separated by page
public/              Static assets, favicon
```

## Theme (light / dark)

- Colors are CSS variables (`--ink`, `--bone`, `--mute`, ...) defined in `app/globals.css` for `[data-theme="dark"]` and `[data-theme="light"]`; Tailwind color names map to them, so every component themes automatically.
- `components/ThemeToggle.js` switches themes with a circular reveal that expands from the button (View Transitions API), with a soft color fade as fallback and no animation under `prefers-reduced-motion`.
- The choice is saved in `localStorage`; on a first visit the site follows the visitor's system preference. A tiny inline script in `app/layout.js` sets the theme before paint, so there is no flash.

## Team section

`components/TeamList.js` reads `data/about.js` → `team.members` (name, role, work, projects, image).
With a real mouse on screens 768px and wider, the member's photo follows the cursor as you move across rows. On phones, tablets and any touch device there are no hover effects: tapping a row expands it like an FAQ item. The portraits in `public/team/` are placeholder SVGs: replace them with real photos and update the `image` paths in `data/about.js`.

## Things to wire up before launch

1. **Contact form** (`components/ContactForm.js`) currently simulates a submission client-side. Connect it to an API route, or a service like Formspree / Resend / your CRM.
2. **OG image** — add a real `public/og-image.png` (1200×630) referenced in `app/layout.js` metadata.
3. **Real project imagery** — `components/ProjectCard.js` currently uses CSS gradient placeholders keyed to each project's brand color. Swap in real screenshots via `next/image` when you have them.
4. **Domain** — update `site.url` in `data/site.js` to your real production domain (used in metadata, sitemap, and JSON-LD).
5. **Analytics** — add your analytics snippet of choice in `app/layout.js`.

## Design notes

- Palette: near-black ink (`#0B0C0F`) and bone/off-white (`#EDECE7`) base, with an electric-indigo signal color (`#4D5FFF`) as the single accent.
- Type: Bricolage Grotesque for display/headlines, Inter for body copy, IBM Plex Mono for small labels/eyebrows.
- Motion is intentionally restrained: one page-load sequence (preloader), one transition per navigation (curtain wipe), and scroll-triggered reveals — not stacked hover effects on every element.
- Fully responsive from mobile through large desktop; respects `prefers-reduced-motion`.
