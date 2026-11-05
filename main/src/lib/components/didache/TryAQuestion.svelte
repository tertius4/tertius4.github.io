<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
  import { demo_questions, links } from "$lib/data/didache";

  let index = $state(0);
  let selected = $state<string | null>(null);

  const question = $derived(demo_questions[index]);
  const answered = $derived(selected !== null);
  const correct = $derived(selected === question.answer);
  const is_last = $derived(index === demo_questions.length - 1);

  function next() {
    index = (index + 1) % demo_questions.length;
    selected = null;
  }

  function optionClass(option: string) {
    if (!answered) return "border-strong bg-card hover:bg-page";
    if (option === question.answer) return "border-success bg-success/10 ring-1 ring-success";
    if (option === selected) return "border-error bg-error/10 ring-1 ring-error";
    return "border-default bg-card opacity-60";
  }
</script>

<PageSection
  id="try-a-question"
  heading="Try a question"
  intro="Three questions from the first lesson, “A Wicked World” (Genesis 6)."
  class="border-y border-default bg-surface"
>
  <div class="mx-auto max-w-xl rounded-xl border border-default bg-card p-6">
    <div class="mb-4 flex items-center justify-between text-sm text-muted">
      <span>{question.label}</span>
      <span>{index + 1} / {demo_questions.length}</span>
    </div>

    <p class="mb-6 border-l-2 border-strong py-1 pl-4 font-serif text-2xl leading-snug text-strong italic">
      {#if question.prompt.includes("___")}
        {@const [before, after] = question.prompt.split("___")}
        {before}<span class="inline-block min-w-16 border-b-2 border-strong text-center not-italic"
          >{answered ? question.answer : " "}</span
        >{after}
      {:else}
        {question.prompt}
      {/if}
    </p>

    <div class={["grid gap-3", question.options.length === 2 ? "grid-cols-2" : "sm:grid-cols-2"]}>
      {#each question.options as option (option)}
        <button
          type="button"
          class={[
            "rounded-lg border px-4 py-3 text-normal transition-colors disabled:cursor-default",
            question.options.length === 2 ? "text-center font-serif text-xl" : "text-left font-medium",
            optionClass(option),
          ]}
          disabled={answered}
          aria-pressed={option === selected}
          onclick={() => (selected = option)}
        >
          {option}
        </button>
      {/each}
    </div>

    <div aria-live="polite">
      {#if answered}
        <div class={["mt-6 rounded-lg border p-4", correct ? "border-success" : "border-error"]}>
          <p class={["mb-2 font-semibold", correct ? "text-success" : "text-error"]}>
            {correct ? "Correct" : `Not quite. The answer is “${question.answer}”.`}
          </p>
          {#if question.explanation}
            <p class="mb-3 text-sm text-muted">{question.explanation}</p>
          {/if}
          <blockquote class="font-serif text-lg leading-snug text-normal">
            “{question.verse.text}”
            <footer class="mt-1 font-sans text-sm text-muted not-italic">{question.verse.ref} (ESV)</footer>
          </blockquote>
        </div>

        <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            class="rounded-lg bg-primary px-4 py-2 font-semibold text-(--didache-on-primary) transition-colors hover:bg-(--didache-primary-hover)"
            onclick={next}
          >
            {is_last ? "Start again" : "Next question"}
          </button>
          <Link href={links.first_lesson} target="_blank" rel="noopener noreferrer">
            <span>Do the full lesson</span>
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      {/if}
    </div>
  </div>
</PageSection>
