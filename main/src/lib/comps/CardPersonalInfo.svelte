<script>
  const { title, children, ...rest } = $props();
</script>

<article {...rest} class="bg-neutral-100 rounded-xl p-6 {rest.class || ''}">
  <h3 class="text-2xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
    {title}
  </h3>
  <div class="text-neutral-700 leading-relaxed">
    {@render children()}
  </div>
</article>
