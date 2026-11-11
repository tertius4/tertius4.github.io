<script lang="ts">
  import type { Snippet } from "svelte";
  import { chip_classes, type Status } from "$lib/data/doenit";

  interface Props {
    status: Status;
    /** Pill for dates, a slightly rounded rectangle for categories. */
    shape?: "pill" | "rect";
    children: Snippet;
  }

  const { status, shape = "pill", children }: Props = $props();
</script>

<span
  class="inline-flex min-h-6.5 items-center gap-1.5 {shape === 'rect' ? 'rounded-md' : 'rounded-full'} px-2.5 text-[12.5px] font-medium text-white {chip_classes[
    status
  ]}"
>
  {@render children()}
</span>
