<script>
  const { children, ...rest } = $props();
</script>

<div {...rest} class={["px-3 py-1.5 rounded-full border font-medium text-sm transition-all duration-200 hover:scale-105", rest.class]}>
  {@render children()}
</div>
