# IceHome

Personal website and blog built with [Astro](https://astro.build), Tailwind CSS v4, and deployed on Cloudflare Pages.

## Features

- Static site generation (zero client-side JS framework)
- Internationalization (English & Chinese)
- Dark mode with system preference detection
- Blog from Markdown files with syntax highlighting
- Responsive design with shadcn/ui aesthetic

## Local Development

```bash
npm install
npm run dev      # Start dev server at http://localhost:4321
npm run build    # Build static site to dist/
npm run preview  # Preview the build locally
```

## Cloudflare Pages Deployment

1. Push this repo to GitHub
2. In Cloudflare Pages, create a new project and connect the repo
3. Configure:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Node.js version:** `20` (set via environment variable `NODE_VERSION=20`)

## Adding Blog Posts

Create a `.md` file in the `/blog/` directory with this frontmatter:

```yaml
---
title: "Your Post Title"
description: "A brief description"
date: 2025-03-01
locale: "en"          # "en" or "zh"
tags: ["tag1", "tag2"]
image: "/images/cover.png"  # optional
draft: false                # optional, defaults to false
---

Your markdown content here...
```

Posts are automatically discovered — no manual route registration needed.

## Images

Place images in `public/images/` and reference them as `/images/filename.png` in markdown.

## i18n

- All routes are prefixed: `/en/*` and `/zh/*`
- The root `/` redirects to `/en`
- Set `locale: "en"` or `locale: "zh"` in blog post frontmatter
- The language switcher preserves the current path when toggling

## Project Structure

```
IceHome/
├── blog/              # Markdown blog posts
├── public/images/     # Static images
├── src/
│   ├── components/    # Astro components
│   ├── i18n/          # Translations and i18n utilities
│   ├── layouts/       # Page layouts
│   ├── lib/           # Utility functions
│   ├── pages/         # File-based routes
│   └── styles/        # Global CSS
├── astro.config.mjs
└── package.json
```
