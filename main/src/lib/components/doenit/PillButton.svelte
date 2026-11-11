<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    selected?: boolean;
    count?: number;
    size?: "sm" | "md";
    /** Makes the pill a toggle button. Without it the pill is plain text. */
    onclick?: () => void;
    children: Snippet;
  }

  const { selected = false, count, size = "md", onclick, children }: Props = $props();

  // Full class names so Tailwind can see them.
  const sizes = {
    sm: "min-h-9 gap-2 rounded-[10px] px-3 text-[15px]",
    md: "min-h-11 gap-2.5 rounded-xl px-3.5 text-base font-medium",
  };
  const base = "inline-flex items-center transition-colors";
  const badge_sizes = { sm: "size-5.5 text-xs", md: "h-6.5 min-w-6.5 text-sm" };
</script>

{#snippet content()}
  {@render children()}
  {#if count !== undefined}
    <span
      class={[
        "inline-flex items-center justify-center rounded-full",
        badge_sizes[size],
        selected ? "bg-page text-strong" : "bg-surface text-normal",
      ]}
    >
      {count}
    </span>
  {/if}
{/snippet}

{#if onclick}
  <button
    type="button"
    aria-pressed={selected}
    {onclick}
    class={[base, sizes[size], selected ? "bg-primary text-page" : "bg-card text-strong hover:bg-neutral-600"]}
  >
    {@render content()}
  </button>
{:else}
  <span class={[base, sizes[size], selected ? "bg-primary text-page" : "bg-card text-strong"]}>
    {@render content()}
  </span>
{/if}
