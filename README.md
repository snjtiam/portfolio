# Portfolio Website

Premium portfolio website for a Senior React Native Engineer, built with Next.js 15 App Router, TypeScript, Tailwind CSS, reusable shadcn/ui-style components, Framer Motion, lucide-react, and Playwright coverage for responsive QA.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Reusable shadcn/ui-style component structure
- Framer Motion
- lucide-react
- Playwright

## Install

```bash
npm install
npx playwright install chromium
```

On Windows PowerShell with script execution disabled, use:

```bash
npx.cmd playwright install chromium
```

## Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run start` runs the production build
- `npm run lint` runs ESLint
- `npm run typecheck` runs TypeScript checks
- `npm run test:e2e` runs the Playwright test suite
- `npm run test:e2e:headed` runs Playwright with a visible browser

## Content editing

Primary site content lives in:

- [src/content/portfolio.ts](./src/content/portfolio.ts)
- [src/content/pages.ts](./src/content/pages.ts)

Update those files to replace:

- name, role, email, LinkedIn, GitHub, and resume links
- hero copy and conversion CTAs
- services, skills, projects, and experience content
- page intros, route metadata, and navigation labels
- `siteConfig.url` for production metadata, sitemap, and robots output

## Project structure

```text
.
|-- README.md
|-- components.json
|-- next.config.ts
|-- package.json
|-- playwright.config.ts
|-- public
|-- src
|   |-- app
|   |   |-- about
|   |   |-- contact
|   |   |-- experience
|   |   |-- projects
|   |   |-- services
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |   `-- sitemap.ts
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
|       `-- utils.ts
`-- tests
```

## Notes

- Dark mode is the default visual style.
- The homepage remains conversion-focused with sticky anchor navigation.
- Detail routes exist for services, projects, experience, about, and contact.
- Project cards are structured to support detail pages and future modal or CMS expansion.
- Playwright covers the key responsive breakpoints requested for UI QA.
