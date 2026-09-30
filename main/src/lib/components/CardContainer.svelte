<script>
  const { children, ...rest } = $props();
</script>

<article
  {...rest}
  class={[
    "p-4 rounded-lg max-sm:bg-card bg-surface border max-sm:border-strong border-default w-full",
    rest.class || "",
  ]}
>
  {@render children()}
</article>
