<script lang="ts">
  import AppScreen from "./AppScreen.svelte";
  import { demo_tasks, hero_titles, statusOf } from "$lib/data/doenit";
  import Mark from "./Mark.svelte";
  import Notification from "./Notification.svelte";
  import Section from "./Section.svelte";
  import SectionHeading from "./SectionHeading.svelte";
  import StoreBadges from "./StoreBadges.svelte";

  const today = demo_tasks
    .filter((task) => hero_titles.includes(task.title) && statusOf(task) === "today")
    .map((task) => task.title);
</script>

<Section inner="grid items-start gap-16 pt-10 pb-28 lg:grid-cols-2">
  <div class="flex min-w-0 flex-col gap-7 lg:pt-12">
    <p class="text-[15px] tracking-wide text-muted">Taaklys vir Android, iOS en die web</p>
    <SectionHeading level={1} size="hero">Dit onthou namens jou.</SectionHeading>
    <p class="max-w-lg text-xl text-pretty text-normal">
      Doenit is 'n Afrikaanse taaklys vir die dinge wat elke paar weke of maande terugkom. Op die regte dag kry jy 'n
      herinnering: <Mark>dit is weer tyd.</Mark> Deel take met jou gesin en vriende.
    </p>
    <div class="pt-2">
      <StoreBadges />
    </div>
    <p class="text-[15px] text-muted">Gratis. Geen rekening nodig nie.</p>
  </div>

  <div class="mx-auto flex w-full max-w-100 min-w-0 flex-col gap-5 lg:mr-0">
    <AppScreen />

    <Notification title="Take vir vandag" items={today} />
  </div>
</Section>
