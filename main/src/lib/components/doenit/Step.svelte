<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    n: number;
    title: string;
    /** Layout classes for the mock-up panel. */
    panel?: string;
    /** Interactive mock-ups are exposed to assistive tech. */
    interactive?: boolean;
    text: Snippet;
    mockup: Snippet;
  }

  const { n, title, panel = "", interactive = false, text, mockup }: Props = $props();
</script>

<div class="flex flex-col gap-2 md:gap-3">
  <h3 class="flex items-baseline gap-3 text-xl font-bold text-strong">
    <span class="font-medium text-primary">{n}</span>{title}
  </h3>
  <p class="text-pretty">{@render text()}</p>
  <div class={["mt-1 rounded-2xl border border-default bg-surface p-3 md:mt-3 md:p-4", panel]} aria-hidden={interactive ? undefined : "true"}>
    {@render mockup()}
  </div>
</div>
