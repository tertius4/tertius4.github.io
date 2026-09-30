<script>
  const { src, alt, ...rest } = $props();
</script>

<div {...rest} class="rounded-lg overflow-hidden shadow-xl {rest.class || ''}">
  <img {src} {alt} width="144" height="144" decoding="async" class="w-full h-full object-cover" />
</div>
