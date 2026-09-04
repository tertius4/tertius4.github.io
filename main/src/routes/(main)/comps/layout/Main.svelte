<script>
  const { children, ...rest } = $props();
</script>

<div {...rest} class={["flex items-center justify-center", rest.class || ""]}>
  {@render children()}
</div>
