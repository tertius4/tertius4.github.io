<script lang="ts">
  interface Props {
    data: {
      title: string;
      description: string;
      status: "in_development" | "improving" | "shelved" | "production";
      image_src: string;
      href: string;
    };
  }

  const { data, ...rest }: Props & Record<string, any> = $props();
</script>

<a href={data.href} class="block outline-none focus:bg-onyx-300 hover:bg-onyx-700 rounded-lg">
  <article class="p-2 {data.image_src ? 'grid gap-2 grid-cols-[auto_1fr]' : ''}">
    <div hidden={!data.image_src}>
      <img src={data.image_src} alt={data.title} class="size-12 object-cover rounded-lg" />
    </div>

    <div class="w-full">
      <div class="flex flex-row justify-between">
        <h3 class="text-white font-medium">{data.title}</h3>
        <div>
          {#if data.status === "in_development"}
            <span class="bg-yellow-500 text-black text-xs font-medium px-2 py-1 rounded-full">In Development</span>
          {:else if data.status === "shelved"}
            <span class="bg-gray-500 text-white text-xs font-medium px-2 py-1 rounded-full">Shelved</span>
          {:else if data.status === "production"}
            <span class="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">Production</span>
          {:else if data.status === "improving"}
            <span class="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">Improving</span>
          {/if}
        </div>
      </div>
      <p class="text-gray-400 text-sm line-clamp-1">{data.description}</p>
    </div>
  </article>
</a>
