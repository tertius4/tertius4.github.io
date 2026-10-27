<script lang="ts">
  import CodeBlock from "$lib/components/CodeBlock.svelte";
  import CodeText from "$lib/components/CodeText.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
  import { usage } from "$lib/data/styling-console";
</script>

<PageSection id="usage" heading="Usage" intro="Use a local logger, or patch the global console." class="bg-surface">
  <div class="grid gap-6 lg:grid-cols-2">
    {#each usage as item (item.title)}
      <div class="min-w-0">
        <h3 class="text-h3 text-strong">{item.title}</h3>
        <p class="mb-3 text-sm text-muted"><CodeText text={item.text} /></p>
        <CodeBlock code={item.code} title="app.js" />
      </div>
    {/each}
  </div>
</PageSection>
