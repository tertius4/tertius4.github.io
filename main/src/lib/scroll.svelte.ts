import { on } from "svelte/events";

export const SIDEBAR_ID = "sidebar";
export const PROJECTS_ID = "projects";

const PROJECTS_OFFSET = 100;

export const sidebar_scroll = $state({ past_projects: false });

/** Attachment for the scrolling sidebar: tracks whether the projects section has been scrolled into view. */
export function trackProjectsScroll(node: HTMLElement) {
  function update() {
    const projects = document.getElementById(PROJECTS_ID);
    sidebar_scroll.past_projects = !!projects && node.scrollTop > projects.offsetTop - PROJECTS_OFFSET;
  }

  update();
  return on(node, "scroll", update, { passive: true });
}
