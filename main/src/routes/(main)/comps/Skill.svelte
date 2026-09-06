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
      "text-white px-2 py-1 rounded": true,
      "bg-onyx-500": data.level === 5,
      "bg-onyx-600": data.level === 4,
      "bg-onyx-700": data.level === 3,
      "bg-onyx-800": data.level === 2,
      "bg-onyx-900": data.level === 1,
    },
    rest.class || "",
  ]}
>
  {data.name}
</div>
