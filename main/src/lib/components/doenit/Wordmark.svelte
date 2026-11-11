<script lang="ts">
  import Logo from "./Logo.svelte";

  interface Props {
    size?: number;
    class?: string;
  }

  const { size = 40, class: className = "" }: Props = $props();
</script>

<span class={["flex items-center font-bold text-strong", className]}>
  <Logo {size} />
  <span>Doenit<span class="text-(--accent)">.</span></span>
</span>
