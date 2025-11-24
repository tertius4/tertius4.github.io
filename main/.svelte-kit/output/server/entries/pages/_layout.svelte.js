import { x as head, y as slot, z as attr, F as stringify } from "../../chunks/index.js";
const PUBLIC_ANALYTICS_ID = "G-EV7ES0K1L6";
function _layout($$renderer, $$props) {
  head($$renderer, ($$renderer2) => {
    $$renderer2.push(`<meta charset="utf-8"/> <script async${attr("src", `https://www.googletagmanager.com/gtag/js?id=${stringify(PUBLIC_ANALYTICS_ID)}`)}><\/script> <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", PUBLIC_ANALYTICS_ID);
  <\/script> <meta name="viewport" content="width=device-width, initial-scale=1"/> <link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>`);
  });
  $$renderer.push(`<div class="font-sans antialiased"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div>`);
}
export {
  _layout as default
};
