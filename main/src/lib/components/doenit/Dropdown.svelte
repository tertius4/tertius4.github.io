<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";

  interface Props {
    options: string[];
    selected: string;
  }

  const { options, selected: initial }: Props = $props();

  let open = $state(false);
  let selected = $state(initial);
  let root: HTMLDivElement | undefined;

  const choose = (option: string) => {
    selected = option;
    open = false;
  };
</script>

<svelte:window
  onclick={(event) => {
    if (open && root && !root.contains(event.target as Node)) open = false;
  }}
  onkeydown={(event) => event.key === "Escape" && (open = false)}
/>

<div bind:this={root} class="relative">
  <button
    type="button"
    aria-haspopup="listbox"
    aria-expanded={open}
    onclick={() => (open = !open)}
    class="flex min-h-11 w-full items-center justify-between rounded-xl bg-card px-4 text-strong hover:bg-neutral-600"
  >
    {selected}
    <Icon name="chevron-down" size={20} class="transition-transform {open ? 'rotate-180' : ''}" />
  </button>

  {#if open}
    <ul
      role="listbox"
      class="absolute z-10 mt-1.5 flex w-full flex-col overflow-hidden rounded-xl border border-default bg-neutral-700 py-1 shadow-xl shadow-black/40"
    >
      {#each options as option (option)}
        <li role="option" aria-selected={option === selected}>
          <button
            type="button"
            onclick={() => choose(option)}
            class={[
              "flex min-h-10 w-full items-center px-4 text-left hover:bg-neutral-600",
              option === selected ? "font-medium text-primary" : "text-strong",
            ]}
          >
            {option}
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>
