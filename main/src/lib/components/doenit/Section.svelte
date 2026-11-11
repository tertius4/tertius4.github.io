<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    id?: string;
    /** Classes for the full-width band: borders and background. */
    class?: string;
    /** Classes for the centred content column: layout and vertical padding. */
    inner?: string;
    children: Snippet;
  }

  const { id, class: className = "", inner = "flex flex-col py-28", children }: Props = $props();
</script>

<section {id} class={className}>
  <div class={["mx-auto w-full max-w-6xl px-6 lg:px-8", inner]}>
    {@render children()}
  </div>
</section>
