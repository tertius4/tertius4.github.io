<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    size?: "md" | "lg" | "xl" | "hero";
    level?: 1 | 2;
    class?: string;
    children: Snippet;
  }

  const { size = "lg", level = 2, class: className = "", children }: Props = $props();

  // Full class names so Tailwind can see them.
  const sizes = {
    md: "text-3xl lg:text-4xl",
    lg: "text-4xl lg:text-5xl",
    xl: "text-5xl lg:text-6xl",
    hero: "text-5xl sm:text-6xl lg:text-7xl",
  };
</script>

<svelte:element
  this={level === 1 ? "h1" : "h2"}
  class={["font-medium tracking-tight text-balance text-strong", sizes[size], className]}
>
  {@render children()}
</svelte:element>
