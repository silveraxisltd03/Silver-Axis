# Silver Axis — Website

Marketing site for Silver Axis, built with **Next.js (App Router) + TypeScript**, statically exported (no backend/server required).

> **Status:** rebuilding from scratch. Only the Home page is implemented right now — Services, Projects, and Contact will come back one at a time. The Nav and Footer already link to those routes (`/services`, `/projects`, `/contact`) ahead of the pages existing, so those links 404 until each page ships. All Home page copy is placeholder text pending a rewrite. Colors (`src/shared/styles/variables.css`) and fonts (Clash Display / General Sans) are final.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static export, outputs to /out
npm run start    # only relevant if you drop static export and run a Node server instead
npm run typecheck
```

## Deploy to Netlify

This repo is configured for Netlify out of the box (`netlify.toml`, Node 20, static export publish dir `out`).

1. `npm install && npm run build`
2. Push to Git and connect the repo in Netlify (build command `npm run build`, publish directory `out`), or drag-and-drop the generated `out` folder at https://app.netlify.com/drop.

Add your custom domain under **Domain settings**, then set `NEXT_PUBLIC_SITE_URL` (see below) to that domain so `sitemap.xml`/`robots.txt` point at the right URLs.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SITE_URL` — production domain, used in `sitemap.ts`/`robots.ts`. Defaults to a placeholder until set.

## Things to wire up as pages come back

- **Services / Projects / Contact pages** — rebuild under `src/app/services`, `src/app/projects`, `src/app/contact`, following the same pattern as `src/app/page.tsx` (a thin server page exporting `metadata`, rendering a feature component from `src/features/`).
- **Footer nav** — `src/shared/content/footer.ts` already lists the full target nav (Company/Services/Industries/Legal); most entries point at `#` placeholders until their pages exist.
- **Real content** — `src/shared/content/case-studies.ts` and `quotes.ts` hold placeholder data for the Home page; replace with real copy.
- **`NEXT_PUBLIC_SITE_URL`** — set before launch so the sitemap/robots files are correct.

## Project structure

```
public/assets/              logos + generic service illustrations
src/
  app/                      Next.js App Router routes (Home, sitemap/robots) + root layout
  features/
    home/                   HomePage, ProcessShowcase, home.data.ts
  shared/
    components/layout/      Nav, Footer, FooterGroup, ScrollToTop
    components/ui/          TechPill, CaseStudyCard, TestimonialsMarquee, Reveal, icons
    constants/               routes, service categories
    content/                 case studies, quotes, footer nav (placeholder copy)
    lib/                     css() style helper
    styles/                  design tokens (variables.css), utilities, cards, components
    types/                   shared TypeScript interfaces
```

## Notes

- Static export (`output: 'export'` in `next.config.ts`) — no Node server needed, matches the
  original zero-backend deployment on Netlify. `images.unoptimized: true` is set accordingly,
  so `<img>` tags are used directly rather than `next/image`.
- Fonts (General Sans, Clash Display) load from Fontshare via `<link>` tags in the root layout.
- Styling uses the original design system unchanged: CSS custom properties in `variables.css`,
  plus inline style strings parsed to React style objects via `src/shared/lib/css.ts`.
- `--max-content` (the site's max content width) is `1200px`, a single token in `variables.css`.
