<script>
  import { page } from "$app/state";
  import { projects, skills } from "$lib";
  import Avatar from "$lib/comps/Avatar.svelte";
  import CardProject from "./comps/CardProject.svelte";
  import t from "$lib/lang";
  import CoverImage from "./comps/CoverImage.svelte";
  import Container from "./comps/layout/Container.svelte";
  import Main from "./comps/layout/Main.svelte";
  import SidePanel from "./comps/layout/SidePanel.svelte";
  import Skill from "./comps/Skill.svelte";
  import Icon from "$lib/comps/Icon.svelte";
  import Link from "$lib/comps/Link.svelte";
  import BottomBar from "./comps/layout/BottomBar.svelte";
  import ButtonBottomBar from "./comps/ButtonBottomBar.svelte";
  import CardContactMe from "./comps/CardContactMe.svelte";

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

<Container class="w-dvw h-dvh overflow-hidden">
  <SidePanel
    class={{
      "grow w-full": true,
      "lg:flex flex-col max-lg:hidden bg-onyx-850 ring-2 ring-onyx-800 rounded-2xl space-y-4": !page.data.is_home,
      "max-lg:h-full flex flex-col": page.data.is_home,
    }}
  >
    <div class="relative">
      <CoverImage
        src="/cover-image.webp"
        alt="Cover Image"
        class="w-full h-[200px] lg:rounded-2xl lg:border-2 border-default"
      />
      <Avatar
        src="/tertius-pic-square.webp"
        alt="Tertius"
        class="absolute bottom-0 -mb-8 left-6 lg:left-8 transform size-36 border-2 border-default"
      />

      <button
        class="absolute top-4 py-0.5 rounded-lg px-2 right-4 bg-card active:bg-onyx-600 focus:bg-onyx-600 text-white outline-none hover:font-medium active:font-medium focus:font-medium"
        onclick={updateLanguage}
      >
        {page.data.lang === "en" ? "EN" : "AF"}
      </button>
    </div>

    <section class="pl-9 pt-12 md:pt-10">
      <h1 class="text-white font-bold text-3xl leading-12">Tertius van Niekerk</h1>
      <p class="text-primary font-medium text-lg leading-8">{t("nav_full_stack_dev")}</p>
      <span class="text-muted flex items-center gap-0.5">
        <Icon name="map-pin" size={20} />
        {t("nav_luxembourg_bound")}
      </span>
    </section>

    <div class="space-y-4 pt-4 px-4 lg:px-0">
      <div
        class="flex items-center gap-2 mb-2 rounded-lg border border-amber-400/40 bg-amber-400/10 px-3 py-2 text-sm text-amber-100 shadow-sm shadow-amber-950/20"
      >
        <span
          ><span class="inline-flex size-2 rounded-full bg-amber-300 shrink-0 animate-pulse mr-1" aria-hidden="true"
          ></span> {t("nav_available_text")}</span
        >
      </div>
      <div class="grid grid-cols-3 gap-2">
        <CardContactMe class="flex flex-col gap-1" href="https://github.com/tertius4">
          <Icon name="github" size={24} />
          <span>GitHub</span>
        </CardContactMe>
        <CardContactMe class="flex flex-col gap-1" href="https://www.linkedin.com/in/tertius-van-niekerk-96a674237/">
          <Icon name="linkedIn" size={24} class="mr-2" />
          <span>LinkedIn</span>
        </CardContactMe>
        <CardContactMe class="flex flex-col gap-1" href="mailto:tertius.vanniekerk@pm.me">
          <Icon name="email" size={24} class="mr-2" />
          <span>Email</span>
        </CardContactMe>
      </div>
      <Link href="/about" class="pt-2">
        <span>{t("nav_more_about_me")}</span>
        <Icon name="chevron-right" size={20} />
      </Link>
    </div>

    <div class="space-y-2 pt-4 px-4 lg:px-0">
      <h2 class="text-white text-h2">
        {t("skills")}
      </h2>

      <div class="flex flex-wrap gap-1.5">
        {#each skills.sort((a, b) => b.level - a.level).slice(0, 15) as skill}
          <Skill data={skill} />
        {/each}
      </div>
      <Link href="/skills">
        <span>{t("nav_read_more")}</span>
        <Icon name="chevron-right" size={20} />
      </Link>
    </div>

    <div class="space-y-2 py-4 px-4 lg:px-0" id="projects">
      <h2 class="text-white text-h2">
        {t("my_projects")}
      </h2>

      <div class="space-y-1">
        {#each projects as project}
          <CardProject data={project} />
        {/each}
      </div>
    </div>
  </SidePanel>

  <Main class="lg:rounded-lg overflow-hidden w-full">
    {@render children()}
  </Main>
  <BottomBar class="bg-surface border-t border-default lg:hidden p-2 overflow-hidden w-full">
    <ButtonBottomBar active={page.url.pathname === "/"}>
      <Icon name="home" size={24} />
      <span>{t("nav_home")}</span>
    </ButtonBottomBar>
    <ButtonBottomBar onclick={goToProjects}>
      <Icon name="user" size={24} />
      <span>{t("nav_my_projects_short")}</span>
    </ButtonBottomBar>
  </BottomBar>
</Container>
