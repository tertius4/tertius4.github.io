<script>
  import { onMount } from "svelte";
  import ConsentBanner from "$lib/components/ConsentBanner.svelte";
  import { initAnalytics } from "$lib/analytics.svelte";
  import { initLanguage } from "$lib/lang";
  import "../app.css";

  const { children } = $props();

  onMount(() => {
    initLanguage();
    initAnalytics();
  });
</script>

{@render children()}
<ConsentBanner />
