import { browser } from "$app/environment";
import { redirect } from "@sveltejs/kit";

export const prerender = true;
export const csr = true;

export async function load({ url }) {
  if (!browser) return { lang: "en" };
  const desktop = window.matchMedia("(min-width: 768px)").matches;

  const is_home = url.pathname === "/";
  if (desktop && is_home) throw redirect(307, "/about");

  const lang = document.cookie
    .split("; ")
    .find((row) => row.startsWith("lang="))
    ?.split("=")[1];
  return {
    lang: lang || "en",
    is_home,
  };
}
