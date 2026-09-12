<script lang="ts">
  import Icon from "$lib/comps/Icon.svelte";
  interface Props {
    icon?: string;
    label?: string;
  }

  const { icon, label, children, ...rest }: Props & Record<string, any> = $props();
</script>

<div
  class={[
    "rounded-xl border border-default bg-card-hover p-3 shadow-sm transition-colors duration-150 hover:border-strong",
    rest.class || "",
  ]}
>
  <div class="flex items-start gap-3">
    <div
      class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-muted"
    >
      {#if icon}
        <Icon name={icon} size={16} />
      {/if}
    </div>

    <div class="min-w-0 flex-1">
      {#if label}
        <span class="mb-1 block text-[10px] font-medium uppercase tracking-[0.18em] text-foreground-200">
          {label}
        </span>
      {/if}

      <div class="text-sm">
        {@render children()}
      </div>
    </div>
  </div>
</div>
