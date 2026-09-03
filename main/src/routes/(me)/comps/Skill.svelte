<script lang="ts">
  interface Props {
    skill: {
      name: string;
      level: number;
    };
  }
  const { skill }: Props = $props();
</script>

<div
  class={{
    "text-white px-2 py-1 rounded": true,
    "bg-onyx-500": skill.level === 5,
    "bg-onyx-600": skill.level === 4,
    "bg-onyx-700": skill.level === 3,
    "bg-onyx-800": skill.level === 2,
    "bg-onyx-900": skill.level === 1,
  }}
>
  {skill.name}
</div>
