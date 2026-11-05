<script lang="ts">
  import PageSection from "$lib/components/PageSection.svelte";
  import { steps } from "$lib/data/didache";
</script>

<PageSection id="how-it-works" heading="How a lesson works">
  <ol class="grid gap-4 sm:grid-cols-3">
    {#each steps as step, i (step.title)}
      <li class="rounded-xl border border-default bg-card p-5">
        <span
          class="mb-3 grid size-9 place-items-center rounded-full border border-(--didache-gold) font-serif text-lg text-(--didache-gold-text)"
          aria-hidden="true"
        >
          {i + 1}
        </span>
        <h3 class="mb-1 font-semibold text-strong">{step.title}</h3>
        <p class="text-sm text-muted">{step.text}</p>
      </li>
    {/each}
  </ol>
</PageSection>
