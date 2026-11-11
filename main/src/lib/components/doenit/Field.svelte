<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    class?: string;
    children: Snippet;
  }

  const { class: className = "", children }: Props = $props();
</script>

<span class={["flex min-h-11 items-center rounded-xl bg-card px-4 text-strong", className]}>
  {@render children()}
</span>
