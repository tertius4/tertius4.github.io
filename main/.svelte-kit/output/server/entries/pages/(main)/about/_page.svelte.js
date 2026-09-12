import { G as attributes, K as clsx, F as escape_html } from "../../../../chunks/index.js";
import "clsx";
import { t } from "../../../../chunks/lang.js";
function CardContainer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<article${attributes({
      ...rest,
      class: clsx([
        "p-4 rounded-lg max-sm:bg-card bg-surface border max-sm:border-strong border-default w-full",
        rest.class || ""
      ])
    })}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></article>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<main class="text-white w-full grid overflow-y-auto grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 max-sm:gap-4 gap-8 h-full max-lg:p-4">`);
    CardContainer($$renderer2, {
      class: "sm:col-span-1 xl:col-span-2",
      children: ($$renderer3) => {
        $$renderer3.push(`<h1 class="text-white text-h1">Introduction</h1> <p class="text-muted my-2">${escape_html(t("intro_sentence"))}</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    CardContainer($$renderer2, {
      class: "sm:row-span-3",
      children: ($$renderer3) => {
        $$renderer3.push(`<h1 class="text-white text-h1">Summary</h1> <ul class="list-disc list-inside"><li><strong>Languages:</strong> English, Dutch</li> <li><strong>Date of Birth:</strong> January 1, 1990</li> <li><strong>Location:</strong> Europe</li> <li><strong>Availability:</strong> Immediate</li> <li><strong>References:</strong> Available upon request</li> <li><strong>Hobbies:</strong> Reading, Coding, Traveling</li></ul>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    CardContainer($$renderer2, {
      class: "sm:col-span-1 xl:col-span-2 sm:row-span-2",
      children: ($$renderer3) => {
        $$renderer3.push(`<h1 class="text-white text-h1">Education</h1> <div class="grid xl:grid-cols-1 gap-4"><div><h3 class="text-white text-h3">University</h3> <p>Details about university education...</p></div> <div><h3 class="text-white text-h3">High School</h3> <p>Details about high school education...</p></div> <div><h3 class="text-white text-h3">Other Education</h3> <p>Details about other education...</p></div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    CardContainer($$renderer2, {
      class: "sm:col-span-2 xl:col-span-3 xl:row-span-2",
      children: ($$renderer3) => {
        $$renderer3.push(`<h1 class="text-white text-h1">Work Experience</h1> <div class="grid xl:grid-cols-2 gap-4"><div><h3 class="text-white text-h3">UNAFFI</h3> <p>At UNAFFI, I was responsible for...</p></div> <div><h3 class="text-white text-h3">Gatekeeper</h3> <p>At GateKeeper, I was responsible for...</p></div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></main>`);
  });
}
export {
  _page as default
};
