<script>
  import Flag from "$lib/comps/Flag.svelte";
  import Icon from "$lib/comps/Icon.svelte";
  import t from "$lib/lang";
  import CardContainer from "./CardContainer.svelte";
  import SummaryInfoCard from "./SummaryInfoCard.svelte";
</script>

<main
  class="text-white w-full grid overflow-y-auto grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 max-sm:gap-4 gap-8 h-full max-lg:p-4"
>
  <CardContainer class="sm:col-span-1 xl:col-span-2">
    <h1 class="text-white text-h1">Introduction</h1>
    <p class="text-muted my-2">{t("intro_sentence")}</p>
  </CardContainer>

  <CardContainer class="sm:row-span-4">
    <h1 class="text-white text-h1 mb-4">Summary</h1>

    <div class="grid gap-2">
      <SummaryInfoCard icon="languages" label="Languages">
        <div class="grid gap-1.5">
          <div class="flex items-center gap-2">
            <span class="text-muted">•</span>
            <div class="flex items-center gap-2">
              <Flag name="united-kingdom" />
              <span>English: <span class="text-muted">Fluent</span></span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-muted">•</span>
            <div class="flex items-center gap-2">
              <Flag name="south-africa" />
              <span>Afrikaans: <span class="text-muted">Fluent</span></span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-muted">•</span>
            <div class="flex items-center gap-2">
              <Flag name="germany" />
              <span>German: <span class="text-muted">Elementary (A2)</span></span>
            </div>
          </div>
        </div>
      </SummaryInfoCard>

      <SummaryInfoCard icon="birth-date" label="Date of birth">
        <div>
          <span class="text-muted">Jan, 1998</span>
        </div>
      </SummaryInfoCard>

      <SummaryInfoCard icon="map-pin" label="Location">
        <div class="grid gap-2">
          <div class="flex items-start gap-2">
            <span class="pt-0.5 text-muted">•</span>
            <span>South Africa: <span class="text-muted">My Current Residence</span></span>
          </div>
          <div class="flex items-start gap-2">
            <span class="pt-0.5 text-muted">•</span>
            <span>Luxembourg: <span class="text-muted">Looking for opportunities in Luxembourg</span></span>
          </div>
        </div>
      </SummaryInfoCard>

      <SummaryInfoCard icon="calendar" label="Availability">
        <div>
          <span class="text-muted">Nov 2026</span>
        </div>
      </SummaryInfoCard>

      <SummaryInfoCard icon="reference" label="References">
        <div>
          <span class="text-muted">Available upon request</span>
        </div>
      </SummaryInfoCard>

      <SummaryInfoCard icon="hobby" label="Hobbies">
        <div class="grid gap-2">
          <div class="rounded-lg border border-white/5 bg-black/10 p-2">
            <p class="text-sm font-medium text-white">Reading</p>
            <p class="text-xs leading-relaxed text-muted">Personal development and fiction</p>
          </div>

          <div class="rounded-lg border border-white/5 bg-black/10 p-2">
            <p class="text-sm font-medium text-white">Coding</p>
            <p class="text-xs leading-relaxed text-muted">Building projects and exploring new ideas</p>
          </div>

          <div class="rounded-lg border border-white/5 bg-black/10 p-2">
            <p class="text-sm font-medium text-white">Exploring</p>
            <p class="text-xs leading-relaxed text-muted">Nature, places, and fresh perspectives</p>
          </div>

          <div class="rounded-lg border border-white/5 bg-black/10 p-2">
            <p class="text-sm font-medium text-white">Jogging</p>
            <p class="text-xs leading-relaxed text-muted">Completed 2 marathons</p>
          </div>
        </div>
      </SummaryInfoCard>
    </div>
  </CardContainer>

  <CardContainer class="sm:col-span-1 xl:col-span-2 sm:row-span-3">
    <h1 class="text-white text-h1">Education</h1>
    <div class="grid xl:grid-cols-1 gap-4">
      <div>
        <h3 class="text-white text-h3">University</h3>
        <p>Details about university education...</p>
      </div>
      <div>
        <h3 class="text-white text-h3">High School</h3>
        <p>Details about high school education...</p>
      </div>
      <div>
        <h3 class="text-white text-h3">Other Education</h3>
        <p>Details about other education...</p>
      </div>
    </div>
  </CardContainer>

  <CardContainer class="sm:col-span-2 xl:col-span-3 xl:row-span-2">
    <h1 class="text-white text-h1">Work Experience</h1>
    <div class="grid xl:grid-cols-2 gap-4">
      <div>
        <h3 class="text-white text-h3">UNAFFI</h3>
        <p>At UNAFFI, I was responsible for...</p>
      </div>
      <div>
        <h3 class="text-white text-h3">Gatekeeper</h3>
        <p>At GateKeeper, I was responsible for...</p>
      </div>
    </div>
  </CardContainer>
</main>
