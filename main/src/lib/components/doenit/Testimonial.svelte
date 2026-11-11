<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";

  interface Props {
    name: string;
    text: string;
    /** Background class of the initial's circle. */
    color: string;
  }

  const { name, text, color }: Props = $props();
</script>

<figure class="flex flex-col justify-between gap-5 rounded-2xl border border-default bg-surface p-6">
  <div class="flex flex-col gap-3">
    <span class="flex gap-0.5 text-amber-400" role="img" aria-label="5 uit 5 sterre">
      {#each { length: 5 } as _, i (i)}
        <Icon name="fa-star" size={16} />
      {/each}
    </span>
    <blockquote class="text-pretty text-strong">"{text}"</blockquote>
  </div>
  <figcaption class="flex items-center gap-3">
    <span
      class="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white {color}"
      aria-hidden="true"
    >
      {name[0]}
    </span>
    <span class="flex flex-col">
      <span class="font-medium text-strong">{name}</span>
      <span class="text-sm text-muted">Google Play</span>
    </span>
  </figcaption>
</figure>
