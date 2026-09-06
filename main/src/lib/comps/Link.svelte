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
    "text-blue-400 font-medium flex items-center gap-1 leading-none border-b border-transparent hover:border-blue-400 active:border-blue-400 focus:border-blue-400 w-fit outline-none transition-[border]",
    rest.class || "",
  ]}
>
  {@render children()}
</a>
