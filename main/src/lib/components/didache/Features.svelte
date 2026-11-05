<script lang="ts">
  import PageSection from "$lib/components/PageSection.svelte";
  import { features } from "$lib/data/didache";
</script>

<PageSection id="features" heading="Features">
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {#each features as feature (feature.title)}
      <div class="rounded-xl border border-default bg-card p-5">
        <h3 class="mb-1 font-semibold text-strong">{feature.title}</h3>
        <p class="text-sm text-muted">{feature.text}</p>
      </div>
    {/each}
  </div>
</PageSection>
