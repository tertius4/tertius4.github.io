<script lang="ts">
  import CodeBlock from "$lib/components/CodeBlock.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
  import TerminalWindow from "$lib/components/TerminalWindow.svelte";
  import StyleOption from "$lib/components/styling-console/StyleOption.svelte";
  import StyledLine from "$lib/components/styling-console/StyledLine.svelte";
  import { methods } from "$lib/data/styling-console";
  import type { Color, LogMethod, LogStyle } from "styling-console/logger";

  let method = $state<LogMethod>("log");
  let message = $state("Hello from styling-console");
  let bold = $state(true);
  let italic = $state(false);
  let color = $state<Color | undefined>("cyan");
  let background = $state<Color | undefined>();
  let logged = $state(false);

  const toggle_class = "h-10 rounded-md border px-5 font-mono text-sm transition-colors";
  const toggle_on = "border-primary text-normal";
  const toggle_off = "border-default text-muted hover:bg-neutral-600 hover:text-normal hover:border-strong";

  const style = $derived.by(() => {
    const result: LogStyle = {};
    if (bold) result.bold = true;
    if (italic) result.italic = true;
    if (color) result.color = color;
    if (background) result.background = background;
    return result;
  });

  const code = $derived.by(() => {
    const options = Object.entries(style).map(([key, value]) =>
      typeof value === "string" ? `${key}: "${value}"` : `${key}: ${value}`,
    );
    const style_call = options.length ? `.style({ ${options.join(", ")} })` : "";
    return `import logger from "styling-console/logger";\n\nlogger${style_call}.${method}(${JSON.stringify(message)});`;
  });

  async function logToDevTools() {
    // Loaded on demand so prerendering never runs the library.
    const { default: logger } = await import("styling-console/logger");
    logger.style(style)[method](message);
    logged = true;
  }
</script>

<PageSection id="try-it" heading="Try it" intro="Pick a style and see the output and the code that produces it.">
  <div class="grid gap-6 lg:grid-cols-2">
    <div class="flex min-w-0 flex-col gap-5 rounded-xl border border-default bg-card p-5">
      <div class="grid gap-4 sm:grid-cols-[auto_1fr]">
        <label class="flex flex-col gap-2 text-sm font-medium text-strong">
          Method
          <select
            bind:value={method}
            class="h-9 rounded-md border border-default bg-surface px-2 font-mono text-sm text-normal outline-none transition-colors hover:border-strong focus:border-primary"
          >
            {#each methods as name (name)}
              <option value={name}>{name}</option>
            {/each}
          </select>
        </label>
        <label class="flex min-w-0 flex-col gap-2 text-sm font-medium text-strong">
          Message
          <input
            bind:value={message}
            class="h-9 rounded-md border border-default bg-surface px-2 font-mono text-sm text-normal outline-none transition-colors hover:border-strong focus:border-primary"
          />
        </label>
      </div>

      <fieldset>
        <legend class="mb-2 text-sm font-medium text-strong">Text</legend>
        <div class="flex gap-2">
          <button
            type="button"
            aria-pressed={bold}
            onclick={() => (bold = !bold)}
            class={[toggle_class, bold ? toggle_on : toggle_off, "font-bold"]}
          >
            bold
          </button>
          <button
            type="button"
            aria-pressed={italic}
            onclick={() => (italic = !italic)}
            class={[toggle_class, italic ? toggle_on : toggle_off, "italic"]}
          >
            italic
          </button>
        </div>
      </fieldset>

      <StyleOption label="Color" bind:value={color} />
      <StyleOption label="Background" bind:value={background} />
    </div>

    <div class="flex min-w-0 flex-col gap-4">
      <TerminalWindow title="output">
        <StyledLine {method} {style} text={message} />
      </TerminalWindow>

      <CodeBlock {code} title="app.js" />

      <div class="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onclick={logToDevTools}
          class="rounded-lg bg-primary px-4 py-2 font-semibold text-neutral-950 transition-colors hover:bg-primary/85"
        >
          Log to DevTools
        </button>
        {#if logged}
          <span class="text-sm text-muted" role="status">Logged. Open your browser console to see it.</span>
        {/if}
      </div>
    </div>
  </div>
</PageSection>
