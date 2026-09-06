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
        "text-onyx-600 bg-onyx-850 border border-onyx-600": active,
        "text-onyx-700": !active

    },
    rest.class || "",
  ]}
>
  {@render children()}
</a>
