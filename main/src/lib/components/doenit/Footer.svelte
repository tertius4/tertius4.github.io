<script lang="ts">
  import { footer_links, footer_social, footer_support } from "$lib/data/doenit";
  import FooterLinks from "./FooterLinks.svelte";
  import Wordmark from "./Wordmark.svelte";
</script>

<footer class="border-t border-default">
  <div class="mx-auto grid w-full max-w-6xl gap-8 px-6 pt-12 pb-16 text-[15px] text-muted md:grid-cols-4 lg:px-8">
    <div class="flex flex-col gap-4 md:col-span-2">
      <Wordmark size={32} class="gap-2.5 text-[22px]" />
      <FooterLinks links={footer_social} row />
    </div>
    <FooterLinks title="Skakels" links={footer_links} />
    <FooterLinks title="Ondersteuning" links={footer_support} />
  </div>
</footer>
