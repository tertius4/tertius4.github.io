<script lang="ts">
  interface Props {
    children: () => any;
    title?: string;
    /** Rendered right-aligned in the title bar. */
    actions?: () => any;
  }

  const { children, title = "terminal", actions, ...rest }: Props & Record<string, any> = $props();
</script>

<div
  class={[
    "overflow-hidden rounded-xl border border-default bg-page shadow-lg transition-colors hover:border-strong",
    rest.class || "",
  ]}
>
  <div class="flex items-center gap-2 border-b border-default bg-card px-4 py-2">
    <span class="size-3 rounded-full bg-[#ff5f57]"></span>
    <span class="size-3 rounded-full bg-[#febc2e]"></span>
    <span class="size-3 rounded-full bg-[#28c840]"></span>
    <span class="ml-2 font-mono text-xs text-muted">{title}</span>
    {#if actions}
      <div class="ml-auto">{@render actions()}</div>
    {/if}
  </div>
  <div class="overflow-x-auto font-mono text-sm leading-relaxed">
    <!-- Padding sits on an inner box so it is kept at the end of long lines when scrolling. -->
    <div class="w-max min-w-full p-4">
      {@render children()}
    </div>
  </div>
</div>
