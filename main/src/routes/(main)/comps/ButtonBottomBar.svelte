<script lang="ts">
  interface Props {
    children: () => any;
    active?: boolean;
  }

  const { children, active = false, ...rest }: Props & Record<string, any> = $props();
</script>

<a
  {...rest}
  href="/"
  class={[
    {
        "flex flex-col items-center justify-center p-2 rounded-lg w-[120px]": true,
        "text-normal bg-card border border-default": active,
        "text-muted": !active

    },
    rest.class || "",
  ]}
>
  {@render children()}
</a>
