import { G as attributes, y as attr, z as stringify, J as attr_class, F as escape_html, K as clsx, x as head, N as ensure_array_like } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/index2.js";
import { I as Icon, s as skills, p as projects } from "../../../chunks/Icon.js";
import { t } from "../../../chunks/lang.js";
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
    $$renderer2.push(`<a${attributes({
      ...rest,
      href: data.href,
      class: clsx([
        {
          "block outline-none rounded-lg transition-colors": true,
          "focus:bg-neutral-700 hover:bg-neutral-700": !!data.href
        },
        rest.class || ""
      ])
    })}><article${attr_class(`p-2 ${stringify(data.image_src ? "grid gap-2 grid-cols-[auto_1fr]" : "")}`)}><div${attr("hidden", !data.image_src)}><img${attr("src", data.image_src)}${attr("alt", data.title)} class="size-12 object-cover rounded-lg"/></div> <div class="w-full space-y-1"><div class="flex flex-row justify-between"><h3 class="text-white font-medium">${escape_html(data.title)}</h3> <div>`);
    if (data.status === "in_development") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="bg-primary-800 text-normal text-xs font-medium px-2 py-1 rounded-full">In Development</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (data.status === "shelved") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="bg-primary-900 text-muted text-xs font-medium px-2 py-1 rounded-full">Shelved</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (data.status === "production") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="bg-primary-800 text-normal text-xs font-medium px-2 py-1 rounded-full">Production</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (data.status === "improving") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<span class="bg-primary-800 text-normal text-xs font-medium px-2 py-1 rounded-full">Improving</span>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div> <p class="text-gray-400 text-sm">${escape_html(data.description)}</p></div></article></a>`);
  });
}
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
      class: clsx([
        "grid lg:grid-cols-[400px_1fr] max-lg:grid-rows-[1fr_80px] lg:gap-8 font-sans lg:p-8 overflow-hidden bg-page",
        rest.class
      ])
    })}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
function Main($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children, $$slots, $$events, ...rest } = $$props;
    const is_home = page.url.pathname === "/";
    $$renderer2.push(`<main${attributes({
      ...rest,
      class: clsx([
        {
          "flex flex-col items-center justify-center": true,
          "max-lg:hidden": is_home
        },
        rest.class || ""
      ])
    })}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></main>`);
  });
}
function SidePanel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<aside${attributes({
      ...rest,
      class: clsx([
        "h-full lg:p-4 overflow-hidden bg-surface border border-default",
        rest.class || ""
      ])
    })}><div class="overflow-y-auto scrollbar-none">`);
    children($$renderer2);
    $$renderer2.push(`<!----></div></aside>`);
  });
}
function Skill($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { data, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<div${attributes({
      ...rest,
      class: clsx([
        {
          "text-normal px-2 py-1 rounded": true,
          "bg-neutral-500 font-medium": data.level === 5,
          "bg-neutral-600": data.level === 4,
          "bg-neutral-700": data.level === 3,
          "bg-neutral-800": data.level === 2,
          "bg-neutral-900": data.level === 1
        },
        rest.class || ""
      ])
    })}>${escape_html(data.name)}</div>`);
  });
}
function Link($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children, href, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<a${attributes({
      ...rest,
      href,
      class: clsx([
        "text-primary font-medium flex items-center gap-1 leading-none border-b border-transparent hover:border-primary active:border-primary focus:border-primary w-fit outline-none transition-[border]",
        rest.class || ""
      ])
    })}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></a>`);
  });
}
function BottomBar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<nav${attributes({
      ...rest,
      class: clsx([
        "fixed bottom-0 left-0 right-0 w-full flex justify-center items-center",
        rest.class
      ])
    })}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></nav>`);
  });
}
function ButtonBottomBar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children, active = false, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<a${attributes({
      ...rest,
      href: "/",
      class: clsx([
        {
          "flex flex-col items-center justify-center p-2 rounded-lg w-[120px]": true,
          "text-normal bg-card border border-default": active,
          "text-muted": !active
        },
        rest.class || ""
      ])
    })}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></a>`);
  });
}
function CardContactMe($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<a${attributes({
      ...rest,
      class: clsx([
        "rounded-lg flex items-center justify-center bg-card-hover p-2 text-normal font-semibold font-mono",
        rest.class || ""
      ])
    })}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></a>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children } = $$props;
    function goToProjects(event) {
      event.preventDefault();
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      location.href = "/#projects";
    }
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Tertius – Software Developer</title>`);
      });
      $$renderer3.push(`<link rel="icon" href="/tertius-pic-square.webp"/> <meta name="description" content="Personal website of Tertius, a full stack software developer with South African and German citizenship, open to opportunities across Europe."/> <meta name="keywords" content="full stack developer, web developer, JavaScript, TypeScript, Svelte, Node.js, Europe, Germany, South Africa, multilingual developer"/> <meta property="og:title" content="Tertius – Software Developer"/> <meta property="og:description" content="Full stack developer with South African and German citizenship, available for opportunities with European teams."/> <meta property="og:type" content="website"/>`);
    });
    Container($$renderer2, {
      class: "w-dvw h-dvh overflow-hidden",
      children: ($$renderer3) => {
        SidePanel($$renderer3, {
          class: {
            "grow w-full": true,
            "lg:flex flex-col max-lg:hidden bg-onyx-850 ring-2 ring-onyx-800 rounded-2xl space-y-4": !page.data.is_home,
            "max-lg:h-full flex flex-col": page.data.is_home
          },
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="relative">`);
            CoverImage($$renderer4, {
              src: "/cover-image.webp",
              alt: "Cover Image",
              class: "w-full h-[200px] lg:rounded-2xl lg:border-2 border-default"
            });
            $$renderer4.push(`<!----> `);
            Avatar($$renderer4, {
              src: "/tertius-pic-square.webp",
              alt: "Tertius",
              class: "absolute bottom-0 -mb-8 left-6 lg:left-8 transform size-36 border-2 border-default"
            });
            $$renderer4.push(`<!----> <button class="absolute top-4 py-0.5 rounded-lg px-2 right-4 bg-card active:bg-onyx-600 focus:bg-onyx-600 text-white outline-none hover:font-medium active:font-medium focus:font-medium">${escape_html(page.data.lang === "en" ? "EN" : "AF")}</button></div> <section class="pl-9 pt-12 md:pt-10"><h1 class="text-white font-bold text-3xl leading-12">Tertius van Niekerk</h1> <p class="text-primary font-medium text-lg leading-8">Full-Stack Software Developer</p> <span class="text-muted flex items-center gap-0.5">`);
            Icon($$renderer4, { name: "map-pin", size: 20 });
            $$renderer4.push(`<!----> Luxembourg Bound • From South Africa</span></section> <div class="space-y-4 pt-4 px-4 lg:px-0"><div class="flex items-center gap-2 mb-2 rounded-lg border border-amber-400/40 bg-amber-400/10 px-3 py-2 text-sm text-amber-100 shadow-sm shadow-amber-950/20"><span><span class="inline-flex size-2 rounded-full bg-amber-300 shrink-0 animate-pulse mr-1" aria-hidden="true"></span> Available &amp; actively seeking full-time developer opportunities in the Luxembourg or German tech industry.</span></div> <div class="grid grid-cols-3 gap-2">`);
            CardContactMe($$renderer4, {
              class: "flex flex-col gap-1",
              href: "https://github.com/tertius4",
              children: ($$renderer5) => {
                Icon($$renderer5, { name: "github", size: 24 });
                $$renderer5.push(`<!----> <span>GitHub</span>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            CardContactMe($$renderer4, {
              class: "flex flex-col gap-1",
              href: "https://www.linkedin.com/in/tertius-van-niekerk-96a674237/",
              children: ($$renderer5) => {
                Icon($$renderer5, { name: "linkedIn", size: 24, class: "mr-2" });
                $$renderer5.push(`<!----> <span>LinkedIn</span>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            CardContactMe($$renderer4, {
              class: "flex flex-col gap-1",
              href: "mailto:tertius.vanniekerk@pm.me",
              children: ($$renderer5) => {
                Icon($$renderer5, { name: "email", size: 24, class: "mr-2" });
                $$renderer5.push(`<!----> <span>Email</span>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> `);
            Link($$renderer4, {
              href: "/about",
              class: "pt-2",
              children: ($$renderer5) => {
                $$renderer5.push(`<span>More about me</span> `);
                Icon($$renderer5, { name: "chevron-right", size: 20 });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> <div class="space-y-2 pt-4 px-4 lg:px-0"><h2 class="text-white text-h2">${escape_html(t("skills"))}</h2> <div class="flex flex-wrap gap-1.5"><!--[-->`);
            const each_array = ensure_array_like(skills.sort((a, b) => b.level - a.level));
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let skill = each_array[$$index];
              Skill($$renderer4, { data: skill });
            }
            $$renderer4.push(`<!--]--></div> `);
            Link($$renderer4, {
              href: "/skills",
              children: ($$renderer5) => {
                $$renderer5.push(`<span>Read more detailed</span> `);
                Icon($$renderer5, { name: "chevron-right", size: 20 });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> <div class="space-y-2 py-4 px-4 lg:px-0" id="projects"><h2 class="text-white text-h2">${escape_html(t("my_projects"))}</h2> <div class="space-y-1"><!--[-->`);
            const each_array_1 = ensure_array_like(projects);
            for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
              let project = each_array_1[$$index_1];
              CardProject($$renderer4, { data: project });
            }
            $$renderer4.push(`<!--]--></div></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Main($$renderer3, {
          class: "lg:rounded-lg overflow-hidden w-full",
          children: ($$renderer4) => {
            children($$renderer4);
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        BottomBar($$renderer3, {
          class: "bg-surface border-t border-default lg:hidden p-2 overflow-hidden w-full",
          children: ($$renderer4) => {
            ButtonBottomBar($$renderer4, {
              active: page.url.pathname === "/",
              children: ($$renderer5) => {
                Icon($$renderer5, { name: "home", size: 24 });
                $$renderer5.push(`<!----> <span>Home</span>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            ButtonBottomBar($$renderer4, {
              onclick: goToProjects,
              children: ($$renderer5) => {
                Icon($$renderer5, { name: "user", size: 24 });
                $$renderer5.push(`<!----> <span>My Projects</span>`);
              },
              $$slots: { default: true }
            });
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
