<script lang="ts">
  import "@fontsource-variable/jetbrains-mono";
  import Link from "$lib/components/Link.svelte";
  import Environments from "$lib/components/styling-console/Environments.svelte";
  import Features from "$lib/components/styling-console/Features.svelte";
  import Hero from "$lib/components/styling-console/Hero.svelte";
  import StyleBuilder from "$lib/components/styling-console/StyleBuilder.svelte";
  import StylesReference from "$lib/components/styling-console/StylesReference.svelte";
  import Usage from "$lib/components/styling-console/Usage.svelte";
  import { links } from "$lib/data/styling-console";

  const site = "https://tertius4.github.io";
  const title = "styling-console – Styled console logging for JavaScript";
  const short_description =
    "A zero-dependency library that adds bold, italic and colours to console output in Node.js and the browser.";
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="icon" href="/styling-console-logo.webp" />
  <meta name="description" content={short_description} />
  <meta
    name="keywords"
    content="styling-console, console, logger, logging, terminal, browser, devtools, colors, ANSI, Node.js, npm"
  />
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:url" content="{site}/styling-console" />
  <meta name="twitter:url" content="{site}/styling-console" />
  <meta property="og:description" content={short_description} />
  <meta name="twitter:description" content={short_description} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:domain" content="tertius4.github.io" />
  <meta property="og:image" content="{site}/styling-console-logo.webp" />
  <meta name="twitter:image" content="{site}/styling-console-logo.webp" />
  <link rel="canonical" href="{site}/styling-console" />
</svelte:head>

<div lang="en" class="styling-console h-full bg-page text-normal w-full overflow-y-auto">
  <Hero />
  <Features />
  <Usage />
  <StyleBuilder />
  <StylesReference />
  <Environments />

  <footer class="border-t border-default px-6 py-8">
    <div class="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
      <span>MIT licensed.</span>
      <Link href={links.github} target="_blank" rel="noopener noreferrer">GitHub</Link>
      <Link href={links.npm} target="_blank" rel="noopener noreferrer">npm</Link>
      <Link href={links.issues} target="_blank" rel="noopener noreferrer">Report an issue</Link>
    </div>
  </footer>
</div>

<style>
  /* Terminal palette and mono font, scoped to this page so the rest of the site keeps its theme. */
  .styling-console {
    --color-neutral-950: #0d1117;
    --color-neutral-900: #161b22;
    --color-neutral-700: #21262d;
    --color-neutral-600: #30363d;
    --color-neutral-500: #6e7681;

    --color-foreground: #e6edf3;
    --color-foreground-400: #ffffff;
    --color-foreground-600: #8b949e;

    --color-primary: #3fb950;

    --font-mono: "JetBrains Mono Variable", ui-monospace, SFMono-Regular, Menlo, monospace;
  }
</style>
