<script lang="ts">
  import PageSection from "$lib/components/PageSection.svelte";
  import { upcoming_units } from "$lib/data/didache";
</script>

<PageSection
  id="progress"
  heading="Where it stands"
  intro="Didache is a test version. The first unit is live, and more Bible stories will follow."
  class="border-y border-default bg-surface"
>
  <div class="grid items-center gap-6 rounded-xl border border-default bg-card p-6 md:grid-cols-[auto_1fr]">
    <img
      src="/didache-noah.webp"
      alt="Noah’s ark on calm water at sunrise"
      width="384"
      height="384"
      loading="lazy"
      decoding="async"
      class="size-32 rounded-full border-2 border-(--didache-gold)"
    />

    <div>
      <p class="text-xs font-semibold tracking-widest text-(--didache-gold-text) uppercase">Live now</p>
      <h3 class="font-serif text-2xl text-strong">Noah and the Flood</h3>
      <p class="mb-3 text-sm text-muted">Genesis 6–9</p>
      <p>Three lessons are available.</p>
    </div>
  </div>

  <h3 class="mt-8 mb-3 font-semibold text-strong">Coming next</h3>
  <ul class="flex flex-wrap gap-2">
    {#each upcoming_units as unit (unit)}
      <li class="rounded-full border border-dashed border-strong px-3 py-1 text-sm text-muted">{unit}</li>
    {/each}
  </ul>
</PageSection>
