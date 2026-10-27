<script lang="ts">
  import { color_names, colors } from "$lib/data/styling-console";
  import type { Color } from "styling-console/logger";

  interface Props {
    label: string;
    value?: Color;
  }

  let { label, value = $bindable() }: Props = $props();
</script>

<fieldset>
  <legend class="mb-2 text-sm font-medium text-strong">{label}</legend>
  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      aria-pressed={!value}
      onclick={() => (value = undefined)}
      class={[
        "h-9 rounded-md border px-3 text-sm transition-colors",
        "text-normal",
        value ? "border-default hover:border-foreground-600" : "border-primary",
      ]}
    >
      none
    </button>
    {#each color_names as name (name)}
      <button
        type="button"
        aria-pressed={value === name}
        aria-label={name}
        title={name}
        onclick={() => (value = name)}
        class={[
          "size-9 rounded-md border-2 transition-colors",
          value === name ? "border-primary" : "border-transparent hover:border-foreground-600",
        ]}
        style="background-color: {colors[name]}"
      ></button>
    {/each}
  </div>
</fieldset>
