<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    period: string;
    title: string;
    subtitle?: string;
    children?: Snippet;
  }

  const { period, title, subtitle, children }: Props = $props();
</script>

<li class="relative pl-6 pb-6 last:pb-0">
  <span class="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-primary" aria-hidden="true"></span>
  <span class="block text-xs uppercase tracking-wider text-muted">{period}</span>
  <h3 class="mt-1 text-white text-h3">{title}</h3>
  {#if subtitle}
    <p class="text-sm text-foreground-200">{subtitle}</p>
  {/if}
  {#if children}
    <div class="mt-3">
      {@render children()}
    </div>
  {/if}
</li>
