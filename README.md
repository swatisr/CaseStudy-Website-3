# Portfolio Showcase Website

A modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library
- **Framer Motion** - Animation library (ready for use)
- **Space Grotesk** - Custom font

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3002](http://localhost:3002) in your browser.

## Project Structure

- `/app` - Next.js App Router pages
  - `page.tsx` - Login page
  - `portfolio/page.tsx` - Portfolio overview page
  - `design-system/page.tsx` - Design system reference page
- `/components` - React components
  - `ui/` - shadcn/ui components
  - `ProjectSection.tsx` - Reusable project section
  - `DesignSystemButton.tsx` - Floating button to access design system
- `/lib` - Utility functions

## Features

- ✅ Login page with entry button
- ✅ Portfolio page with 4 project sections (532px height each)
- ✅ Scroll snap functionality
- ✅ 48px page margins
- ✅ Design system page (accessible via floating button)
- ✅ Space Grotesk font integration
- ✅ Dark theme design system

## Next Steps

- Add images, text, and gradients to project sections
- Design the skills section
- Add navigation bar
- Implement password authentication
- Add animations with Framer Motion
- Support for GIFs and videos
