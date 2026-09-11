<script lang="ts">
  interface Props {
    children: any;
  }

  const { children, ...rest }: Props & Record<string, any> = $props();
</script>

<aside {...rest} class={["h-full lg:p-4 overflow-hidden bg-surface border border-default", rest.class || ""]}>
  <div class="overflow-y-auto scrollbar-none">
    {@render children()}
  </div>
</aside>
