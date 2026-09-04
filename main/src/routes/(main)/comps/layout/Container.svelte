<script lang="ts">
  interface Props {
    children: any;
  }

  const { children, ...rest }: Props & Record<string, any> = $props();
</script>

<div {...rest} class={["grid grid-cols-[400px_1fr] gap-8 font-sans p-8", rest.class]}>
  {@render children()}
</div>
