# Silver Axis — Website

Marketing site for Silver Axis, built with **React + Vite** and **React Router**. Four pages: Home, Services, Portfolio, Contact.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build locally
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

- **Calendly link** — set `CALENDLY_URL` at the top of `src/pages/Contact.jsx`.
- **Contact form** — currently front-end only (shows a thank-you). To actually receive
  submissions, point the form at a service like Formspree, or your own endpoint, inside
  `onSubmit` in `src/pages/Contact.jsx`. With Formspree it's roughly:

  ```js
  const onSubmit = async () => {
    await fetch('https://formspree.io/f/XXXXXXX', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    });
    setSent(true);
  };
  ```
- **Case studies / testimonials / certifications** are placeholders — edit the data arrays
  at the top of `src/pages/Home.jsx` and `src/pages/Portfolio.jsx`, and swap the
  `[ case-study screenshot ]` tiles for real images placed in `public/assets/`.

## Project structure

```
public/assets/        logos + automation graphic
src/
  components/         Nav, Footer, CTA, HeroBand, icons
  lib/                css() style helper, useReveal() scroll-reveal hook
  pages/              Home, Services, Portfolio, Contact
  App.jsx             router + shared layout
  index.css           fonts, hover/focus states, keyframes
```

## Notes

- Fonts (General Sans, Clash Display) load from Fontshare via `@import` in `index.css`.
- Styling uses the original inline styles, parsed to React style objects via the small
  `css()` helper in `src/lib/css.js`. Hover/focus/animation states live as classes in
  `index.css`.
