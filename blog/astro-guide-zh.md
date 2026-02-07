---
title: "Astro 入門指南"
description: "一份實用的 Astro 指南——從專案搭建到部署，幫助你構建快速的內容驅動網站。"
date: 2025-02-01
locale: "zh"
tags: ["astro", "教學", "web 開發"]
---

# Astro 入門指南

Astro 是一個為內容驅動網站設計的現代 Web 框架。它預設不傳送任何 JavaScript，並支援多種 UI 框架。

## 為什麼選擇 Astro？

1. **效能** — 預設生成靜態 HTML，除非需要否則不會打包 JS
2. **內容集合** — 使用 Zod 模式的型別安全 Markdown 和 MDX
3. **框架無關** — 使用 React、Vue、Svelte，或者純 `.astro` 元件
4. **內建功能** — i18n 路由、圖片最佳化、RSS 訂閱

## 快速開始

建立一個新的 Astro 專案：

```bash
npm create astro@latest my-site
cd my-site
npm run dev
```

## 專案結構

一個典型的 Astro 專案如下所示：

```
my-site/
├── src/
│   ├── pages/         # 基於檔案的路由
│   ├── layouts/       # 可重複使用的頁面佈局
│   ├── components/    # UI 元件
│   └── styles/        # 全域樣式
├── public/            # 靜態資源
├── astro.config.mjs   # 設定檔
└── package.json
```

## 內容集合

為部落格文章定義模式：

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

然後在任意頁面查詢文章：

```typescript
import { getCollection } from "astro:content";

const posts = await getCollection("blog");
```

## 部署

Astro 生成的靜態 HTML 可以部署在任何地方。對於 Cloudflare Pages：

1. 將程式碼推送到 GitHub
2. 在 Cloudflare Pages 中連結倉庫
3. 設定建置命令為 `npm run build`
4. 設定輸出目錄為 `dist`

就這樣！你的網站會在每次推送時自動部署。

## 總結

Astro 是部落格、文件站和作品集的絕佳選擇。它的內容優先理念和零 JS 預設策略使其極為快速。
