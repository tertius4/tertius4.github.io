<script lang="ts">
  interface Props {
    size?: number;
  }

  const { size = 40 }: Props = $props();
</script>

<img src="/doenit-logo.webp" alt="" width={size} height={size} class="shrink-0 object-contain" />
