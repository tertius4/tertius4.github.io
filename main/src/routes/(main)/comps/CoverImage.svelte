<script lang="ts">
  interface Props {
    src: string;
    alt: string;
  }

  const { src, alt, ...rest }: Props & Record<string, any> = $props();
</script>

<div {...rest} class="overflow-hidden  {rest.class || ''}">
  <img {src} {alt} class="w-full h-full object-cover" />
</div>