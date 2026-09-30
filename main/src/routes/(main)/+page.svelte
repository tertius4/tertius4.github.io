<script lang="ts">
  import { goto } from "$app/navigation";

  /** The placeholder is only visible on desktop; when it shows up, send the visitor to /about. */
  function redirectWhenVisible(node: HTMLElement) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) void goto("/about", { replaceState: true });
    });
    observer.observe(node);
    return () => observer.disconnect();
  }
</script>

<span class="text-white" {@attach redirectWhenVisible}>Loading…</span>
