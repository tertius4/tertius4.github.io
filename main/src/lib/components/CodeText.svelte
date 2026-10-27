<script lang="ts">
  interface Props {
    /** Plain text where `backticked` parts are rendered as inline code. */
    text: string;
  }

  const { text }: Props = $props();

  const parts = $derived(text.split("`"));
</script>

{#each parts as part, i (i)}{#if i % 2}<code
      class="rounded border border-default bg-page px-1.5 py-0.5 font-mono text-[0.85em] text-normal">{part}</code
    >{:else}{part}{/if}{/each}
