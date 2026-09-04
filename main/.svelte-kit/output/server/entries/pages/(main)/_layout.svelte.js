import { G as attributes, y as attr, z as stringify, F as escape_html, J as clsx, K as attr_class, x as head, N as ensure_array_like } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/index2.js";
const skills = [
  { name: "JavaScript", level: 4 },
  { name: "TypeScript", level: 4 },
  { name: "Svelte", level: 4 },
  { name: "React", level: 3 },
  { name: "Node.js", level: 4 },
  { name: "Express.js", level: 4 },
  { name: "MongoDB", level: 3 },
  { name: "PostgreSQL", level: 3 },
  { name: "HTML5", level: 5 },
  { name: "CSS3", level: 5 },
  { name: "Tailwind CSS", level: 4 },
  { name: "Git", level: 4 },
  { name: "Docker", level: 3 },
  { name: "AWS", level: 2 }
];
const projects = [
  {
    title: "Doenit",
    description: "An Afrikaans ToDo list app built to be simple, private, and offline-first.",
    image_src: "/doenit-logo.webp",
    tech: ["SvelteKit", "Capacitor", "Firebase"],
    status: "in_development",
    href: "/doenit"
  },
  {
    title: "Vinkel Of Koljander",
    description: "A website I created for my family to share recipes",
    image_src: "/vinkel-of-koljander-logo.webp",
    tech: ["SvelteKit", "Firebase"],
    status: "improving"
  },
  {
    title: "My Wedding website",
    description: "A website I built for my wedding for guests to RSVP, find basic information and handle the gift registry.",
    image_src: "/trou-webwerf-logo.webp",
    tech: ["Vue.js"],
    status: "production"
  },
  {
    title: "Tradesmith",
    description: "A project to automatically trade cryptocurrency based on a set of rules and strategies.",
    image_src: "/tradesmith-logo.png",
    tech: ["Vue.js", "Binance API", "Luno API"],
    status: "shelved"
  },
  {
    title: "Console Colours",
    description: "A small library to add colour to console output in Node.js.",
    tech: ["Node.js", "Typescript"],
    status: "shelved"
  },
  {
    title: "Woorde Wenk",
    description: "A simple word game built for Afrikaans learners to practice their vocabulary.",
    tech: ["Firebase", "WhatsApp API"]
  }
];
function Avatar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { src, alt, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<div${attributes({
      ...rest,
      class: `rounded-lg overflow-hidden shadow-xl ${stringify(rest.class || "")}`
    })}><img${attr("src", src)}${attr("alt", alt)} class="w-full h-full object-cover"/></div>`);
  });
}
function CardProject($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { data, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<a${attr("href", data.href)} class="block"><article class="p-2 grid grid-cols-[auto_1fr_auto] gap-2"><div><img${attr("src", data.image_src)}${attr("alt", data.title)} class="size-12 object-cover rounded-lg"/></div> <div><h3 class="text-white font-medium text-lg">${escape_html(data.title)}</h3> <p class="text-gray-400 text-sm line-clamp-1">${escape_html(data.description)}</p></div> <div>`);
    if (data.status === "in_development") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="bg-yellow-500 text-black text-xs font-medium px-2 py-1 rounded-full">In Development</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (data.status === "shelved") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="bg-gray-500 text-white text-xs font-medium px-2 py-1 rounded-full">Shelved</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (data.status === "production") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">Production</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (data.status === "improving") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<span class="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">Improving</span>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></article></a>`);
  });
}
function t(key) {
  const lang = page.data.lang || "en";
  return map[lang]?.[key] || map["en"]?.[key] || "";
}
const map = {
  en: {
    intro_sentence: "I'm a Software Developer who has been building software since 2021, primarily in start-up environments. Outside of work, I build my own projects to sharpen my skills, explore new ideas, and keep learning.",
    skills: "Skills",
    my_projects: "My Projects"
  },
  af: {
    intro_sentence: "Ek is ’n Software Developer met ervaring in startups sedert 2021. Buite werk bou ek aan my eie projekte om my vaardighede te slyp, met nuwe idees te eksperimenteer en aan te hou leer.",
    skills: "Vaardighede",
    my_projects: "My Projekte"
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
function Heading2($$renderer, $$props) {
  const { children, $$slots, $$events, ...rest } = $$props;
  $$renderer.push(`<h2${attributes({ ...rest, class: "text-white font-medium text-lg" })}>`);
  children($$renderer);
  $$renderer.push(`<!----></h2>`);
}
function Container($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<div${attributes({
      ...rest,
      class: clsx(["grid grid-cols-[400px_1fr] gap-8 font-sans p-8", rest.class])
    })}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
function Main($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<div${attributes({
      ...rest,
      class: clsx(["flex items-center justify-center", rest.class || ""])
    })}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
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
function Skill($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { skill } = $$props;
    $$renderer2.push(`<div${attr_class(clsx({
      "text-white px-2 py-1 rounded": true,
      "bg-onyx-500": skill.level === 5,
      "bg-onyx-600": skill.level === 4,
      "bg-onyx-700": skill.level === 3,
      "bg-onyx-800": skill.level === 2,
      "bg-onyx-900": skill.level === 1
    }))}>${escape_html(skill.name)}</div>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children } = $$props;
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
          class: "bg-onyx-900 ring-2 ring-onyx-800 rounded-2xl p-2 space-y-4 flex flex-col",
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
            $$renderer4.push(`<!----> <button class="absolute top-4 right-4 bg-onyx-800 text-white">${escape_html(page.data.lang === "en" ? "EN" : "AF")}</button></div> <section class="p-8 space-y-4 overflow-y-auto grow"><div class="space-y-2"><h1 class="text-white font-medium text-2xl">Tertius van Niekerk</h1> <p class="text-onyx-300">${escape_html(t("intro_sentence"))}</p></div> <div class="space-y-2">`);
            Heading2($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(t("skills"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <div class="flex flex-wrap gap-1"><!--[-->`);
            const each_array = ensure_array_like(skills.sort((a, b) => b.level - a.level));
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let skill = each_array[$$index];
              Skill($$renderer4, { skill });
            }
            $$renderer4.push(`<!--]--></div></div> <div class="space-y-2">`);
            Heading2($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(t("my_projects"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <div class="space-y-1"><!--[-->`);
            const each_array_1 = ensure_array_like(projects);
            for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
              let project = each_array_1[$$index_1];
              CardProject($$renderer4, { data: project });
            }
            $$renderer4.push(`<!--]--></div></div></section>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Main($$renderer3, {
          class: "rounded-lg overflow-hidden ring-2 ring-onyx-800",
          children: ($$renderer4) => {
            children($$renderer4);
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
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
