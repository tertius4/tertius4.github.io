import { x as head, y as attr, z as stringify } from "../../chunks/index.js";
import { p as public_env } from "../../chunks/shared-server.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
const config = {
  google_analytics_id: public_env.PUBLIC_ANALYTICS_ID
};
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children } = $$props;
    head($$renderer2, ($$renderer3) => {
      $$renderer3.push(`<meta charset="utf-8"/> <script async${attr("src", `https://www.googletagmanager.com/gtag/js?id=${stringify(config.google_analytics_id)}`)}><\/script> ${html(`
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", ${JSON.stringify(config.google_analytics_id)});
  <\/script>
  `)} <meta name="viewport" content="width=device-width, initial-scale=1"/> <link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>`);
    });
    children($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
