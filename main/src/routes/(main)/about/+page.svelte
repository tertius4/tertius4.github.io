<script lang="ts">
  import CardContainer from "$lib/components/CardContainer.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import SummaryInfoCard from "$lib/components/SummaryInfoCard.svelte";
  import { education, hobbies, languages, locations, work_experience } from "$lib/data/about";
  import { years_of_experience } from "$lib/data";
  import { t } from "$lib/lang";
</script>

<svelte:head>
  <title>{t("about_introduction")} – Tertius van Niekerk</title>
  <meta name="description" content={t("intro_sentence")} />
</svelte:head>

<div
  class="text-white w-full grid overflow-y-auto grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 max-sm:gap-4 gap-8 h-full max-lg:p-4"
>
  <CardContainer class="sm:col-span-1 xl:col-span-2">
    <h2 class="text-white text-h1">{t("about_introduction")}</h2>
    <p class="text-muted my-2">{t("intro_sentence")}</p>
  </CardContainer>

  <CardContainer class="sm:row-span-4">
    <h2 class="text-white text-h1 mb-4">{t("about_summary")}</h2>

    <div class="grid gap-2">
      <SummaryInfoCard icon="languages" label={t("about_languages")}>
        <ul class="grid gap-1.5">
          {#each languages as language (language.name)}
            <li class="flex items-center gap-2">
              <span class="text-muted">•</span>
              <div class="flex items-center gap-2">
                <Icon name={language.flag} />
                <span>{t(language.name)}: <span class="text-muted">{t(language.level)}</span></span>
              </div>
            </li>
          {/each}
        </ul>
      </SummaryInfoCard>

      <SummaryInfoCard icon="experience" label={t("about_experience")}>
        <span class="text-muted">~{years_of_experience} {t("years")}</span>
      </SummaryInfoCard>

      <SummaryInfoCard icon="map-pin" label={t("about_location")}>
        <ul class="grid gap-2">
          {#each locations as location (location.name)}
            <li class="flex items-start gap-2">
              <span class="pt-0.5 text-muted">•</span>
              <span>{t(location.name)}: <span class="text-muted">{t(location.label)}</span></span>
            </li>
          {/each}
        </ul>
      </SummaryInfoCard>

      <SummaryInfoCard icon="calendar" label={t("about_availability")}>
        <span class="text-muted">{t("about_availability_date")}</span>
      </SummaryInfoCard>

      <SummaryInfoCard icon="reference" label={t("about_references")}>
        <span class="text-muted">{t("about_available_upon_request")}</span>
      </SummaryInfoCard>

      <SummaryInfoCard icon="hobby" label={t("about_hobbies")}>
        <ul class="grid gap-2">
          {#each hobbies as hobby (hobby.name)}
            <li class="rounded-lg border border-default bg-neutral-600 p-2">
              <p class="text-sm font-medium text-white">{t(hobby.name)}</p>
              <p class="text-xs leading-relaxed text-muted">{t(hobby.description)}</p>
            </li>
          {/each}
        </ul>
      </SummaryInfoCard>
    </div>
  </CardContainer>

  <CardContainer class="sm:col-span-1 xl:col-span-2 sm:row-span-3">
    <div class="grid gap-5">
      <h2 class="text-white text-h1">{t("about_education")}</h2>

      <div class="grid gap-3">
        {#each education as entry (entry.title)}
          <div class="rounded-md border border-default bg-neutral-800 p-3">
            <h3 class="mb-1.5 text-white text-h3">{t(entry.title)}</h3>
            <div class="grid gap-2 text-muted leading-relaxed">
              {#each entry.paragraphs as paragraph (paragraph)}
                <p>{t(paragraph)}</p>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </CardContainer>

  <CardContainer class="sm:col-span-2 xl:col-span-3 xl:row-span-2">
    <div class="grid gap-5">
      <h2 class="text-white text-h1">{t("about_work_experience")}</h2>

      <div class="grid gap-4 xl:grid-cols-2">
        {#each work_experience as job (job.company)}
          <div class="rounded-md border border-default bg-neutral-800 p-4">
            <h3 class="mb-3 text-white text-h3">{t(job.company)}</h3>
            <ul class="grid gap-2 text-sm leading-relaxed text-muted">
              {#each job.points as point (point)}
                <li class="flex gap-2">
                  <span class="text-primary">•</span>
                  <span class="flex items-center">{t(point)}</span>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </CardContainer>
</div>
