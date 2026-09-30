<script>
  import { page } from "$app/state";

  const { children, ...rest } = $props();

  const on_home = $derived(page.url.pathname === "/");
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
