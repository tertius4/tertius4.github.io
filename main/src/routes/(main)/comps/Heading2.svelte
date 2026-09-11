<script lang="ts">
  const { children, ...rest }: Record<string, any> = $props();
</script>

<h2 {...rest} class="text-white font-semibold text-2xl leading-10">{@render children()}</h2>
