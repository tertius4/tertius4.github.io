<script lang="ts">
  interface Props {
    children: any;
    open?: boolean;
  }

  const { children, open = true, ...rest }: Props & Record<string, any> = $props();
</script>

<div
  {...rest}
  class={[
    "grid max-lg:grid-rows-[1fr_80px] font-sans overflow-hidden bg-page lg:transition-[grid-template-columns] lg:duration-300 lg:ease-in-out",
    open ? "lg:grid-cols-[400px_1fr]" : "lg:grid-cols-[0px_1fr]",
    rest.class,
  ]}
>
  {@render children()}
</div>
