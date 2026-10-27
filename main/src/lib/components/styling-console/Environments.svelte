<script lang="ts">
  import CodeText from "$lib/components/CodeText.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
  import { environments, notes } from "$lib/data/styling-console";
</script>

<PageSection id="environments" heading="Node.js and browser">
  <div class="mb-8 grid gap-4 md:grid-cols-2">
    {#each environments as env (env.title)}
      <div
        class="rounded-xl border border-default bg-card p-5 transition-colors hover:border-strong hover:bg-neutral-600"
      >
        <h3 class="mb-3 flex items-center gap-2 font-semibold text-strong">
          <Icon name={env.icon} size={20} />
          {env.title}
        </h3>
        <ul class="list-disc space-y-1 pl-5 text-sm text-muted">
          {#each env.points as point (point)}
            <li><CodeText text={point} /></li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>

  <h3 class="text-h3 mb-3 text-strong">Notes</h3>
  <ul class="list-disc space-y-1 pl-5 text-sm text-muted">
    {#each notes as note (note)}
      <li><CodeText text={note} /></li>
    {/each}
  </ul>
</PageSection>
