<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();
</script>

<ol class="relative ml-2 border-l border-default">
  {@render children()}
</ol>
