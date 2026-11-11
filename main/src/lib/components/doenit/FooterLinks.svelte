<script lang="ts">
  import type { FooterLink } from "$lib/data/doenit";
  import { revealEmail } from "$lib/email";

  interface Props {
    links: FooterLink[];
    title?: string;
    /** Lay the links out in a wrapping row instead of a list. */
    row?: boolean;
  }

  const { links, title, row = false }: Props = $props();

  const link_class = "transition-colors hover:text-primary";
</script>

<div>
  {#if title}
    <h3 class="mb-4 font-semibold text-strong">{title}</h3>
  {/if}
  <ul class={row ? "flex flex-wrap gap-x-5 gap-y-2" : "space-y-2"}>
    {#each links as link (link.label)}
      <li>
        {#if "email" in link}
          <a href="mailto:" {@attach revealEmail("doenit_support", link.subject)} class={link_class}>{link.label}</a>
        {:else}
          <a href={link.href} target="_blank" rel="noopener noreferrer" class={link_class}>{link.label}</a>
        {/if}
      </li>
    {/each}
  </ul>
</div>
