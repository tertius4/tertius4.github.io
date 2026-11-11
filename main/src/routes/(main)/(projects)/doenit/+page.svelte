<script lang="ts">
  import "@fontsource/ubuntu/400.css";
  import "@fontsource/ubuntu/500.css";
  import "@fontsource/ubuntu/700.css";
  import { onMount } from "svelte";
  import Categories from "$lib/components/doenit/Categories.svelte";
  import Download from "$lib/components/doenit/Download.svelte";
  import Footer from "$lib/components/doenit/Footer.svelte";
  import Groups from "$lib/components/doenit/Groups.svelte";
  import Header from "$lib/components/doenit/Header.svelte";
  import Hero from "$lib/components/doenit/Hero.svelte";
  import HowItWorks from "$lib/components/doenit/HowItWorks.svelte";
  import Testimonials from "$lib/components/doenit/Testimonials.svelte";
  import Trust from "$lib/components/doenit/Trust.svelte";
  import { clock } from "$lib/data/doenit-date.svelte";

  const site = "https://tertius4.github.io";
  const title = "Doenit – Afrikaanse Taaklys-toep/ToDo app";
  const short_description =
    "Doenit is 'n Afrikaanse taaklys-app vir Android, iOS en die web. Herhalende take, kategorieë en herinneringe. Werk sonder internet; sinkronisering en deel met ander is opsioneel.";

  onMount(() => {
    clock.now = Date.now();
  });
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="icon" href="/doenit-logo.webp" />
  <meta name="description" content={short_description} />
  <meta
    name="keywords"
    content="Doenit, Afrikaanse taaklys, taaklys-app, Afrikaans to-do app, to-do lys, herhalende take, herinneringe, Android widget, Afrikaans task manager, deel take, vanlyn taaklys, Suid-Afrikaanse app"
  />
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:url" content="{site}/doenit" />
  <meta name="twitter:url" content="{site}/doenit" />
  <meta property="og:description" content={short_description} />
  <meta name="twitter:description" content={short_description} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:domain" content="tertius4.github.io" />
  <meta property="og:image" content="{site}/doenit-og.png" />
  <meta property="og:image:width" content="512" />
  <meta property="og:image:height" content="512" />
  <meta property="og:image:type" content="image/png" />
  <meta name="twitter:image" content="{site}/doenit-og.png" />
  <link rel="canonical" href="{site}/doenit" />
</svelte:head>

<div lang="af" class="doenit h-full w-full overflow-y-auto bg-page text-[17px] text-normal">
  <Header />
  <main>
    <Hero />
    <HowItWorks />
    <Groups />
    <Categories />
    <Trust />
    <Testimonials />
    <Download />
  </main>
  <Footer />
</div>

<style>
  /* Doenit's own palette, taken from the app's dark theme. Scoped to this page so the rest of the site keeps its theme. */
  .doenit {
    --color-neutral-950: #1e1e24;
    --color-neutral-900: #26262b;
    --color-neutral-700: #3d3d48;
    --color-neutral-600: #4a4a57;
    --color-neutral-500: #6f6f7c;

    --color-foreground: #e0e0e0;
    --color-foreground-400: #fcfcfc;
    --color-foreground-600: #adadad;

    --color-primary: #2f97c1;
    --color-success: #1b9859;
    --color-error: #e05252;

    --accent: #f26419;
    --late-card: #4a252d;
    --late-chip: #a23b45;
    --today-card: #1f3a30;
    --today-chip: #2b6c46;
    --later-card: #31313a;

    font-family: "Roboto", "Ubuntu", ui-sans-serif, system-ui, sans-serif;
  }
</style>
