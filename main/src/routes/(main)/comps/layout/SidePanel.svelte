<script lang="ts">
  interface Props {
    children: any;
  }

  const { children, ...rest }: Props & Record<string, any> = $props();
</script>

<div {...rest} class={["h-full overflow-hidden", rest.class || '']}>
    {@render children()}
</div>
