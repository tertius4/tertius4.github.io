import { en, type TranslationKey } from "./en";
import { language, translations } from "./state.svelte";

export type { TranslationKey } from "./en";
export { language, initLanguage, toggleLanguage } from "./state.svelte";

export function t(key: TranslationKey): string {
  const map = language.current === "af" ? translations.af : en;
  return map?.[key] || en[key] || key;
}

export default t;
