<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import Logo from "./Logo.svelte";

  interface Props {
    title: string;
    items: string[];
  }

  const { title, items }: Props = $props();
</script>

<!-- An Android-style notification, drawn with HTML -->
<div class="flex flex-col gap-2 rounded-3xl border border-default bg-surface px-4 py-3.5" aria-hidden="true">
  <div class="flex items-center gap-2 text-xs text-muted">
    <Logo size={18} />
    <span>Doenit</span>
    <span>·</span>
    <span>nou</span>
    <Icon name="chevron-down" size={16} class="ml-auto" />
  </div>
  <span class="text-[15px] font-bold text-strong">{title}</span>
  <ul class="flex list-disc flex-col gap-0.5 pl-5 text-[15px] leading-snug text-normal marker:text-muted">
    {#each items as item (item)}
      <li>{item}</li>
    {/each}
  </ul>
</div>
