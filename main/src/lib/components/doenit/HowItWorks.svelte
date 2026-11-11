<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import { repeat_options, repeat_selected } from "$lib/data/doenit";
  import Dropdown from "./Dropdown.svelte";
  import Field from "./Field.svelte";
  import Mark from "./Mark.svelte";
  import Section from "./Section.svelte";
  import SectionHeading from "./SectionHeading.svelte";
  import Step from "./Step.svelte";
</script>

<Section class="border-t border-default" inner="flex flex-col gap-8 py-16 md:gap-16 md:py-28">
  <SectionHeading class="max-w-2xl">Een keer ingestel, daarna net doen.</SectionHeading>
  <div class="grid gap-8 md:grid-cols-3 md:gap-12">
    <Step n={1} title="Skryf die taak" panel="flex flex-col gap-2">
      {#snippet text()}
        Waterfilter omruil. Gee dit 'n <Mark>kategorie</Mark>, en voeg 'n <Mark>beskrywing</Mark> of 'n <Mark>foto</Mark
        > by as jy wil.
      {/snippet}
      {#snippet mockup()}
        <Field>Waterfilter omruil</Field>
        <span class="px-1 text-sm text-primary">+ Voeg beskrywing by</span>
        <span class="px-0.5 text-[15px] font-bold text-strong">Kategorie</span>
        <Field class="justify-between">
          Onderhoud
          <Icon name="chevron-down" size={20} />
        </Field>
      {/snippet}
    </Step>

    <Step n={2} title="Kies hoe gereeld" interactive>
      {#snippet text()}
        Elke dag, elke week of <Mark>op gekose dae</Mark>, elke maand, elke jaar, of <Mark>elke 2 weke</Mark> en <Mark
          >elke 3 maande</Mark
        >.
      {/snippet}
      {#snippet mockup()}
        <Dropdown options={repeat_options} selected={repeat_selected} />
      {/snippet}
    </Step>

    <Step n={3} title="Kry 'n herinnering" panel="flex flex-col gap-3.5">
      {#snippet text()}
        Elke dag, <Mark>op die tyd wat jy kies</Mark>, sê Doenit wat vandag moet gebeur en wat <Mark>agterstallig</Mark> is.
      {/snippet}
      {#snippet mockup()}
        <span class="flex items-center gap-3.5 text-[15px] text-strong">
          <span class="relative h-7.5 w-13 shrink-0 rounded-full bg-primary">
            <span class="absolute top-0.75 right-0.75 size-6 rounded-full bg-foreground-400"></span>
          </span>
          Stel my in kennis oor vandag se take
        </span>
        <span class="text-[15px] text-strong">Herinneringstyd</span>
        <Field>09:00</Field>
      {/snippet}
    </Step>
  </div>
</Section>
