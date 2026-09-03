import { G as attributes, y as attr, z as stringify, J as clsx, x as head, F as escape_html } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/index2.js";
import "clsx";
function Avatar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { src, alt, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<div${attributes({
      ...rest,
      class: `rounded-lg overflow-hidden shadow-xl ${stringify(rest.class || "")}`
    })}><img${attr("src", src)}${attr("alt", alt)} class="w-full h-full object-cover"/></div>`);
  });
}
function t(key) {
  const lang = page.data.lang || "en";
  return map[lang]?.[key] || map["en"]?.[key];
}
const map = {
  en: {
    intro_sentence: "I'm a software developer who has been building software since 2021, primarily in start-up environments. Outside of work, I build my own projects to sharpen my skills, explore new ideas, and keep learning."
  },
  af: {
    intro_sentence: "Ek is ’n sagteware-ontwikkelaar met ervaring in startups sedert 2021. Buite werk bou ek aan my eie projekte om my vaardighede te slyp, met nuwe idees te eksperimenteer en aan te hou leer."
  }
};
function CoverImage($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { src, alt, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<div${attributes({
      ...rest,
      class: `overflow-hidden ${stringify(rest.class || "")}`
    })}><img${attr("src", src)}${attr("alt", alt)} class="w-full h-full object-cover"/></div>`);
  });
}
function Container($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<div${attributes({
      ...rest,
      class: clsx(["grid grid-cols-[400px_1fr] gap-2 font-sans p-8", rest.class])
    })}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
function Main($$renderer, $$props) {
  const { children } = $$props;
  $$renderer.push(`<div class="flex items-center justify-center">`);
  children($$renderer);
  $$renderer.push(`<!----></div>`);
}
function SidePanel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<div${attributes({
      ...rest,
      class: clsx(["h-full overflow-hidden", rest.class || ""])
    })}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Tertius – Software Developer</title>`);
      });
      $$renderer3.push(`<link rel="icon" href="/tertius_picture.webp"/> <meta name="description" content="Personal website of Tertius, a full stack software developer with South African and German citizenship, open to opportunities across Europe."/> <meta name="keywords" content="full stack developer, web developer, JavaScript, TypeScript, Svelte, Node.js, Europe, Germany, South Africa, multilingual developer"/> <meta property="og:title" content="Tertius – Software Developer"/> <meta property="og:description" content="Full stack developer with South African and German citizenship, available for opportunities with European teams."/> <meta property="og:type" content="website"/>`);
    });
    Container($$renderer2, {
      class: "w-dvw h-dvh",
      children: ($$renderer3) => {
        SidePanel($$renderer3, {
          class: "bg-onyx-900 ring-2 ring-onyx-800 rounded-2xl p-2 space-y-4",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="relative mb-8">`);
            CoverImage($$renderer4, {
              src: "/cover-image.webp",
              alt: "Cover Image",
              class: "w-full h-[200px] rounded-2xl ring-2 ring-onyx-800"
            });
            $$renderer4.push(`<!----> `);
            Avatar($$renderer4, {
              src: "/tertius_picture.webp",
              alt: "Tertius",
              class: "absolute top-20 left-8 transform  size-36 ring-4 ring-onyx-700"
            });
            $$renderer4.push(`<!----> <button class="absolute top-4 right-4 bg-onyx-800 text-white">${escape_html(page.data.lang === "en" ? "EN" : "AF")}</button></div> <section class="p-8 space-y-2"><h1 class="text-white font-medium text-2xl">Tertius van Niekerk</h1> <p class="text-onyx-300">${escape_html(t("intro_sentence"))}</p></section>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Main($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<span class="text-white">Hello, World!</span>`);
          }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
  });
}
export {
  _layout as default
};
