import { SvelteDate } from "svelte/reactivity";

const months = ["Jan.", "Feb.", "Mrt.", "Apr.", "Mei", "Jun.", "Jul.", "Aug.", "Sep.", "Okt.", "Nov.", "Des."];

/** Sample dates are relative to the visitor's today, so the demo never goes stale. Updated in the browser on mount. */
export const clock = $state({ now: Date.now() });

export function dateLabel(in_days: number) {
  const today = new SvelteDate(clock.now);
  const date = new SvelteDate(today.getFullYear(), today.getMonth(), today.getDate() + in_days);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}
