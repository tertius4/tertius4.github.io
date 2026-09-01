<script>
  const { timeline_id, target_id, label } = $props();

  function scrollPastTimeline() {
    console.log("timeline_id", timeline_id);
    console.log("target_id", target_id);
    const timeline = document.getElementById(timeline_id);
    const target = document.getElementById(target_id);
    console.log("timeline:", timeline);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "end" });
      return;
    }

    if (timeline) {
      const top = timeline.offsetTop + timeline.offsetHeight + 24;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
</script>

<button
  type="button"
  onclick={scrollPastTimeline}
  class="fixed bottom-6 right-6 z-50 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-neutral-900 shadow-lg ring-1 ring-amber-600/20 transition hover:-translate-y-0.5 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
  aria-label={label}
>
  {label}
</button>
