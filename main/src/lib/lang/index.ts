import { language, type Language } from "./state.svelte";
export { language, initLanguage, toggleLanguage } from "./state.svelte";
import { af } from "./af";
import { en } from "./en";

export type TranslationKey = keyof typeof en;

const maps: Record<Language, Record<TranslationKey, string>> = { en, af };

export function t(key: TranslationKey): string {
  return maps[language.current][key] || en[key] || key;
}

export default t;
