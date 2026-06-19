# Silver Axis — Website

Marketing site for Silver Axis, built with **React + TypeScript + Vite** and **React Router**. Four pages: Home, Services, Projects, Contact.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build locally
npm run typecheck  # TypeScript check
```

## Deploy to Netlify

This repo is configured for Netlify out of the box (`netlify.toml`, SPA redirects, Node 20).

**Option A — drag & drop**
1. `npm install && npm run build`
2. Go to https://app.netlify.com/drop and drag the generated **`dist`** folder onto the page.

**Option B — connect a Git repo (recommended)**
1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Netlify reads `netlify.toml` automatically — no UI overrides needed:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 20 (from `netlify.toml` / `.nvmrc`)
4. Deploy. The `[[redirects]]` rule and `public/_redirects` keep client-side routes working on refresh.

Add your custom domain (e.g. `silveraxis.com`) under **Domain settings** — HTTPS is automatic.

## Things to wire up before launch

- **Calendly link** — set `CALENDLY_URL` in `src/features/contact/contact.data.ts`.
- **Contact form** — currently front-end only (shows a thank-you). To actually receive
  submissions, point the form at a service like Formspree, or your own endpoint, inside
  `onSubmit` in `src/features/contact/ContactPage.tsx`. With Formspree it's roughly:

  ```ts
  const onSubmit = async () => {
    await fetch('https://formspree.io/f/XXXXXXX', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    });
    setSent(true);
  };
  ```
- **Case studies / testimonials / certifications** are placeholders — edit the data in
  `src/features/home/home.data.ts` and `src/features/projects/projects.data.ts`, and swap the
  `[ case-study screenshot ]` tiles for real images placed in `public/assets/`.

## Project structure

```
public/assets/              logos + automation graphic
src/
  app/                      App shell + route table
  features/
    home/                   HomePage + home.data.ts
    services/               ServicesPage + services.data.ts
    projects/               ProjectsPage + projects.data.ts
    contact/                ContactPage + contact.data.ts
  shared/
    components/layout/      Nav, Footer, ScrollToTop
    components/ui/          HeroBand, CTA, icons
    constants/              routes, certifications
    hooks/                  useReveal
    lib/                    css() style helper
    types/                  shared TypeScript interfaces
  index.css                 fonts, hover/focus states, keyframes
  main.tsx                  entry point
```

## Notes

- Fonts (General Sans, Clash Display) load from Fontshare via `@import` in `index.css`.
- Styling uses the original inline styles, parsed to React style objects via the small
  `css()` helper in `src/shared/lib/css.ts`. Hover/focus/animation states live as classes in
  `index.css`.
