import { goto } from "$app/navigation";
import { page } from "$app/state";
import { PROJECTS_ID, SIDEBAR_ID } from "./scroll.svelte";

const DESKTOP_QUERY = "(min-width: 1024px)";

export const is_home = () => page.url.pathname === "/";

/** On desktop the side panel is always visible, so the home route is replaced by /about. */
export async function redirectDesktopHome() {
  if (is_home() && window.matchMedia(DESKTOP_QUERY).matches) {
    await goto("/about", { replaceState: true });
  }
}

export async function goToHome(event: MouseEvent) {
  event.preventDefault();

  if (!is_home()) await goto("/");
  document.getElementById(SIDEBAR_ID)?.scrollTo({ top: 0, behavior: "smooth" });
}

export async function goToProjects(event: MouseEvent) {
  event.preventDefault();

  if (!is_home()) await goto("/");
  document.getElementById(PROJECTS_ID)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
