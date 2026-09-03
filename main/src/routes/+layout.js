import { browser } from "$app/environment";

export const prerender = true;
export const csr = true;

export async function load({}) {
  if (!browser) return { lang: "en" };
  
  const lang = document.cookie
    .split("; ")
    .find((row) => row.startsWith("lang="))
    ?.split("=")[1];
  return {
    lang: lang || "en",
  };
}
