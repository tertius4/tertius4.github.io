<script>
  import { is_home } from "$lib/navigation";

  const { children, ...rest } = $props();

  const on_home = $derived(is_home());
</script>

<main
  {...rest}
  class={[
    {
      "flex flex-col items-center justify-center": true,
      "max-lg:hidden": on_home,
    },
    rest.class || "",
  ]}
>
  {@render children()}
</main>
