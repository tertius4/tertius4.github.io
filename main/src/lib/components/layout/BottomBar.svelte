<script lang="ts">
  interface Props {
    children: () => any;
  }

  const { children, ...rest }: Props & Record<string, any> = $props();
</script>

<nav {...rest} class={["fixed bottom-0 left-0 right-0 w-full flex justify-center items-center", rest.class]}>
  {@render children()}
</nav>
