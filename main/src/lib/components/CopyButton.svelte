<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";

  interface Props {
    text: string;
  }

  const { text, ...rest }: Props & Record<string, any> = $props();

  let copied = $state(false);
  let timeout: ReturnType<typeof setTimeout>;

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }

    copied = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => (copied = false), 1500);
  }
</script>

<button
  type="button"
  onclick={copy}
  aria-label={copied ? "Copied" : "Copy to clipboard"}
  class={[
    "flex items-center gap-1 rounded-md border border-default px-2 py-1 text-xs text-muted transition-colors hover:bg-neutral-600 hover:text-normal hover:border-strong",
    rest.class || "",
  ]}
>
  {#if copied}
    <Icon name="check" size={12} />
    Copied
  {:else}
    Copy
  {/if}
</button>
