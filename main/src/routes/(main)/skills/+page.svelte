<script lang="ts">
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";
  import CardSkill from "$lib/components/CardSkill.svelte";
  import { t } from "$lib/lang";
  import { filteredSkills, search, searchInput, syncSearchToUrl } from "$lib/skills-search.svelte";
</script>

<svelte:head>
  <title>{t("skills")} – Tertius van Niekerk</title>
</svelte:head>

<div class="text-white w-full p-4 overflow-y-auto mb-auto">
  <div class="flex gap-2 justify-between w-full items-center mb-4">
    <h2 class="text-2xl font-bold">{t("skills")}</h2>
    <div class="relative">
      <input
        {@attach searchInput}
        type="text"
        aria-label={t("search_skills")}
        bind:value={search.query}
        placeholder={t("search_skills")}
        class="bg-surface border border-default lg:w-80 w-fit rounded-lg p-2 pr-12 text-white outline-none focus:ring active:ring ring-neutral-300 transition-colors"
        oninput={syncSearchToUrl}
      />
      {#if search.query === ""}
        <div
          class="pointer-events-none absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-md border border-default bg-card px-1.5 py-0.5 text-xs font-medium font-mono uppercase text-neutral-300 transition-opacity"
        >
          <span>Ctrl</span>
          <span class="text-muted">+</span>
          <span>K</span>
        </div>
      {/if}
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each filteredSkills() as skill (skill.name)}
      <div transition:fade={{ duration: 150 }} animate:flip={{ duration: 200 }}>
        <CardSkill data={skill} />
      </div>
    {:else}
      <p class="text-muted col-span-full mx-auto my-4">{t("no_skills_found")}</p>
    {/each}
  </div>
</div>
