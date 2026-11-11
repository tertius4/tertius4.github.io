<script lang="ts">
  import type { Snippet } from "svelte";
  import Icon from "$lib/components/Icon.svelte";

  interface Props {
    title: string;
    icon: string;
    children: Snippet;
  }

  const { title, icon, children }: Props = $props();
</script>

<div class="flex flex-col gap-2">
  <h3 class="flex items-center gap-3 text-xl font-bold text-strong">
    <Icon name={icon} size={22} class="shrink-0 text-primary" />{title}
  </h3>
  <p class="text-pretty">{@render children()}</p>
</div>
