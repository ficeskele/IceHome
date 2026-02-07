---
title: "Getting Started with Astro"
description: "A practical guide to building fast, content-driven websites with Astro — from project setup to deployment."
date: 2025-02-01
locale: "en"
tags: ["astro", "tutorial", "web dev"]
---

# Getting Started with Astro

Astro is a modern web framework designed for content-driven websites. It ships zero JavaScript by default and supports multiple UI frameworks.

## Why Astro?

1. **Performance** — Static HTML by default, no JS bundle unless you need it
2. **Content Collections** — Type-safe markdown and MDX with Zod schemas
3. **Framework Agnostic** — Use React, Vue, Svelte, or just plain `.astro` components
4. **Built-in Features** — i18n routing, image optimization, RSS feeds

## Quick Start

Create a new Astro project:

```bash
npm create astro@latest my-site
cd my-site
npm run dev
```

## Project Structure

A typical Astro project looks like this:

```
my-site/
├── src/
│   ├── pages/         # File-based routing
│   ├── layouts/       # Reusable page layouts
│   ├── components/    # UI components
│   └── styles/        # Global styles
├── public/            # Static assets
├── astro.config.mjs   # Configuration
└── package.json
```

## Content Collections

Define a schema for your blog posts:

```typescript
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

Then query posts in any page:

```typescript
import { getCollection } from "astro:content";

const posts = await getCollection("blog");
```

## Deployment

Astro generates static HTML that can be deployed anywhere. For Cloudflare Pages:

1. Push your code to GitHub
2. Connect the repo in Cloudflare Pages
3. Set build command to `npm run build`
4. Set output directory to `dist`

That's it! Your site will automatically deploy on every push.

## Conclusion

Astro is an excellent choice for blogs, documentation sites, and portfolios. Its content-first approach and zero-JS default make it incredibly fast.
