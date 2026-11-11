<script lang="ts">
  import Section from "./Section.svelte";
  import SectionHeading from "./SectionHeading.svelte";
  import StoreBadges from "./StoreBadges.svelte";
</script>

<Section id="laai-af" class="border-t border-default" inner="flex flex-col items-start gap-8 py-28">
  <SectionHeading size="xl" class="max-w-3xl">Gratis op Android, iOS en die web.</SectionHeading>
  <StoreBadges />
</Section>
