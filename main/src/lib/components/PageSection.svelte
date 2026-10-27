<script lang="ts">
  interface Props {
    children: () => any;
    id: string;
    heading: string;
    intro?: string;
  }

  const { children, id, heading, intro, ...rest }: Props & Record<string, any> = $props();
</script>

<section {id} aria-labelledby="{id}-heading" class={["px-6 py-14", rest.class || ""]}>
  <div class="mx-auto max-w-5xl">
    <div class="mb-8">
      <h2 id="{id}-heading" class="text-h2 text-strong">{heading}</h2>
      {#if intro}
        <p class="mt-2 max-w-2xl text-muted">{intro}</p>
      {/if}
    </div>

    {@render children()}
  </div>
</section>
