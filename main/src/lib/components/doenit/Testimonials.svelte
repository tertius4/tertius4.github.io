<script lang="ts">
  import { links, testimonials } from "$lib/data/doenit";
  import Section from "./Section.svelte";
  import SectionHeading from "./SectionHeading.svelte";
  import Testimonial from "./Testimonial.svelte";
</script>

<Section class="border-t border-default" inner="flex flex-col gap-12 py-28">
  <div class="flex max-w-2xl flex-col gap-3">
    <SectionHeading>Wat sê gebruikers?</SectionHeading>
    <p class="text-muted">
      Resensies op Google Play en gesprekke op
      <a href={links.reddit} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
        r/Doenit
      </a>.
    </p>
  </div>
  <div class="grid gap-6 md:grid-cols-3">
    {#each testimonials as testimonial (testimonial.name)}
      <Testimonial {...testimonial} />
    {/each}
  </div>
</Section>
