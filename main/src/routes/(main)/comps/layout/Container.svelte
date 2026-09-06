<script lang="ts">
  interface Props {
    children: any;
  }

  const { children, ...rest }: Props & Record<string, any> = $props();
</script>

<div {...rest} class={["grid lg:grid-cols-[400px_1fr] max-lg:grid-rows-[1fr_80px] lg:gap-8 font-sans lg:p-8", rest.class]}>
  {@render children()}
</div>
