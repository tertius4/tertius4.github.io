<script lang="ts">
  import { previewCss } from "$lib/data/styling-console";
  import type { LogMethod, LogStyle } from "styling-console/logger";

  interface Props {
    method: LogMethod;
    style: LogStyle;
    text: string;
  }

  const { method, style, text }: Props = $props();
</script>

<div class="whitespace-pre">
  <span class="inline-block w-14 select-none text-neutral-500">{method}</span><span
    class="px-0.5"
    style={previewCss(style)}>{text}</span
  >
</div>
