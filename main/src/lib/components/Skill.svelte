<script lang="ts">
  interface Props {
    data: {
      name: string;
      level: number;
    };
  }
  const { data, ...rest }: Props & Record<string, any> = $props();
</script>

<div
  {...rest}
  class={[
    {
      "text-normal px-2 py-1 rounded": true,
      "bg-neutral-500 font-medium": data.level === 5,
      "bg-neutral-600": data.level === 4,
      "bg-neutral-700": data.level === 3,
      "bg-neutral-800": data.level === 2,
      "bg-neutral-900": data.level === 1,
    },
    rest.class || "",
  ]}
>
  {data.name}
</div>
