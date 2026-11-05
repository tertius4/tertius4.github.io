<script lang="ts">
  import PageSection from "$lib/components/PageSection.svelte";
  import { tech } from "$lib/data/didache";
</script>

<PageSection
  id="under-the-hood"
  heading="Under the hood"
  intro="A static web app with no server and no accounts. Progress stays on your device."
>
  <dl class="grid gap-x-10 sm:grid-cols-2">
    {#each tech as item (item.name)}
      <div class="border-t border-default py-4">
        <dt class="font-semibold text-strong">{item.name}</dt>
        <dd class="text-sm text-muted">{item.role}</dd>
      </div>
    {/each}
  </dl>
</PageSection>
