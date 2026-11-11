<script lang="ts">
  import type { DemoTask } from "$lib/data/doenit";
  import TaskCard from "./TaskCard.svelte";

  interface Props {
    label: string;
    tasks: DemoTask[];
  }

  const { label, tasks }: Props = $props();
</script>

{#if tasks.length}
  <span class="pt-1.5 text-[17px] font-bold">{label}</span>
  {#each tasks as task (task.title)}
    <TaskCard {task} />
  {/each}
{/if}
