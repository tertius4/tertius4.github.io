<script lang="ts">
  interface Props {
    children: any;
  }

  const { children, ...rest }: Props & Record<string, any> = $props();
</script>

<aside {...rest} class={["h-full overflow-hidden", rest.class || '']}>
    {@render children()}
</aside>
