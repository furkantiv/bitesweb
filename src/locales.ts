export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = "en";
