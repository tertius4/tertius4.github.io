import "clsx";
import { G as attributes, K as clsx } from "../../../../chunks/index.js";
function CardContainer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<article${attributes({
      ...rest,
      class: clsx([
        "p-2 rounded-lg max-sm:bg-card bg-surface border max-sm:border-strong border-default w-full",
        rest.class || ""
      ])
    })}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></article>`);
  });
}
function _page($$renderer) {
  $$renderer.push(`<main class="text-white w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 max-sm:gap-4 gap-8 h-full max-lg:p-4">`);
  CardContainer($$renderer, {
    class: "sm:col-span-1 xl:col-span-2",
    children: ($$renderer2) => {
      $$renderer2.push(`<h1 class="text-3xl font-medium">Summary</h1> <p>I am John</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  CardContainer($$renderer, {
    class: "sm:row-span-2",
    children: ($$renderer2) => {
      $$renderer2.push(`<h1 class="text-3xl font-medium">Currently, I am:</h1> <p>Look for a new opportunity in the tech industry in Europe.</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  CardContainer($$renderer, {
    class: "sm:col-span-1 xl:col-span-2",
    children: ($$renderer2) => {
      $$renderer2.push(`<h1 class="text-3xl font-medium">Education</h1> <p>I received my bachelors degree at...</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  CardContainer($$renderer, {
    class: "sm:col-span-2 xl:col-span-3",
    children: ($$renderer2) => {
      $$renderer2.push(`<h1 class="text-3xl font-medium">Work Experience</h1> <p>I have worked at two tech companies – both start-ups – for around three years each.</p> <h2>UNAFFI</h2>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></main>`);
}
export {
  _page as default
};
