<script lang="ts">
  interface Props {
    data: Project;
  }

  const { data, ...rest }: Props & Record<string, any> = $props();
</script>

<a
  {...rest}
  href={data.href}
  class={[
    {
      "block outline-none rounded-lg transition-colors": true,
      "focus:bg-neutral-700 hover:bg-neutral-700": !!data.href,
    },
    rest.class || "",
  ]}
>
  <article class="p-2 {data.image_src ? 'grid gap-2 grid-cols-[auto_1fr]' : ''}">
    <div hidden={!data.image_src}>
      <img src={data.image_src} alt={data.title} class="size-12 object-cover rounded-lg" />
    </div>

    <div class="w-full space-y-1">
      <div class="flex flex-row justify-between">
        <h3 class="text-white font-medium">{data.title}</h3>
        <div>
          {#if data.status === "in_development"}
            <span class="bg-primary-800 text-normal text-xs font-medium px-2 py-1 rounded-full">In Development</span>
          {:else if data.status === "shelved"}
            <span class="bg-primary-900 text-muted text-xs font-medium px-2 py-1 rounded-full">Shelved</span>
          {:else if data.status === "production"}
            <span class="bg-primary-800 text-normal text-xs font-medium px-2 py-1 rounded-full">Production</span>
          {:else if data.status === "improving"}
            <span class="bg-primary-800 text-normal text-xs font-medium px-2 py-1 rounded-full">Improving</span>
          {/if}
        </div>
      </div>
      <p class="text-gray-400 text-sm">{data.description}</p>
    </div>
  </article>
</a>
