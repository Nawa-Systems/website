# Nawa — نواة — Website

The official public website for Nawa, a software engineering company based in Hebron, Palestine. Bilingual (Arabic default, English), static-first, built with Astro.

## Stack

- **Astro** (TypeScript, strict mode) — static-first site generator.
- **`@astrojs/node`** adapter, standalone mode — almost every page is prerendered at build time; only `/` (locale redirect) and `/health` are rendered on-demand.
- **`@astrojs/sitemap`** — generates `sitemap-index.xml`.
- Self-hosted **IBM Plex Sans Arabic / IBM Plex Sans / IBM Plex Mono** via `@fontsource/*` — no third-party font requests.
- No React/Vue/database/CMS — not justified by the site's actual requirements. No client-side JS framework; the only JS shipped is a handful of small `<script>` tags (mobile nav toggle, locale cookie write, optional GA4 loader).

## Project structure

```
src/
  components/     Reusable Astro components (Header, Footer, Logo, CaseStudy, etc.)
  content/        Insights markdown collections (insights-ar/, insights-en/) — currently empty
  content.config.ts  Content collection schemas
  data/           Centralized typed content: company facts, nav, services, projects,
                   per-page copy (homeCopy, servicesCopy, aboutCopy, legalCopy,
                   caseStudies/rihabCopy.ts, caseStudies/magicCarCopy.ts)
  layouts/        Base.astro — the single HTML shell (meta, hreflang, JSON-LD, GA4)
  lib/            i18n helpers (locale detection, path localization)
  middleware.ts   (none — locale redirect lives in src/pages/index.astro instead,
                   since middleware does not run for prerendered static pages)
  pages/
    ar/, en/      Localized routes (mirror each other 1:1)
    index.astro   Root redirect (on-demand, reads cookie / Accept-Language)
    health.ts     Health check endpoint
    404.astro     Global bilingual 404
  styles/         tokens.css (design tokens), global.css (base styles)
public/
  brand/          Logo SVGs (primary/charcoal/white)
  favicon.svg
  founder/        Founder photo (avif/webp/jpg)
  work/rihab/, work/magic-car/   Case-study images (avif/webp/jpg per image)
```

## Local development

```bash
npm install
npm run dev        # http://localhost:4321, redirects to /ar or /en
```

## Build & test

```bash
npm run check       # astro check (TypeScript + template diagnostics)
npm run build        # astro check && astro build
npm run preview       # astro preview, serves the build output
```

There is no separate lint/test suite beyond `astro check` — the project has no business logic that would benefit from a unit test suite at this stage; correctness here is mostly template/type correctness (covered by `astro check`) and visual/route verification (see below).

## Localization approach

- Two locales: `ar` (default) and `en`, both under a URL prefix (`/ar/...`, `/en/...`).
- Visiting `/` reads the `nawa_locale` cookie first, then `Accept-Language`, and redirects (302) to the right locale. The cookie is written client-side by a small inline script in `Base.astro` on every page load, so a manual language switch always sticks on the next visit to `/`.
- **Route structure is kept symmetric** between `ar` and `en` on purpose (`src/lib/i18n.ts`'s `localizedPath` just swaps the locale segment) — if you add a page under `src/pages/ar/`, add the matching one under `src/pages/en/` at the same path, or the language switcher will link to a 404.
- Astro's `trailingSlash` is set to `'never'`. This matters: prerendered pages are served by the Node adapter's static-file layer, which does its own trailing-slash canonicalization independent of Astro's config (confirmed by testing — see git history / DEPLOYMENT.md context). Internal links should not have a trailing slash.

## Editing content

Almost all page copy lives in `src/data/*.ts` as plain typed objects keyed by locale (`ar`/`en`) — not in a CMS, not over-abstracted into a generic "content" schema. To change copy, edit the relevant file in `src/data/` directly:

- `src/data/site.ts` — company facts (email/phone/WhatsApp/domain/GitHub), nav items, the four service slugs, project metadata (Rihab/Magic Car), founder placeholder.
- `src/data/homeCopy.ts`, `servicesCopy.ts`, `aboutCopy.ts`, `legalCopy.ts` — per-page prose.
- `src/data/caseStudies/rihabCopy.ts`, `magicCarCopy.ts` — case study narrative + image captions.

**Every claim in this content is evidence-based** — traceable either to the seven Nawa governance PDFs (`docs/` in the source `nawa/` folder, not part of this repo) or to the actual product screenshots/diagrams reviewed during development. Do not add metrics, testimonials, team size, office locations, certifications, or partnerships that aren't independently verifiable — see the governing project brief for the full rationale.

## Authoring Insights posts

Insights is built but intentionally has **zero posts** — it's not linked from the main nav until there's real content (see `src/data/site.ts` → `navItems`, which omits it on purpose). To publish a post:

1. Add a Markdown file to `src/content/insights-ar/your-slug.md` (and, if you want the English version too, `src/content/insights-en/your-slug.md` — they are independent collections, not automatically paired).
2. Frontmatter shape (see `src/content.config.ts`):
   ```md
   ---
   title: "..."
   description: "..."
   publishDate: 2026-01-01
   draft: false
   ---
   Body in Markdown.
   ```
3. Once at least one non-draft post exists in a locale, you may want to add `insights` back into `navItems` in `src/data/site.ts`.

## Adding case-study or brand assets

Source screenshots/diagrams are **not** part of this repo (they live outside it, on the machine used during development, and are explicitly excluded from the runtime). Only the curated, security-reviewed, optimized output lives in `public/work/{rihab,magic-car}/` and `public/founder/` and `public/brand/`.

Each image ships as three files sharing a basename: `name.avif`, `name.webp`, `name.jpg` — rendered together via `src/components/ResponsiveImage.astro`, which picks the best format the browser supports. To add a new image:

1. Crop/redact as needed (no browser chrome, no PII, no secrets — see the security-review discipline in the governing brief).
2. Resize appropriately (`sips -Z <maxdim>`) and export all three formats (`cwebp`, `avifenc`, `sips -s format jpeg`).
3. Drop the three files into the right `public/work/...` folder and reference the shared basename from the relevant `src/data/caseStudies/*.ts` file.

## Design system

Design tokens (`src/styles/tokens.css`) and global base styles (`src/styles/global.css`) implement the Nawa Visual Identity & Design System — exact color tokens, IBM Plex type family (weights 400/500/600 only), the "purposeful-card" composition philosophy (hierarchy via spacing/typography before cards), and the burgundy-primary/rust-secondary button hierarchy. The source design-system document is not part of this repo.

The logo (`public/brand/*.svg`) is used exactly as supplied — same path geometry across primary/charcoal/white variants — via `src/components/Logo.astro`, which always derives height from width to preserve the symbol's actual aspect ratio (never forces a square box, never skews the mark).

## Environment variables

See `.env.example`. Only `PUBLIC_GA_MEASUREMENT_ID` is read by the app, and it's fully optional — see `DEPLOYMENT.md` for details.

## Deployment

See `DEPLOYMENT.md` for the full build/Docker/health-check/Cloudflare Tunnel notes. **No production deployment has been performed** — this repo only contains a verified-locally Dockerfile and documentation.
