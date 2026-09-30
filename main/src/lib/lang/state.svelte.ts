export type Language = "en" | "af";

const COOKIE_NAME = "lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

export const language = $state<{ current: Language }>({ current: "en" });

function applyLanguage(lang: Language) {
  language.current = lang;
  document.documentElement.lang = lang;
}

/** Restores the saved language. Called after hydration so it matches the prerendered (English) markup. */
export function initLanguage() {
  const saved = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`))
    ?.split("=")[1];

  if (saved === "af" || saved === "en") applyLanguage(saved);
}

export function toggleLanguage() {
  const next: Language = language.current === "en" ? "af" : "en";
  document.cookie = `${COOKIE_NAME}=${next}; path=/; max-age=${ONE_YEAR}; SameSite=Lax`;
  applyLanguage(next);
}
