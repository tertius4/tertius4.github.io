<script lang="ts">
  import { links, meta } from "$lib/data/didache";
</script>

<section class="border-b border-default bg-surface px-6 py-16">
  <div class="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
    <div class="min-w-0">
      <div class="mb-6 flex items-center gap-3">
        <img src="/didache-logo.webp" alt="" width="56" height="56" class="size-14" />
        <h1 class="wordmark font-serif text-4xl text-strong md:text-5xl">
          <span class="text-primary">D</span>idache
        </h1>
      </div>

      <p class="mb-3 font-serif text-2xl leading-snug text-strong md:text-3xl">
        Get to know your Bible, a few minutes a day.
      </p>
      <p class="mb-6 text-lg text-muted">
        A short story, then a few questions to help it stay with you. Every answer points you back to the verse.
      </p>

      <ul class="mb-8 flex flex-wrap gap-2" aria-label="Project details">
        {#each meta as item (item)}
          <li class="rounded-full border border-default bg-card px-3 py-1 text-xs text-muted">{item}</li>
        {/each}
      </ul>

      <div class="flex flex-wrap gap-3">
        <a
          href={links.site}
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg bg-primary px-5 py-2.5 font-semibold text-(--didache-on-primary) transition-colors hover:bg-(--didache-primary-hover)"
        >
          Begin the journey
        </a>
        <a
          href={links.feedback}
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg border border-strong bg-card px-5 py-2.5 font-semibold text-normal transition-colors hover:bg-page"
        >
          Send feedback
        </a>
      </div>
    </div>

    <img
      src="/didache-story.webp"
      alt="A mother and daughter read on a tablet at night, with Noah’s ark on the hills behind them"
      width="1200"
      height="900"
      class="min-w-0 rounded-xl border border-default"
    />
  </div>
</section>

<style>
  .wordmark {
    font-variant-caps: small-caps;
    letter-spacing: 0.02em;
  }
</style>
