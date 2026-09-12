<script lang="ts">
  import CardSkill from "$lib/comps/CardSkill.svelte";
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { on } from "svelte/events";
  import { page } from "$app/state";
  import { replaceState } from "$app/navigation";
  import { skills } from "$lib";
  import t from "$lib/lang";

  const { data } = $props();

  let search = $state(page.url.searchParams.get("search") || "");

  const filtered_skills = $derived(
    skills.filter((skill) => skill.name.toLowerCase().includes(search.trim().toLowerCase() || "")),
  );

  function focusSearch(element: HTMLInputElement) {
    element.focus();
    return on(window, "keydown", (event: KeyboardEvent) => {
      const is_ctrl_key = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

      if (is_ctrl_key) {
        event.preventDefault();
        element.focus();
        element.select();
      }

      const is_escape = event.key.toLowerCase() === "escape";
      if (is_escape) {
        element.blur();
      }
    });
  }

  async function handleSearchInput(event: Event) {
    if (search === "") {
      page.url.searchParams.delete("search");
    } else {
      page.url.searchParams.set("search", search.trim().toLowerCase());
    }

    replaceState(page.url.toString(), {});
  }
</script>

<div class="text-white w-full p-4 overflow-y-auto mb-auto">
  <div class="flex gap-2 justify-between w-full items-center mb-4">
    <h2 class="text-2xl font-bold">{t("skills")}</h2>
    <div class="relative">
      <input
        {@attach focusSearch}
        type="text"
        bind:value={search}
        placeholder={t("search_skills")}
        class="bg-surface border border-default lg:w-80 w-fit rounded-lg p-2 pr-12 text-white outline-none focus:ring active:ring ring-neutral-300 transition-colors"
        oninput={handleSearchInput}
      />
      <div
        class={{
          "pointer-events-none absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-md border border-default bg-card px-1.5 py-0.5 text-xs font-medium font-mono uppercase text-neutral-300 transition-opacity": true,
        }}
      >
        <span>Ctrl</span>
        <span class="text-muted">+</span>
        <span>K</span>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each filtered_skills as skill (skill.name)}
      <div transition:fade={{ duration: 150 }} animate:flip={{ duration: 200 }}>
        <CardSkill data={skill} />
      </div>
    {/each}
  </div>
</div>
