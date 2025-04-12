# Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS based on a Figma design.

![Preview](preview.png)

## Features

- Dark-themed design with gradient elements
- Responsive layout
- Portfolio projects section
- Experience/resume section
- Contact section with links to social profiles
- Modern UI with clean typography

## Technology Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- CSS Grid and Flexbox for layout

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── public/            # Static assets
│   ├── fonts/         # Font files
│   └── images/        # Image files
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx # Root layout
│   │   └── page.tsx   # Home page
│   └── components/    # React components
│       ├── Contact.tsx
│       ├── Experience.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       └── Projects.tsx
├── tailwind.config.ts # Tailwind CSS configuration
└── package.json       # Project dependencies
```

## Customization

- Edit the content in the component files to customize your information
- Modify the colors in `tailwind.config.ts` and `globals.css` to change the theme
- Replace project information in `src/components/Projects.tsx`

## Deployment

This project can be easily deployed on [Vercel](https://vercel.com/) or any other Next.js-compatible hosting provider.

```bash
npm run build
# or
yarn build
```

## License

MIT

## Acknowledgements

- Design inspiration from Figma community
- Inter font by Google Fonts
- GT Walsheim Pro font
