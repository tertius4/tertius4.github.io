<script lang="ts">
  import { groups_demo } from "$lib/data/doenit";
  import GroupCard from "./GroupCard.svelte";
  import Mark from "./Mark.svelte";
  import Section from "./Section.svelte";
  import SectionHeading from "./SectionHeading.svelte";
</script>

<Section inner="py-28">
  <div
    class="flex flex-wrap items-center gap-x-16 gap-y-10 rounded-[28px] border border-default bg-surface p-10 sm:p-16"
  >
    <div class="flex min-w-0 flex-1 basis-80 flex-col gap-6">
      <p class="text-[15px] tracking-wide text-muted">Deel take</p>
      <SectionHeading>Deel take met jou gesin.</SectionHeading>
      <ul class="flex flex-col gap-3 text-xl text-pretty text-normal">
        <li>Maak 'n <Mark>groep</Mark> met familie of vriende.</li>
        <li><Mark>Gee take</Mark> vir mekaar.</li>
        <li>Almal sien <Mark>wat klaar is</Mark>.</li>
      </ul>
      <p class="text-[15px] text-muted">Hiervoor moet jy inteken en aanlyn wees.</p>
    </div>
    <div class="flex min-w-0 flex-1 basis-80 flex-col gap-3" aria-hidden="true">
      {#each groups_demo as group (group.name)}
        <GroupCard {...group} />
      {/each}
    </div>
  </div>
</Section>
