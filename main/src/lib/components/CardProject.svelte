<script lang="ts">
  import { t } from "$lib/lang";

  interface Props {
    data: Project;
  }

  const status_classes: Record<Project["status"], string> = {
    in_development: "bg-primary-800 text-normal",
    improving: "bg-primary-800 text-normal",
    production: "bg-primary-800 text-normal",
    shelved: "bg-primary-900 text-muted",
  };

  const { data, ...rest }: Props & Record<string, any> = $props();
</script>

<svelte:element
  this={data.href ? "a" : "div"}
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
    {#if data.image_src}
      <img
        src={data.image_src}
        alt=""
        width="48"
        height="48"
        loading="lazy"
        decoding="async"
        class="shrink-0 size-12 object-cover rounded-lg"
      />
    {/if}

    <div class="w-full space-y-1">
      <div class="flex flex-row justify-between">
        <h3 class="text-white font-medium">{data.title_key ? t(data.title_key) : data.title}</h3>
        <span class="{status_classes[data.status]} text-xs font-medium px-2 py-1 rounded-full">
          {t(`project_status_${data.status}`)}
        </span>
      </div>
      <p class="text-gray-400 text-sm">{t(data.description)}</p>
    </div>
  </article>
</svelte:element>
