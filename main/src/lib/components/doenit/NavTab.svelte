<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";

  interface Props {
    icon: string;
    label: string;
    active?: boolean;
  }

  const { icon, label, active = false }: Props = $props();
</script>

<span class="flex flex-col items-center gap-1">
  <span class={["inline-flex h-8 w-16 items-center justify-center", active && "rounded-2xl bg-card"]}>
    <Icon name={icon} size={22} />
  </span>
  {label}
</span>
