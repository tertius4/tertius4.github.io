<script lang="ts">
  import Wordmark from "./Wordmark.svelte";

  function scrollToDownload(event: MouseEvent) {
    event.preventDefault();
    document.getElementById("laai-af")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
</script>

<header class="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-7 lg:px-8">
  <Wordmark size={40} class="gap-3 text-[28px] tracking-tight" />
  <a
    href="#laai-af"
    onclick={scrollToDownload}
    class="inline-flex min-h-11 items-center rounded-full border border-strong px-5.5 text-[15px] font-medium text-strong transition-opacity hover:opacity-85"
  >
    Laai af
  </a>
</header>
