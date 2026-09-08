<script lang="ts">
  import { skills } from "$lib";
  import CardSkill from "$lib/comps/CardSkill.svelte";
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";

  let search = $state("");
  const filtered_skills = $derived(skills.filter(filterSkills));

  function filterSkills(skill: Skill) {
    return skill.name.toLowerCase().includes(search.toLowerCase());
  }
</script>

<div class="text-white w-full p-4 overflow-y-auto">
  <div class="flex gap-2">
    <h2 class="text-2xl font-bold mb-4">Skills</h2>
    <div>
      <input
        type="text"
        placeholder="Search skills..."
        class="w-full p-2 mb-4 text-white"
        oninput={(e) => (search = e.target?.value || "")}
      />
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
