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
  import Icon from "$lib/comps/Icon.svelte";
  import Link from "$lib/comps/Link.svelte";
  import BottomBar from "./comps/layout/BottomBar.svelte";
  import ButtonBottomBar from "./comps/ButtonBottomBar.svelte";

  const { children } = $props();

  function updateLanguage() {
    const currentLang = page.data.lang;
    const newLang = currentLang === "en" ? "af" : "en";
    document.cookie = `lang=${newLang}; path=/; SameSite=Lax`;
    location.reload();
  }

  /** @param {MouseEvent} event */
  function goToProjects(event) {
    event.preventDefault();

    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    location.href = "/#projects";
  }
</script>

<svelte:head>
  <title>Tertius – Software Developer</title>
  <link rel="icon" href="/tertius-pic-square.webp" />
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
  <SidePanel
    class={{
      "lg:flex flex-col max-lg:hidden bg-onyx-850 ring-2 ring-onyx-800 rounded-2xl p-2 space-y-4": !page.data.is_home,
      "max-lg:h-full flex flex-col": page.data.is_home,
    }}
  >
    <div class="relative bg-transparent">
      <CoverImage
        src="/cover-image.webp"
        alt="Cover Image"
        class="w-full h-[200px] lg:rounded-2xl ring-2 ring-onyx-800"
      />
      <Avatar
        src="/tertius-pic-square.webp"
        alt="Tertius"
        class="absolute bottom-0 -mb-8 left-6 lg:left-8 transform size-36 ring-2 ring-onyx-700"
      />

      <button
        class="absolute top-4 py-0.5 rounded-lg px-2 right-4 bg-onyx-800 hover:bg-onyx-600 active:bg-onyx-600 focus:bg-onyx-600 text-white outline-none hover:font-medium active:font-medium focus:font-medium"
        onclick={updateLanguage}
      >
        {page.data.lang === "en" ? "EN" : "AF"}
      </button>
    </div>

    <section class="p-6 pt-12 md:pt-8 space-y-4 overflow-y-auto grow scrollbar-none">
      <div class="space-y-2">
        <h1 class="text-white font-medium text-2xl">Tertius van Niekerk</h1>
        <p class="text-onyx-300">
          {t("intro_sentence")}
        </p>
        <Link href="/about">
          <span>More about me</span>
          <Icon name="chevron-right" size={20} />
        </Link>
      </div>

      <div class="space-y-4">
        <Heading2>
          {t("skills")}
        </Heading2>

        <div class="flex flex-wrap gap-1">
          {#each skills.sort((a, b) => b.level - a.level) as skill}
            <Skill data={skill} />
          {/each}
        </div>
        <Link href="/skills">
          <span>Read more detailed</span>
          <Icon name="chevron-right" size={20} />
        </Link>
      </div>

      <div class="space-y-2 pt-8" id="projects">
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
  <Main class="lg:rounded-lg overflow-hidden lg:ring-2 ring-onyx-800">
    {@render children()}
  </Main>
  <BottomBar class="bg-onyx-900 lg:hidden p-2">
    <ButtonBottomBar active={page.url.pathname === "/"}>
      <Icon name="home" size={24} />
      <span>Home</span>
    </ButtonBottomBar>
    <ButtonBottomBar onclick={goToProjects}>
      <Icon name="user" size={24} />
      <span>My Projects</span>
    </ButtonBottomBar>
  </BottomBar>
</Container>
