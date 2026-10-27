<script lang="ts">
  import CopyButton from "$lib/components/CopyButton.svelte";
  import TerminalWindow from "$lib/components/TerminalWindow.svelte";

  interface Props {
    code: string;
    title?: string;
    /** Prefix shown before a single-line command, e.g. "$". Not copied. */
    prompt?: string;
  }

  const { code, title, prompt, ...rest }: Props & Record<string, any> = $props();
</script>

{#if title}
  <TerminalWindow {title} class={rest.class}>
    {#snippet actions()}
      <CopyButton text={code} />
    {/snippet}
    <pre><code>{code}</code></pre>
  </TerminalWindow>
{:else}
  <div
    class={[
      "flex items-center justify-between gap-4 rounded-xl border border-default bg-page px-4 py-3",
      rest.class || "",
    ]}
  >
    <pre class="overflow-x-auto font-mono text-sm"><code
        >{#if prompt}<span class="select-none text-muted">{prompt} </span>{/if}{code}</code
      ></pre>
    <CopyButton text={code} />
  </div>
{/if}
