import { G as getContext, x as head, J as escape_html } from "../../chunks/index.js";
import "clsx";
import { n as noop } from "../../chunks/equality.js";
import "@sveltejs/kit/internal/server";
import "@sveltejs/kit/internal";
import { w as writable } from "../../chunks/exports.js";
import "../../chunks/utils.js";
function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    data: {},
    form: null,
    error: null,
    params: {},
    route: { id: null },
    state: {},
    status: -1,
    url: new URL("https://example.com")
  });
}
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Oops! Page Not Found - Tertius</title>`);
      });
      $$renderer3.push(`<link rel="icon" href="/page-not-found.webp"/>`);
    });
    $$renderer2.push(`<main class="h-dvh bg-linear-to-br from-neutral-50 to-neutral-200 flex items-center justify-center"><div class="max-w-md mx-auto text-center px-6"><div class="mb-8"><h1 class="text-6xl font-bold text-neutral-400 mb-4">${escape_html(page.status || "404")}</h1> <h2 class="text-2xl font-semibold text-neutral-900 mb-4">`);
    if (page.status === 404) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`Page Not Found`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`Something went wrong`);
    }
    $$renderer2.push(`<!--]--></h2> <p class="text-neutral-600 mb-8">`);
    if (page.status === 404) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`The page you're looking for doesn't exist or has been moved.`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`${escape_html(page.error?.message || "An unexpected error occurred.")}`);
    }
    $$renderer2.push(`<!--]--></p></div> <div class="space-y-4"><a href="/" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">← Back to Home</a> <div class="text-sm text-neutral-500">or contact me if you think this is an error</div></div></div></main>`);
  });
}
export {
  _error as default
};
