<script lang="ts">
  import { replaceState } from "$app/navigation";
  import { page } from "$app/state";
  import { flip } from "svelte/animate";
  import { on } from "svelte/events";
  import { fade } from "svelte/transition";
  import CardSkill from "$lib/components/CardSkill.svelte";
  import { skills } from "$lib/data";
  import { t } from "$lib/lang";

  let search = $state("");

  const filtered_skills = $derived(
    skills.filter((skill) => skill.name.toLowerCase().includes(search.trim().toLowerCase())),
  );

  /** Restores `?search=`, autofocuses on hover devices, and adds Ctrl/⌘+K and Escape shortcuts. */
  function searchInput(element: HTMLInputElement) {
    search = page.url.searchParams.get("search") ?? "";
    if (window.matchMedia("(hover: hover)").matches) element.focus();

    return on(window, "keydown", (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        element.focus();
        element.select();
      }

      if (event.key === "Escape") element.blur();
    });
  }

  function syncSearchToUrl(event: Event & { currentTarget: HTMLInputElement }) {
    const url = new URL(page.url);
    const query = event.currentTarget.value.trim().toLowerCase();

    if (query) url.searchParams.set("search", query);
    else url.searchParams.delete("search");

    replaceState(url, {});
  }
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
        bind:value={search}
        placeholder={t("search_skills")}
        class="bg-surface border border-default lg:w-80 w-fit rounded-lg p-2 pr-12 text-white outline-none focus:ring active:ring ring-neutral-300 transition-colors"
        oninput={syncSearchToUrl}
      />
      {#if search === ""}
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
    {#each filtered_skills as skill (skill.name)}
      <div transition:fade={{ duration: 150 }} animate:flip={{ duration: 200 }}>
        <CardSkill data={skill} />
      </div>
    {:else}
      <p class="text-muted col-span-full mx-auto my-4">{t("no_skills_found")}</p>
    {/each}
  </div>
</div>
