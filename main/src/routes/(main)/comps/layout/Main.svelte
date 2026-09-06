<script>
  import { page } from "$app/state";

  const { children, ...rest } = $props();

  const is_home = $derived(page.url.pathname === "/");
</script>

<main
  {...rest}
  class={[
    {
      "flex flex-col items-center justify-center": true,
      "max-lg:hidden": is_home
    },
    rest.class || "",
  ]}
>
  {@render children()}
</main>
