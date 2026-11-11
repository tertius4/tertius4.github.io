<script lang="ts">
  import type { Snippet } from "svelte";

  const { children }: { children: Snippet } = $props();
</script>

<mark class="rounded bg-primary/15 px-1 text-strong">{@render children()}</mark>
