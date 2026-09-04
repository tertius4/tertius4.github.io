<script lang="ts">

    const { children, ...rest }: Record<string, any> = $props();
</script>

<h2 {...rest} class="text-white font-medium text-lg">{@render children()}</h2>