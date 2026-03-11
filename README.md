# Portfolio

Conversion-focused portfolio site for a Senior React Native Engineer, built with Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion, and a content-driven architecture that keeps most copy and metadata in a small set of files.

## What this project includes

- A long-form homepage with section navigation for `About`, `Services`, `Skills`, `Projects`, `Experience`, `Why Work With Me`, and `Contact`
- Dedicated route pages for `/about`, `/services`, `/projects`, `/experience`, and `/contact`
- Dynamic project detail pages at `/projects/[slug]`
- Centralized content and metadata in `src/content`
- Generated SEO and sharing assets: sitemap, robots, manifest, Open Graph image, Twitter image, and JSON-LD
- Responsive UI coverage with Playwright screenshots and navigation checks

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- Radix Slot and utility-based UI primitives
- Playwright for end-to-end responsive QA

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

If PowerShell script execution is disabled, use the Windows command shims instead:

```bash
npm.cmd install
npm.cmd run dev
```

## Available scripts

- `npm run dev` starts the local dev server
- `npm run build` creates a production build
- `npm run start` serves the production build
- `npm run lint` runs ESLint
- `npm run typecheck` runs `tsc --noEmit`
- `npm run test:e2e` runs the Playwright suite
- `npm run test:e2e:headed` runs Playwright with a visible browser

## Running Playwright

Install the browser binary before the first run:

```bash
npx playwright install chromium
```

On PowerShell with script execution disabled:

```bash
npx.cmd playwright install chromium
```

This repository already contains Playwright config and tests. If a clean install is missing `@playwright/test`, add it with:

```bash
npm install -D @playwright/test
```

## Content editing

Most site content lives in two files:

- `src/content/portfolio.ts`
- `src/content/pages.ts`

Use `src/content/portfolio.ts` to update:

- name, role, location, email, LinkedIn, GitHub, and resume link
- homepage hero copy, highlights, services, skills, projects, experience, testimonials, and contact content
- footer copy, social links, and route-wide CTAs

Use `src/content/pages.ts` to update:

- top-level route labels
- page intros for secondary routes
- page-specific metadata titles and descriptions

Replace the placeholder resume file in `public/sanjit-soreng-resume-placeholder.txt` and update `siteConfig.resumeUrl` if the filename changes.

Update `siteConfig.url` in `src/content/portfolio.ts` before production deployment. That value is used for canonical URLs, sitemap output, robots metadata, manifest URLs, and social images.

## Routes

- `/` homepage with section-based navigation
- `/about`
- `/services`
- `/projects`
- `/projects/[slug]`
- `/experience`
- `/contact`

## Project structure

```text
.
|-- public
|   |-- icon.svg
|   `-- sanjit-soreng-resume-placeholder.txt
|-- src
|   |-- app
|   |   |-- about
|   |   |-- contact
|   |   |-- experience
|   |   |-- projects
|   |   |-- services
|   |   |-- apple-icon.tsx
|   |   |-- layout.tsx
|   |   |-- manifest.ts
|   |   |-- opengraph-image.tsx
|   |   |-- robots.ts
|   |   |-- sitemap.ts
|   |   `-- twitter-image.tsx
|   |-- components
|   |   |-- layout
|   |   |-- motion
|   |   |-- navigation
|   |   |-- projects
|   |   |-- sections
|   |   `-- ui
|   |-- content
|   |   |-- pages.ts
|   |   `-- portfolio.ts
|   `-- lib
|       |-- icon-map.ts
|       |-- seo.ts
|       |-- social-image.tsx
|       `-- utils.ts
|-- tests
|   `-- portfolio.spec.ts
|-- next.config.ts
|-- playwright.config.ts
`-- tailwind.config.ts
```

## Verification

The current codebase passes:

- `npm.cmd run typecheck`

Responsive QA is implemented in `tests/portfolio.spec.ts` for:

- homepage rendering across mobile, tablet, laptop, and desktop breakpoints
- mobile navigation interaction and section linking
- secondary route visibility
- project detail page rendering
