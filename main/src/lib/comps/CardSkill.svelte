<script lang="ts">
  import t from "$lib/lang";
  import Icon from "./Icon.svelte";

  interface Props {
    data: Skill;
  }
  const { data, ...rest }: Props & Record<string, any> = $props();
</script>

<article {...rest} class={["bg-card border border-default p-4 rounded-lg h-full w-full", rest.class || ""]}>
  <div class="flex items-center gap-2">
    <Icon name={data.icon} class="size-8" />
    <span class="font-medium text-xl">{data.name}</span>
  </div>
  <div class="bg-neutral-900 text-foreground-700 w-full rounded font-mono py-0.5 px-2 mt-4">
    {[data.experience, data.years].filter(Boolean).join(" ● ")}
  </div>
  <p class="text-foreground-400 mt-1">
    {t(data.description)}
  </p>
</article>
