import { replaceState } from "$app/navigation";
import { page } from "$app/state";
import { on } from "svelte/events";
import { skills } from "$lib/data";

export const search = $state({ query: "" });

export const filteredSkills = () => {
  const query = search.query.trim().toLowerCase();
  return skills.filter((skill) => skill.name.toLowerCase().includes(query));
};

/** Attachment for the search input: restores `?search=`, autofocuses on hover devices, adds Ctrl/⌘+K and Escape. */
export function searchInput(element: HTMLInputElement) {
  search.query = page.url.searchParams.get("search") ?? "";
  if (window.matchMedia("(hover: hover)").matches) element.focus();

  return on(window, "keydown", (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      element.focus();
      element.select();
    }

    if (event.key === "Escape") element.blur();
  });
}

export function syncSearchToUrl(event: Event & { currentTarget: HTMLInputElement }) {
  // eslint-disable-next-line svelte/prefer-svelte-reactivity
  const url = new URL(page.url);
  const query = event.currentTarget.value.trim().toLowerCase();

  if (query) url.searchParams.set("search", query);
  else url.searchParams.delete("search");

  replaceState(url, {});
}
