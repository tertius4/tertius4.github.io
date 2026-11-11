<script lang="ts">
  import { SIDEBAR_ID, trackProjectsScroll } from "$lib/scroll.svelte";

  interface Props {
    children: any;
    open?: boolean;
  }

  const { children, open = true, ...rest }: Props & Record<string, any> = $props();
</script>

<aside
  {...rest}
  inert={!open ? true : undefined}
  class={[
    "h-full min-w-0 overflow-hidden bg-surface lg:border-r border-default lg:transition-opacity lg:duration-300",
    open ? "lg:p-4" : "lg:p-0 lg:border-r-0 lg:opacity-0 lg:pointer-events-none",
    rest.class || "",
  ]}
>
  <div id={SIDEBAR_ID} {@attach trackProjectsScroll} class="overflow-y-auto scrollbar-none h-full lg:w-[367px]">
    {@render children()}
  </div>
</aside>
