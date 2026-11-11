<script lang="ts">
  import InfoBlock from "./InfoBlock.svelte";
  import Mark from "./Mark.svelte";
  import Section from "./Section.svelte";
  import SectionHeading from "./SectionHeading.svelte";
</script>

<Section inner="flex flex-wrap gap-16 py-28">
  <div class="min-w-0 flex-1 basis-80">
    <SectionHeading>Jou take, jou besluit.</SectionHeading>
  </div>
  <div class="flex min-w-0 flex-1 basis-96 flex-col gap-10">
    <InfoBlock title="Werk sonder internet" icon="fa-link-slash">
      Take, herhalings en herinneringe werk ook as jy <Mark>nie internet het nie</Mark>.
    </InfoBlock>
    <InfoBlock title="Geen rekening nodig nie" icon="fa-user-slash">
      Jou take bly <Mark>op jou toestel</Mark>, tensy jy self sinkronisering aanskakel.
    </InfoBlock>
    <InfoBlock title="Sinkroniseer as jy wil" icon="fa-cloud-arrow-up">
      Wil jy dieselfde take op jou foon en die web hê? Teken in met Google of Apple. Jou take word dan in <Mark
        >Johannesburg</Mark
      >
      gestoor. Foto's bly op jou toestel.
    </InfoBlock>
  </div>
</Section>
