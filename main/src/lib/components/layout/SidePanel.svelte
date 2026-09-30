<script lang="ts">
  import { SIDEBAR_ID, trackProjectsScroll } from "$lib/scroll.svelte";

  interface Props {
    children: any;
  }

  const { children, ...rest }: Props & Record<string, any> = $props();
</script>

<aside {...rest} class={["h-full lg:p-4 overflow-hidden bg-surface border border-default", rest.class || ""]}>
  <div id={SIDEBAR_ID} {@attach trackProjectsScroll} class="overflow-y-auto scrollbar-none">
    {@render children()}
  </div>
</aside>
