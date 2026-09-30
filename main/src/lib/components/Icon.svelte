<script lang="ts">
  interface Props {
    name: string;
    class?: string | Record<string, boolean>;
    style?: string;
    size?: number;
  }

  const { name, style, class: className = "", size = 28 }: Props = $props();
</script>

<svg aria-hidden="true" width={size} height={size} class={className} {style}>
  <use href="/icons/sprite.svg#{name}" />
</svg>
