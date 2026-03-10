# Portfolio Website

Modern single-page personal portfolio built with Next.js 15 App Router, TypeScript, Tailwind CSS, shadcn/ui-style reusable components, Framer Motion, and lucide-react.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui component structure
- Framer Motion
- lucide-react

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run start` runs the production build
- `npm run lint` runs ESLint
- `npm run typecheck` runs TypeScript checks

## Customization

Primary content lives in [src/content/portfolio.ts](./src/content/portfolio.ts). Update that file to replace:

- name, role, contact details, and profile links
- hero copy and metrics
- services, skills, projects, experience, and testimonials
- `siteConfig.url` for production metadata, sitemap, and robots output

## Folder structure

```text
.
├── README.md
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public
│   └── icon.svg
├── src
│   ├── app
│   │   ├── globals.css
│   │   ├── icon.svg
│   │   ├── layout.tsx
│   │   ├── manifest.ts
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components
│   │   ├── layout
│   │   ├── motion
│   │   ├── sections
│   │   └── ui
│   ├── content
│   │   └── portfolio.ts
│   └── lib
│       ├── icon-map.ts
│       └── utils.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Notes

- Dark mode is the default visual style.
- Anchor navigation uses smooth scrolling and sticky header behavior.
- The landing page is intentionally data-driven so the content can be swapped without changing section layouts.
- The testimonials area is a placeholder section ready for real quotes later.
