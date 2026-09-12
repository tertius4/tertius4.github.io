<script lang="ts">
  import CardSkill from "$lib/comps/CardSkill.svelte";
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { on } from "svelte/events";
  import { skills } from "$lib";

  let search = $state("");
  let inputEl: HTMLInputElement | undefined = undefined;
  let isFocused = $state(false);
  const filtered_skills = $derived(skills.filter(filterSkills));

  function filterSkills(skill: Skill) {
    return skill.name.toLowerCase().includes(search.toLowerCase());
  }

  function focusSearch(element: HTMLInputElement) {
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
</script>

<div class="text-white w-full p-4 overflow-y-auto mb-auto">
  <div class="flex gap-2 justify-between w-full items-center mb-4">
    <h2 class="text-2xl font-bold">Skills</h2>
    <div class="relative">
      <input
        bind:this={inputEl}
        {@attach focusSearch}
        type="text"
        placeholder="Search skills..."
        class="bg-surface border border-default lg:w-80 w-fit rounded-lg p-2 pr-12 text-white outline-none focus:ring active:ring ring-neutral-300 transition-colors"
        oninput={(e) => (search = e.target?.value || "")}
        onfocus={() => (isFocused = true)}
        onblur={() => (isFocused = false)}
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
