<script lang="ts">
  import PageSection from "$lib/components/PageSection.svelte";
  import { color_names, colors } from "$lib/data/styling-console";
</script>

<PageSection
  id="styles"
  heading="Supported styles"
  intro="Every colour works as a foreground (color) and a background."
  class="bg-surface"
>
  <div class="mb-6 flex flex-wrap gap-3 font-mono text-sm">
    <span class="rounded-md border border-default px-3 py-1 font-bold">bold</span>
    <span class="rounded-md border border-default px-3 py-1 italic">italic</span>
  </div>

  <ul class="grid grid-cols-2 gap-3 font-mono text-sm sm:grid-cols-4">
    {#each color_names as name (name)}
      <li
        class="flex items-center justify-between gap-2 rounded-lg border border-default bg-card px-3 py-2 transition-colors hover:border-strong"
      >
        <span style="color: {colors[name]}">{name}</span>
        <span class="size-5 shrink-0 rounded" style="background-color: {colors[name]}" aria-hidden="true"></span>
      </li>
    {/each}
  </ul>
</PageSection>
