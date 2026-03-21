import { ui, defaultLocale, type Locale, type TranslationKey } from "./translations";

export function useTranslations(locale: string | undefined) {
  const lang = (locale ?? defaultLocale) as Locale;
  const translations = ui[lang] ?? ui[defaultLocale];

  return function t(key: TranslationKey): string {
    return (translations as Record<string, string>)[key] ?? (ui[defaultLocale] as Record<string, string>)[key] ?? key;
  };
}

export function getLocaleSwitcherPaths(currentPath: string, currentLocale: string | undefined) {
  // Strip locale prefix from path to get the bare path
  const locale = currentLocale ?? defaultLocale;
  let barePath = currentPath;

  // Remove leading locale prefix if present (e.g. /en/about -> /about)
  if (locale !== defaultLocale) {
    barePath = currentPath.replace(new RegExp(`^/${locale}`), "") || "/";
  }

  return {
    es: barePath === "/" ? "/" : barePath,
    en: barePath === "/" ? "/en" : `/en${barePath}`,
    pt: barePath === "/" ? "/pt" : `/pt${barePath}`,
  };
}
