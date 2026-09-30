<script lang="ts">
  interface Props {
    children: () => any;
    href: string;
  }
  const { children, href, ...rest }: Props & Record<string, any> = $props();
</script>

<a
  {...rest}
  {href}
  class={[
    "text-primary font-medium flex items-center gap-1 leading-none border-b border-transparent hover:border-primary active:border-primary focus:border-primary w-fit outline-none transition-[border]",
    rest.class || "",
  ]}
>
  {@render children()}
</a>
