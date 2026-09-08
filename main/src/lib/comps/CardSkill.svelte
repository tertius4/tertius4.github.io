<script lang="ts">
  interface Props {
    data: Skill;
  }
  const { data, ...rest }: Props & Record<string, any> = $props();
</script>

<article {...rest} class={["bg-onyx-800 p-4 rounded-lg h-full w-full space-y-2", rest.class || ""]}>
  <div class="flex items-center gap-2">
    <img src={data.icon} alt={data.name} class="size-8" />
    <span class="font-medium text-xl">{data.name}</span>
  </div>
  <div class="bg-onyx-850 w-full rounded font-mono py-0.5 px-2">{data.experience} ● {data.years}</div>
  <p class="text-onyx-200">
    {data.description}
  </p>
</article>
