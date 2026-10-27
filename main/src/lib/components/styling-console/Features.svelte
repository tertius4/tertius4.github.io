<script lang="ts">
  import CodeText from "$lib/components/CodeText.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
  import { features } from "$lib/data/styling-console";
</script>

<PageSection id="features" heading="Features">
  <div class="grid gap-4 sm:grid-cols-2">
    {#each features as feature (feature.title)}
      <div
        class="rounded-xl border border-default bg-card p-5 transition-colors hover:border-strong hover:bg-neutral-600"
      >
        <h3 class="mb-1 font-semibold text-strong"><CodeText text={feature.title} /></h3>
        <p class="text-sm text-muted"><CodeText text={feature.text} /></p>
      </div>
    {/each}
  </div>
</PageSection>
