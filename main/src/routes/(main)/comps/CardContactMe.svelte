<script>
  const { children, ...rest } = $props();
</script>

<a
  {...rest}
  class={[
    "rounded-lg flex items-center justify-center bg-card p-2 text-normal font-semibold font-mono",
    rest.class || "",
  ]}
>
  {@render children()}
</a>
