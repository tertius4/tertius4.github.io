<script>
  /**
   * @typedef {Object} Props
   * @property {string} name - The name of the icon to display.
   * @property {string | Record<string, boolean>} [class] - Additional CSS classes to apply to the icon.
   * @property {string} [style] - Additional inline styles to apply to the icon.
   * @property {number} [size=28] - The size of the icon in pixels.
   */

  /** @type {Props}*/
  const { name, style, class: className = "", size = 28 } = $props();
</script>

<svg aria-hidden="true" width={size} height={size} class={className} {style}>
  <use href="#{name}" />
</svg>

<svg style="display: none;">
  <symbol id="united-kingdom" viewBox="0 0 640 480">
    <path fill="#012169" d="M0 0h640v480H0z" />
    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z" />
    <path
      fill="#C8102E"
      d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
    />
    <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
    <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
  </symbol>
  <symbol id="south-africa" viewBox="0 0 640 480">
    <defs>
      <clipPath id="za-a">
        <path fill-opacity=".7" d="M-71.9 0h682.7v512H-71.9z" />
      </clipPath>
    </defs>
    <g clip-path="url(#za-a)" transform="translate(67.4)scale(.93748)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#000001" d="M-71.9 407.8V104.4L154 256.1z" />
        <path fill="#000c8a" d="m82.2 512.1 253.6-170.6H696V512H82.2z" />
        <path fill="#e1392d" d="M66 0h630v170.8H335.7S69.3-1.7 66 0" />
        <path fill="#ffb915" d="M-71.9 64v40.4L154 256-72 407.8v40.3l284.5-192z" />
        <path fill="#007847" d="M-71.9 64V0h95l301.2 204h371.8v104.2H324.3L23 512h-94.9v-63.9l284.4-192L-71.8 64z" />
        <path fill="#fff" d="M23 0h59.2l253.6 170.7H696V204H324.3zm0 512.1h59.2l253.6-170.6H696v-33.2H324.3L23 512z" />
      </g>
    </g>
  </symbol>
  <symbol id="germany" viewBox="0 0 640 480">
    <path fill="#fc0" d="M0 320h640v160H0z" />
    <path fill="#000001" d="M0 0h640v160H0z" />
    <path fill="red" d="M0 160h640v160H0z" />
  </symbol>
</svg>
