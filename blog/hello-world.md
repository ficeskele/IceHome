---
title: "Hello World"
description: "Welcome to my blog! This is my first post where I introduce myself and share what I'll be writing about."
date: 2025-01-15
locale: "en"
tags: ["intro", "personal"]
image: "/images/placeholder.png"
---

# Hello World

Welcome to my blog! I'm excited to finally have my own corner of the internet where I can share my thoughts, experiments, and learnings.

## What to Expect

I'll be writing about:

- **Web Development** — Modern frameworks, tools, and best practices
- **Tutorials** — Step-by-step guides to help you build cool things
- **Projects** — Deep dives into things I'm building

## A Quick Code Example

Here's a simple TypeScript function I use in this very site:

```typescript
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}
```

This utility merges CSS class names while filtering out falsy values — handy for conditional styling.

## Sample Image

Here's a placeholder image to demonstrate how images work in blog posts:

![Placeholder](/images/placeholder.png)

## What's Next

Stay tuned for more posts. I'm planning to write about building this site with Astro, setting up i18n, and deploying to Cloudflare Pages.

Thanks for reading!
