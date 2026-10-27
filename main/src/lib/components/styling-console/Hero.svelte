<script lang="ts">
  import CodeBlock from "$lib/components/CodeBlock.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import TerminalWindow from "$lib/components/TerminalWindow.svelte";
  import StyledLine from "$lib/components/styling-console/StyledLine.svelte";
  import { install_command, links, meta, terminal_demo } from "$lib/data/styling-console";
</script>

<section class="border-b border-default bg-surface px-6 py-16">
  <div class="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
    <div class="min-w-0">
      <div class="mb-6 flex items-center gap-4">
        <img src="/styling-console-logo.webp" alt="" width="56" height="56" class="size-14 rounded-xl" />
        <h1 class="font-mono text-3xl font-bold text-strong md:text-4xl">styling-console</h1>
      </div>

      <p class="mb-4 text-lg">Simple, styled console logging for JavaScript.</p>

      <ul class="mb-8 flex flex-wrap gap-2" aria-label="Package details">
        {#each meta as item (item)}
          <li class="rounded-full border border-default px-3 py-1 font-mono text-xs text-muted">{item}</li>
        {/each}
      </ul>

      <CodeBlock code={install_command} prompt="$" class="mb-6" />

      <div class="flex flex-wrap gap-3">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 rounded-lg border border-default bg-card px-4 py-2 font-semibold text-normal transition-colors hover:bg-neutral-600 hover:border-strong"
        >
          <Icon name="github" size={18} />
          GitHub
        </a>
        <a
          href={links.npm}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 rounded-lg border border-default bg-card px-4 py-2 font-semibold text-normal transition-colors hover:bg-neutral-600 hover:border-strong"
        >
          <Icon name="npm" size={18} />
          npm
        </a>
      </div>
    </div>

    <TerminalWindow title="node server.js" class="min-w-0">
      {#each terminal_demo as line (line.text)}
        <StyledLine {...line} />
      {/each}
    </TerminalWindow>
  </div>
</section>
