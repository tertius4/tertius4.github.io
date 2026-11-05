<script lang="ts">
  import "@fontsource-variable/eb-garamond";
  import Link from "$lib/components/Link.svelte";
  import Features from "$lib/components/didache/Features.svelte";
  import Hero from "$lib/components/didache/Hero.svelte";
  import HowItWorks from "$lib/components/didache/HowItWorks.svelte";
  import Progress from "$lib/components/didache/Progress.svelte";
  import TryAQuestion from "$lib/components/didache/TryAQuestion.svelte";
  import UnderTheHood from "$lib/components/didache/UnderTheHood.svelte";
  import { esv_notice, links } from "$lib/data/didache";

  const site = "https://tertius4.github.io";
  const title = "Didache – Get to know your Bible";
  const short_description =
    "Didache helps you get to know your Bible: a short story, then a few questions, each tied to the verse. A few minutes a day, no account needed.";
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="icon" href="/didache-logo.webp" />
  <meta name="description" content={short_description} />
  <meta
    name="keywords"
    content="Didache, Bible learning app, Bible stories, Bible quiz, Scripture memory, Noah and the Flood, Genesis, ESV, daily Bible lessons, Christian education, SvelteKit, Tailwind CSS, Capacitor"
  />
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:url" content="{site}/didache" />
  <meta name="twitter:url" content="{site}/didache" />
  <meta property="og:description" content={short_description} />
  <meta name="twitter:description" content={short_description} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:domain" content="tertius4.github.io" />
  <meta property="og:image" content="{site}/didache-story.webp" />
  <meta name="twitter:image" content="{site}/didache-story.webp" />
  <link rel="canonical" href="{site}/didache" />
</svelte:head>

<div lang="en" class="didache h-full bg-page text-normal w-full overflow-y-auto">
  <Hero />
  <HowItWorks />
  <TryAQuestion />
  <Features />
  <Progress />
  <UnderTheHood />

  <footer class="border-t border-default px-6 py-8">
    <div class="mx-auto max-w-5xl space-y-4">
      <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <Link href={links.site} target="_blank" rel="noopener noreferrer">didache.co.za</Link>
        <Link href={links.about} target="_blank" rel="noopener noreferrer">About and privacy</Link>
        <Link href={links.feedback} target="_blank" rel="noopener noreferrer">Send feedback</Link>
      </div>
      <p class="max-w-3xl text-xs text-muted">{esv_notice}</p>
    </div>
  </footer>
</div>

<style>
  /* Didache's parchment palette and type, scoped to this page so the rest of the site keeps its theme. */
  .didache {
    --color-neutral-950: #eae4df;
    --color-neutral-900: #f5f2f0;
    --color-neutral-700: #faf8f7;
    --color-neutral-600: #d5c9be;
    --color-neutral-500: #b9a592;

    --color-foreground: #1e150b;
    --color-foreground-400: #1e150b;
    --color-foreground-600: #66492c;

    --color-primary: #2f4f7a;
    --color-success: #5e6b3a;
    --color-warning: #c27c1e;
    --color-error: #9e2b1f;

    --didache-primary-hover: #203f69;
    --didache-on-primary: #f5f2f0;
    --didache-gold: #b88a2e;
    /* Darker gold for text, so it passes contrast on the light surfaces. */
    --didache-gold-text: #8a6420;

    --font-serif: "EB Garamond Variable", ui-serif, Georgia, serif;
    --font-sans: "Inter Variable", ui-sans-serif, system-ui, sans-serif;

    color-scheme: light;
  }

  .didache :global(h2) {
    font-family: var(--font-serif);
  }
</style>
