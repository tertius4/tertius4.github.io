<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import { card_classes, statusOf, type DemoTask } from "$lib/data/doenit";
  import { dateLabel } from "$lib/data/doenit-date.svelte";
  import Chip from "./Chip.svelte";

  interface Props {
    task: DemoTask;
    /** Show how often the task repeats beside the card. */
    show_repeat?: boolean;
    /** Background for tasks that are neither late nor today, for use on a surface-coloured section. */
    later_class?: string;
  }

  const { task, show_repeat = false, later_class }: Props = $props();
  const status = $derived(statusOf(task));
</script>

<div class="flex items-center gap-3.5 rounded-2xl px-4 py-3.5 {status === 'later' && later_class ? later_class : card_classes[status]}">
  <span class="size-6.5 shrink-0 rounded-md bg-foreground-400" aria-hidden="true"></span>
  <div class="flex min-w-0 flex-1 flex-col gap-1.5">
    <span class="text-lg text-strong">{task.title}</span>
    <span class="flex flex-wrap gap-1.5">
      <Chip {status}>
        <Icon name="clock" size={13} />{dateLabel(task.in_days)}<Icon name="repeat" size={13} />
      </Chip>
      <Chip {status} shape="rect">
        <Icon name="grid" size={13} />{task.category}
      </Chip>
    </span>
  </div>
  {#if show_repeat}
    <span class="text-right text-sm text-muted">{task.repeat}</span>
  {/if}
</div>
