<script>
  import { page } from "$app/state";
  import { projects, skills } from "$lib";
  import Avatar from "$lib/comps/Avatar.svelte";
  import CardProject from "./comps/CardProject.svelte";
  import t from "$lib/lang";
  import CoverImage from "./comps/CoverImage.svelte";
  import Heading2 from "./comps/Heading2.svelte";
  import Container from "./comps/layout/Container.svelte";
  import Main from "./comps/layout/Main.svelte";
  import SidePanel from "./comps/layout/SidePanel.svelte";
  import Skill from "./comps/Skill.svelte";

  function updateLanguage() {
    const currentLang = page.data.lang;
    const newLang = currentLang === "en" ? "af" : "en";
    document.cookie = `lang=${newLang}; path=/; SameSite=Lax`;
    location.reload();
  }
</script>

<svelte:head>
  <title>Tertius – Software Developer</title>
  <link rel="icon" href="/tertius_picture.webp" />
  <meta
    name="description"
    content="Personal website of Tertius, a full stack software developer with South African and German citizenship, open to opportunities across Europe."
  />
  <meta
    name="keywords"
    content="full stack developer, web developer, JavaScript, TypeScript, Svelte, Node.js, Europe, Germany, South Africa, multilingual developer"
  />
  <meta property="og:title" content="Tertius – Software Developer" />
  <meta
    property="og:description"
    content="Full stack developer with South African and German citizenship, available for opportunities with European teams."
  />
  <meta property="og:type" content="website" />
</svelte:head>

<Container class="w-dvw h-dvh">
  <SidePanel class="bg-onyx-900 ring-2 ring-onyx-800 rounded-2xl p-2 space-y-4 flex flex-col">
    <div class="relative mb-8">
      <CoverImage src="/cover-image.webp" alt="Cover Image" class="w-full h-[200px] rounded-2xl ring-2 ring-onyx-800" />
      <Avatar
        src="/tertius_picture.webp"
        alt="Tertius"
        class="absolute top-20 left-8 transform  size-36 ring-4 ring-onyx-700"
      />

      <button class="absolute top-4 right-4 bg-onyx-800 text-white" onclick={updateLanguage}>
        {page.data.lang === "en" ? "EN" : "AF"}
      </button>
    </div>

    <section class="p-8 space-y-4 overflow-y-auto grow">
      <div class="space-y-2">
        <h1 class="text-white font-medium text-2xl">Tertius van Niekerk</h1>
        <p class="text-onyx-300">
          {t("intro_sentence")}
        </p>
      </div>

      <div class="space-y-2">
        <Heading2>
          {t("skills")}
        </Heading2>

        <div class="flex flex-wrap gap-1">
          {#each skills.sort((a, b) => b.level - a.level) as skill}
            <Skill {skill} />
          {/each}
        </div>
      </div>

      <div class="space-y-2">
        <Heading2>
          {t("my_projects")}
        </Heading2>

        <div class="space-y-1">
          {#each projects as project}
            <CardProject data={project} />
          {/each}
        </div>
      </div>
    </section>
  </SidePanel>
  <Main>
    <span class="text-white">Hello, World!</span>
  </Main>
</Container>
