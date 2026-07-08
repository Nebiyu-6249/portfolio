# Nebiyu Elias Gemedu · Portfolio

Personal portfolio for a full-stack and AI engineer. The site leads with real,
measured evaluation numbers (retrieval recall, false-positive rate, citation
faithfulness, latency) pulled straight from the project work, instead of generic
claims.

Built with Next.js (App Router) and TypeScript, styled with Tailwind, animated
with Framer Motion, and deployed on Netlify. No database and no backend: the
whole thing is static-deployable.

## Stack

- Next.js 14 (App Router), TypeScript strict mode
- Tailwind CSS
- Framer Motion (one orchestrated hero load sequence plus a shared scroll-reveal)
- Deployed on Netlify with the Next runtime plugin, Node 20

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # eslint
```

## Project layout

```
app/
  layout.tsx            root layout, fonts, metadata, theme script
  page.tsx              single-page site (hero, about, experience, projects, skills, certs, contact)
  projects/[slug]/      dedicated case study pages for the three deepest projects
  opengraph-image.tsx   generated social share image
  sitemap.ts, robots.ts SEO metadata routes
  icon.svg              favicon
components/              UI and motion components (MetricsPanel is the signature piece)
data/                   all copy and numbers live here as typed modules
```

All content (projects, experience, skills, certifications, and the measured
metrics) lives in `data/`. Editing copy or numbers does not require touching a
component.

## Editing common things

- **Metrics**: `data/metrics.ts`. The hero stat strip and the evaluation panels
  on the two measured projects read from here.
- **Projects**: `data/projects.ts`. Set `featured` for a large home card and
  `hasCaseStudy` to give a project its own `/projects/[slug]` page.
- **Phone number**: off by default in `data/site.ts` (`phone: null`) to avoid
  scraper spam. Set it only if it should be public.
- **Resume**: drop a PDF in `/public` and point `resumePath` in `data/site.ts`
  at it to show a "Download resume" button. Keep the PDF's framing consistent
  with this site (no grades, no dates).
- **Certifications**: `data/certifications.ts`. A commented-out array holds the
  entries excluded pending verification; uncomment to re-add once confirmed.

## Deploy to Netlify

The repo ships with `netlify.toml` (Next runtime plugin, Node 20). Connect the
repo in Netlify and it builds on push with no extra config. Set
`NEXT_PUBLIC_SITE_URL` to the final domain so canonical URLs, the sitemap, and
Open Graph tags point at the right place.

## Accessibility and performance

- Responsive down to mobile
- Visible keyboard focus states throughout
- `prefers-reduced-motion` respected: animations and smooth-scroll are cut
- `next/image` formats configured; light and dark themes with a no-flash toggle
