<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";

  interface Props {
    name: string;
    members: string;
    tasks: number;
  }

  const { name, members, tasks }: Props = $props();
</script>

<div class="flex items-start justify-between gap-3 rounded-2xl bg-page px-5 py-4">
  <div class="flex flex-col gap-1">
    <span class="text-[22px] font-medium text-primary">{name}</span>
    <span class="flex items-center gap-2 text-base text-strong">
      <Icon name="user" size={18} />
      {members}
    </span>
  </div>
  <span class="inline-flex min-h-8 items-center rounded-[10px] bg-card px-3 text-[15px] font-medium text-sky-300">
    {tasks} Take
  </span>
</div>
