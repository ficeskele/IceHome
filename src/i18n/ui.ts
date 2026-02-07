import type { Locale } from "./locales";

export const ui: Record<Locale, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.projects": "Projects",
    "nav.about": "About",

    // Home
    "home.title": "Home",
    "home.hero.greeting": "Hi, I'm",
    "home.hero.name": "IceHome",
    "home.hero.description":
      "A developer who loves building things for the web. Welcome to my personal corner of the internet.",
    "home.hero.cta": "Read my blog",
    "home.latest": "Latest Posts",
    "home.viewAll": "View all posts",

    // Blog
    "blog.title": "Blog",
    "blog.description": "Thoughts, tutorials, and notes on web development.",
    "blog.readMore": "Read more",
    "blog.readingTime": "min read",
    "blog.noPosts": "No posts yet.",
    "blog.backToBlog": "Back to blog",

    // Projects
    "projects.title": "Projects",
    "projects.description": "A selection of things I've built.",

    // About
    "about.title": "About",
    "about.description": "Learn more about me.",

    // Footer
    "footer.builtWith": "Built with",
    "footer.rights": "All rights reserved.",

    // 404
    "404.title": "Page Not Found",
    "404.description": "The page you're looking for doesn't exist.",
    "404.backHome": "Go back home",

    // SEO
    "seo.siteName": "IceHome",
    "seo.defaultDescription":
      "Personal website and blog — web development, tutorials, and projects.",
  },
  zh: {
    // Nav
    "nav.home": "首頁",
    "nav.blog": "部落格",
    "nav.projects": "專案",
    "nav.about": "關於",

    // Home
    "home.title": "首頁",
    "home.hero.greeting": "你好，我是",
    "home.hero.name": "IceHome",
    "home.hero.description":
      "一位熱愛構建 Web 應用的開發者。歡迎來到我的個人網站。",
    "home.hero.cta": "閱讀部落格",
    "home.latest": "最新文章",
    "home.viewAll": "查看全部文章",

    // Blog
    "blog.title": "部落格",
    "blog.description": "關於 Web 開發的想法、教學和筆記。",
    "blog.readMore": "閱讀更多",
    "blog.readingTime": "分鐘閱讀",
    "blog.noPosts": "暫無文章。",
    "blog.backToBlog": "返回部落格",

    // Projects
    "projects.title": "專案",
    "projects.description": "我構建的一些專案。",

    // About
    "about.title": "關於",
    "about.description": "了解更多關於我的資訊。",

    // Footer
    "footer.builtWith": "使用",
    "footer.rights": "保留所有權利。",

    // 404
    "404.title": "頁面未找到",
    "404.description": "你訪問的頁面不存在。",
    "404.backHome": "返回首頁",

    // SEO
    "seo.siteName": "IceHome",
    "seo.defaultDescription":
      "個人網站和部落格 — Web 開發、教學和專案。",
  },
};
