import type { TranslationKey } from "./en";

export type Language = "en" | "af";
export type Translations = Record<TranslationKey, string>;

const COOKIE_NAME = "lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

export const language = $state<{ current: Language }>({ current: "en" });

/** English ships with the app; other languages are loaded on demand. */
export const translations = $state<{ af?: Translations }>({});

async function loadLanguage(lang: Language) {
  if (lang === "af" && !translations.af) translations.af = (await import("./af")).af;
}

async function applyLanguage(lang: Language) {
  await loadLanguage(lang);
  language.current = lang;
  document.documentElement.lang = lang;
}

/** Restores the saved language. Called after hydration so it matches the prerendered (English) markup. */
export async function initLanguage() {
  const saved = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`))
    ?.split("=")[1];

  if (saved === "af" || saved === "en") await applyLanguage(saved);
}

export async function toggleLanguage() {
  const next: Language = language.current === "en" ? "af" : "en";
  await applyLanguage(next);
  document.cookie = `${COOKIE_NAME}=${next}; path=/; max-age=${ONE_YEAR}; SameSite=Lax`;
}
