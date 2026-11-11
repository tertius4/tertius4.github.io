<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import { categories, demo_tasks, hero_titles, statusOf, type Category } from "$lib/data/doenit";
  import Logo from "./Logo.svelte";
  import NavTab from "./NavTab.svelte";
  import PillButton from "./PillButton.svelte";
  import TaskGroup from "./TaskGroup.svelte";

  // The tasks drawn inside the screen, grouped the way the app groups them.
  const tasks = demo_tasks.filter((task) => hero_titles.includes(task.title));
  const late = tasks.filter((task) => statusOf(task) === "late");
  const today = tasks.filter((task) => statusOf(task) === "today");
  const soon = tasks.filter((task) => statusOf(task) === "later");

  const count = (category: Category) => tasks.filter((task) => task.category === category).length;
</script>

<!-- Drawn with HTML, in the app's own colours -->
<div
  class="flex flex-col overflow-hidden rounded-[32px] border border-default bg-page text-strong shadow-2xl shadow-black/60"
  aria-hidden="true"
>
  <div class="grid grid-cols-[1fr_auto_1fr] items-center border-b border-default bg-surface px-5 py-4">
    <span></span>
    <span class="flex items-center gap-2 text-2xl font-bold tracking-tight">
      <Logo size={30} />Taaklys
    </span>
    <Icon name="search" size={24} class="justify-self-end" />
  </div>

  <div class="flex flex-col gap-2.5 p-4">
    <div class="grid grid-cols-2 gap-1 rounded-full bg-card p-1.25">
      <span class="flex min-h-11 items-center justify-center text-[15px] text-normal">
        Doen nou · {late.length + today.length}
      </span>
      <span class="flex min-h-11 items-center justify-center rounded-full bg-primary text-[15px] font-bold text-page">
        Alles
      </span>
    </div>

    <TaskGroup label="Verby" tasks={late} />
    <TaskGroup label="Vandag" tasks={today} />
    <TaskGroup label="Binnekort" tasks={soon} />

    <div class="flex justify-end pt-2">
      <span class="inline-flex size-14 items-center justify-center rounded-full bg-primary text-page">
        <Icon name="plus" size={26} />
      </span>
    </div>
  </div>

  <div
    class="flex gap-2 overflow-x-auto border-t border-default bg-surface px-4 py-3 [&>*]:shrink-0 [&>*]:whitespace-nowrap"
  >
    {#each categories as category (category)}
      {#if count(category)}
        <PillButton size="sm" count={count(category)}>{category}</PillButton>
      {/if}
    {/each}
  </div>

  <div class="grid grid-cols-3 gap-1 border-t border-default bg-surface px-3 pt-2.5 pb-3.5 text-center text-[13px]">
    <NavTab icon="tasks" label="Alle take" active />
    <NavTab icon="people" label="Groepe" />
    <NavTab icon="contacts" label="Kontaklys" />
  </div>
</div>
