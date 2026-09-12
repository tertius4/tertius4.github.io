<script>
  import SummaryInfoCard from "./SummaryInfoCard.svelte";
  import CardContainer from "./CardContainer.svelte";
  import Flag from "$lib/comps/Flag.svelte";
  import t from "$lib/lang";
</script>

<main
  class="text-white w-full grid overflow-y-auto grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 max-sm:gap-4 gap-8 h-full max-lg:p-4"
>
  <CardContainer class="sm:col-span-1 xl:col-span-2">
    <h1 class="text-white text-h1">{t("about_introduction")}</h1>
    <p class="text-muted my-2">{t("intro_sentence")}</p>
  </CardContainer>

  <CardContainer class="sm:row-span-4">
    <h1 class="text-white text-h1 mb-4">{t("about_summary")}</h1>

    <div class="grid gap-2">
      <SummaryInfoCard icon="languages" label={t("about_languages")}>
        <div class="grid gap-1.5">
          <div class="flex items-center gap-2">
            <span class="text-muted">•</span>
            <div class="flex items-center gap-2">
              <Flag name="united-kingdom" />
              <span>{t("about_english")}: <span class="text-muted">{t("about_english_level")}</span></span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-muted">•</span>
            <div class="flex items-center gap-2">
              <Flag name="south-africa" />
              <span>{t("about_afrikaans")}: <span class="text-muted">{t("about_afrikaans_level")}</span></span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-muted">•</span>
            <div class="flex items-center gap-2">
              <Flag name="germany" />
              <span>{t("about_german")}: <span class="text-muted">{t("about_german_level")}</span></span>
            </div>
          </div>
        </div>
      </SummaryInfoCard>

      <SummaryInfoCard icon="birth-date" label={t("about_date_of_birth")}>
        <div>
          <span class="text-muted">Jan 1998</span>
        </div>
      </SummaryInfoCard>

      <SummaryInfoCard icon="map-pin" label={t("about_location")}>
        <div class="grid gap-2">
          <div class="flex items-start gap-2">
            <span class="pt-0.5 text-muted">•</span>
            <span>{t("about_south_africa")}: <span class="text-muted">{t("about_south_africa_label")}</span></span>
          </div>
          <div class="flex items-start gap-2">
            <span class="pt-0.5 text-muted">•</span>
            <span>{t("about_luxembourg")}: <span class="text-muted">{t("about_luxembourg_label")}</span></span>
          </div>
        </div>
      </SummaryInfoCard>

      <SummaryInfoCard icon="calendar" label={t("about_availability")}>
        <div>
          <span class="text-muted">Nov 2026</span>
        </div>
      </SummaryInfoCard>

      <SummaryInfoCard icon="reference" label={t("about_references")}>
        <div>
          <span class="text-muted">{t("about_available_upon_request")}</span>
        </div>
      </SummaryInfoCard>

      <SummaryInfoCard icon="hobby" label={t("about_hobbies")}>
        <div class="grid gap-2">
          <div class="rounded-lg border border-default bg-neutral-600 p-2">
            <p class="text-sm font-medium text-white">{t("about_reading")}</p>
            <p class="text-xs leading-relaxed text-muted">{t("about_reading_desc")}</p>
          </div>

          <div class="rounded-lg border border-default bg-neutral-600 p-2">
            <p class="text-sm font-medium text-white">{t("about_coding")}</p>
            <p class="text-xs leading-relaxed text-muted">{t("about_coding_desc")}</p>
          </div>

          <div class="rounded-lg border border-default bg-neutral-600 p-2">
            <p class="text-sm font-medium text-white">{t("about_exploring")}</p>
            <p class="text-xs leading-relaxed text-muted">{t("about_exploring_desc")}</p>
          </div>

          <div class="rounded-lg border border-default bg-neutral-600 p-2">
            <p class="text-sm font-medium text-white">{t("about_jogging")}</p>
            <p class="text-xs leading-relaxed text-muted">{t("about_jogging_desc")}</p>
          </div>
        </div>
      </SummaryInfoCard>
    </div>
  </CardContainer>

  <CardContainer class="sm:col-span-1 xl:col-span-2 sm:row-span-3">
    <div class="grid gap-5">
      <h1 class="text-white text-h1">{t("about_education")}</h1>

      <div class="grid gap-3">
        <div class="rounded-md border border-default bg-neutral-800 p-3">
          <h3 class="mb-1.5 text-white text-h3">{t("about_university")}</h3>
          <p class="text-muted leading-relaxed">
            {t("about_university_desc")}
          </p>
        </div>

        <div class="rounded-md border border-default bg-neutral-800 p-3">
          <h3 class="mb-1.5 text-white text-h3">{t("about_high_school")}</h3>
          <p class="text-muted leading-relaxed">{t("about_high_school_desc")}</p>
        </div>

        <div class="rounded-md border border-default bg-neutral-800 p-3">
          <h3 class="mb-1.5 text-white text-h3">{t("about_other_education")}</h3>
          <div class="grid gap-2 text-muted leading-relaxed">
            <p>
              {t("about_other_education_p1")}
            </p>
            <p>
              {t("about_other_education_p2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  </CardContainer>

  <CardContainer class="sm:col-span-2 xl:col-span-3 xl:row-span-2">
    <div class="grid gap-5">
      <h1 class="text-white text-h1">{t("about_work_experience")}</h1>

      <div class="grid gap-4 xl:grid-cols-2">
        <div class="rounded-md border border-default bg-neutral-800 p-4">
          <h3 class="mb-3 text-white text-h3">{t("about_unaffi")}</h3>
          <ul class="grid gap-2 text-sm leading-relaxed text-muted">
            <li class="flex gap-2">
              <span class="mt-1.5 text-primary">•</span>
              <span>{t("about_unaffi_li_1")}</span>
            </li>
            <li class="flex gap-2">
              <span class="mt-1.5 text-primary">•</span>
              <span>{t("about_unaffi_li_2")}</span>
            </li>
            <li class="flex gap-2">
              <span class="mt-1.5 text-primary">•</span>
              <span>{t("about_unaffi_li_3")}</span>
            </li>
            <li class="flex gap-2">
              <span class="mt-1.5 text-primary">•</span>
              <span>{t("about_unaffi_li_4")}</span>
            </li>
            <li class="flex gap-2">
              <span class="mt-1.5 text-primary">•</span>
              <span>{t("about_unaffi_li_5")}</span>
            </li>
            <li class="flex gap-2">
              <span class="mt-1.5 text-primary">•</span>
              <span>{t("about_unaffi_li_6")}</span>
            </li>
          </ul>
        </div>

        <div class="rounded-md border border-default bg-neutral-800 p-4">
          <h3 class="mb-3 text-white text-h3">{t("about_gatekeeper")}</h3>
          <ul class="grid gap-2 text-sm leading-relaxed text-muted">
            <li class="flex gap-2">
              <span class="mt-1.5 text-primary">•</span>
              <span>{t("about_gatekeeper_li_1")}</span>
            </li>
            <li class="flex gap-2">
              <span class="mt-1.5 text-primary">•</span>
              <span>{t("about_gatekeeper_li_2")}</span>
            </li>
            <li class="flex gap-2">
              <span class="mt-1.5 text-primary">•</span>
              <span>{t("about_gatekeeper_li_3")}</span>
            </li>
            <li class="flex gap-2">
              <span class="mt-1.5 text-primary">•</span>
              <span>{t("about_gatekeeper_li_4")}</span>
            </li>
            <li class="flex gap-2">
              <span class="mt-1.5 text-primary">•</span>
              <span>{t("about_gatekeeper_li_5")}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </CardContainer>
</main>
