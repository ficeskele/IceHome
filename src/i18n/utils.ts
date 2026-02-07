import { type Locale, defaultLocale } from "./locales";
import { ui } from "./ui";

export function useTranslation(locale: Locale) {
  return function t(key: string): string {
    return ui[locale][key] ?? ui[defaultLocale][key] ?? key;
  };
}

export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "en" || seg === "zh") return seg;
  return defaultLocale;
}

export function getLocalizedPath(
  pathname: string,
  targetLocale: Locale,
): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === "en" || segments[0] === "zh") {
    segments[0] = targetLocale;
  } else {
    segments.unshift(targetLocale);
  }
  return "/" + segments.join("/");
}

export function formatDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(locale === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
