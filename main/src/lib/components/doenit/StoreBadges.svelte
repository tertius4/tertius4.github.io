<script lang="ts">
  import { links } from "$lib/data/doenit";
  import StoreBadge from "./StoreBadge.svelte";
</script>

<div class="flex flex-wrap gap-3">
  <StoreBadge href={links.app_store} top="Laai af op die" name="App Store" icon="app-store-ios" />
  <StoreBadge href={links.play} top="Kry dit op" name="Google Play" icon="google-play" />
  <StoreBadge href={links.web} top="Maak oop op die" name="Web" icon="globe" />
</div>
