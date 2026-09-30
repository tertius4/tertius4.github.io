<script lang="ts">
  import Avatar from "$lib/components/Avatar.svelte";
  import ButtonBottomBar from "$lib/components/ButtonBottomBar.svelte";
  import CardContactMe from "$lib/components/CardContactMe.svelte";
  import CardProject from "$lib/components/CardProject.svelte";
  import CoverImage from "$lib/components/CoverImage.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import BottomBar from "$lib/components/layout/BottomBar.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import SidePanel from "$lib/components/layout/SidePanel.svelte";
  import Link from "$lib/components/Link.svelte";
  import Skill from "$lib/components/Skill.svelte";
  import { projects, top_skills } from "$lib/data";
  import { revealEmail } from "$lib/email";
  import { language, t, toggleLanguage } from "$lib/lang";
  import { goToHome, goToProjects, is_home } from "$lib/navigation";
  import { sidebar_scroll } from "$lib/scroll.svelte";

  const { children } = $props();

  const on_home = $derived(is_home());
  const is_scrolled_past_projects = $derived(on_home && sidebar_scroll.past_projects);
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
  <meta property="og:url" content="https://tertius4.github.io/" />
  <meta property="og:image" content="https://tertius4.github.io/tertius-pic-square.webp" />
  <meta name="twitter:card" content="summary" />
  <link rel="canonical" href="https://tertius4.github.io/" />
</svelte:head>

<Container class="w-dvw h-dvh overflow-hidden">
  <SidePanel
    class={{
      "grow w-full": true,
      "lg:flex flex-col max-lg:hidden ring-2 ring-neutral-800 rounded-2xl space-y-4": !on_home,
      "max-lg:h-full flex flex-col": on_home,
    }}
  >
    <div class="relative">
      <CoverImage src="/cover-image.webp" alt="" class="w-full h-[200px] lg:rounded-2xl lg:border-2 border-default" />
      <Avatar
        src="/tertius-pic-square.webp"
        alt="Tertius"
        class="absolute bottom-0 -mb-8 left-6 lg:left-8 transform size-36 border-2 border-default"
      />

      <button
        type="button"
        aria-label={t("switch_language")}
        class="absolute top-4 py-0.5 rounded-lg px-2 right-4 bg-card active:bg-neutral-600 focus:bg-neutral-600 text-white outline-none hover:font-medium active:font-medium focus:font-medium cursor-pointer"
        onclick={toggleLanguage}
      >
        {language.current.toUpperCase()}
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
          ></span>
          {t("nav_available_text")}</span
        >
      </div>
      <div class="grid grid-cols-3 gap-2">
        <CardContactMe class="flex flex-col gap-1" href="https://github.com/tertius4">
          <Icon name="github" size={24} />
          <span>GitHub</span>
        </CardContactMe>
        <CardContactMe class="flex flex-col gap-1" href="https://www.linkedin.com/in/tertius6/">
          <Icon name="linkedIn" size={24} class="mr-2" />
          <span>LinkedIn</span>
        </CardContactMe>
        <CardContactMe class="flex flex-col gap-1" href="mailto:" {@attach revealEmail("personal")}>
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
        {#each top_skills as skill (skill.name)}
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
        {#each projects as project (project.title || project.title_key)}
          <CardProject data={project} />
        {/each}
      </div>
    </div>
  </SidePanel>

  <Main class="lg:rounded-lg overflow-hidden w-full">
    {@render children()}
  </Main>
  <BottomBar class="bg-surface border-t border-default lg:hidden p-2 overflow-hidden w-full">
    <ButtonBottomBar onclick={goToHome} active={on_home && !is_scrolled_past_projects}>
      <Icon name="home" size={24} />
      <span>{t("nav_home")}</span>
    </ButtonBottomBar>
    <ButtonBottomBar onclick={goToProjects} active={is_scrolled_past_projects}>
      <Icon name="user" size={24} />
      <span>{t("nav_my_projects_short")}</span>
    </ButtonBottomBar>
  </BottomBar>
</Container>
