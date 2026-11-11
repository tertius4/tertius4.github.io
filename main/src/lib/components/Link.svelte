<script lang="ts">
  interface Props {
    children: () => any;
    href: string;
    disabled?: boolean;
  }
  const { children, href, disabled = false, ...rest }: Props & Record<string, any> = $props();
</script>

<a
  {...rest}
  href={disabled ? undefined : href}
  aria-disabled={disabled ? "true" : undefined}
  class={[
    "text-primary font-medium flex items-center gap-1 leading-none border-b border-transparent hover:border-primary active:border-primary focus:border-primary w-fit outline-none transition-[border]",
    disabled && "opacity-50 pointer-events-none",
    rest.class || "",
  ]}
>
  {@render children()}
</a>
