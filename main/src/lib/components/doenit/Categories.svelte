<script lang="ts">
  import { categories, demo_tasks, type Category } from "$lib/data/doenit";
  import Mark from "./Mark.svelte";
  import PillButton from "./PillButton.svelte";
  import Section from "./Section.svelte";
  import SectionHeading from "./SectionHeading.svelte";
  import TaskCard from "./TaskCard.svelte";

  let selected = $state<Category | null>(null);
  const visible = $derived(selected ? demo_tasks.filter((task) => task.category === selected) : demo_tasks);

  const toggle = (category: Category) => (selected = selected === category ? null : category);
  const count = (category: Category) => demo_tasks.filter((task) => task.category === category).length;
</script>

<Section class="border-y border-default bg-surface" inner="flex flex-col gap-12 py-28">
  <div class="flex max-w-2xl flex-col gap-5">
    <SectionHeading>Vir die dinge wat jy aanhou vergeet.</SectionHeading>
    <p class="text-pretty">
      Sit jou take in <Mark>kategorieë</Mark> soos Onderhoud, Afsprake en Higiëne, en <Mark>filtreer</Mark> om net te sien wat jy nou wil. Probeer
      dit: tik op 'n kategorie, en weer om dit te verwyder.
    </p>
  </div>

  <div class="flex flex-wrap gap-2.5">
    {#each categories as category (category)}
      <PillButton selected={selected === category} count={count(category)} onclick={() => toggle(category)}>
        {category}
      </PillButton>
    {/each}
  </div>

  <div class="grid min-h-130 content-start gap-3 md:grid-cols-2 xl:grid-cols-3">
    {#each visible as task (task.title)}
      <TaskCard {task} show_repeat later_class="bg-(--later-card)" />
    {/each}
  </div>
</Section>
