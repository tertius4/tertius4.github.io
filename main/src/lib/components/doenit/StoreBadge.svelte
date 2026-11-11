<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";

  interface Props {
    href: string;
    top: string;
    name: string;
    icon: string;
  }

  const { href, top, name, icon }: Props = $props();
</script>

<a
  {href}
  target="_blank"
  rel="noopener noreferrer"
  class="inline-flex min-h-14 items-center gap-3 rounded-xl border border-[#a6a6a6] bg-black py-0 pr-5 pl-4 text-white transition-opacity hover:opacity-85"
>
  <Icon name={icon} size={28} />
  <span class="flex flex-col leading-tight">
    <span class="text-[11px] tracking-wide">{top}</span>
    <span class="text-[22px] font-medium tracking-tight">{name}</span>
  </span>
</a>
