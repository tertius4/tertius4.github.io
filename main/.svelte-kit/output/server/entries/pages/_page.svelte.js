import { J as attributes, y as attr, z as stringify, G as escape_html, K as clsx, x as head, N as ensure_array_like } from "../../chunks/index.js";
function Avatar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { src, alt, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<div${attributes({
      ...rest,
      class: `rounded-full overflow-hidden shadow-xl ring-4 ring-white ${stringify(rest.class || "")}`
    })}><img${attr("src", src)}${attr("alt", alt)} class="w-full h-full object-cover"/></div>`);
  });
}
function Card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { title, children, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<article${attributes({
      ...rest,
      class: `bg-neutral-100 rounded-xl p-6 ${stringify(rest.class || "")}`
    })}><h3 class="text-2xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">${escape_html(title)}</h3> <div class="text-neutral-700 leading-relaxed">`);
    children($$renderer2);
    $$renderer2.push(`<!----></div></article>`);
  });
}
function ScrollPastTimelineFab($$renderer, $$props) {
  const { label } = $$props;
  $$renderer.push(`<button type="button" class="fixed bottom-6 right-6 z-50 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-neutral-900 shadow-lg ring-1 ring-amber-600/20 transition hover:-translate-y-0.5 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"${attr("aria-label", label)}>${escape_html(label)}</button>`);
}
function Tag($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { children, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<div${attributes({
      ...rest,
      class: clsx([
        "px-3 py-1.5 rounded-full border font-medium text-sm transition-all duration-200 hover:scale-105",
        rest.class
      ])
    })}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
function _page($$renderer) {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Svelte",
    "Node.js",
    "Python",
    "Java",
    "C",
    "MongoDB",
    "Git",
    "REST API"
  ];
  const projects = [
    {
      name: "Doenit",
      description: "An Afrikaans ToDo list app built to be simple, private, and offline-first.",
      logo_src: "/doenit-logo.webp",
      logo_alt: "Doenit Logo",
      tech: ["SvelteKit", "Capacitor", "Firebase"],
      status: "In Development"
    }
  ];
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tertius-van-niekerk-96a674237/",
      icon: "💼"
    },
    {
      name: "GitHub",
      url: "https://github.com/tertius4/doenit",
      icon: "🐙"
    }
  ];
  const lifeTimeline = [
    {
      year: "2020",
      title: "Graduated in Computer Science",
      description: "Completed my Computer Science degree at the University of Stellenbosch.",
      type: "education"
    },
    {
      year: "2021",
      title: "Started My Professional Career",
      description: "Joined my first start-up role and began building production software full-time.",
      type: "career"
    },
    {
      year: "Now",
      title: "Building Products and Growing",
      description: "Focused on practical full stack development while exploring new ideas through side projects.",
      type: "present"
    }
  ];
  head($$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Tertius – Software Developer</title>`);
    });
    $$renderer2.push(`<link rel="icon" href="/tertius_picture.webp"/> <meta name="description" content="Personal website of Tertius, a full stack software developer with South African and German citizenship, open to opportunities across Europe."/> <meta name="keywords" content="full stack developer, web developer, JavaScript, TypeScript, Svelte, Node.js, Europe, Germany, South Africa, multilingual developer"/> <meta property="og:title" content="Tertius – Software Developer"/> <meta property="og:description" content="Full stack developer with South African and German citizenship, available for opportunities with European teams."/> <meta property="og:type" content="website"/>`);
  });
  $$renderer.push(`<main class="min-h-dvh bg-linear-to-br from-neutral-50 to-neutral-300"><section class="container mx-auto px-6 py-16"><div class="max-w-4xl mx-auto"><div class="flex flex-col md:flex-row items-center gap-8"><div class="relative">`);
  Avatar($$renderer, {
    src: "/tertius_picture.webp",
    alt: "Tertius - Full Stack Developer",
    class: "w-48 h-48"
  });
  $$renderer.push(`<!----></div> <div class="text-center md:text-left"><h1 class="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Hi, I'm <span class="text-blue-600">Tertius</span></h1> <p class="text-xl text-neutral-700 mb-6 leading-relaxed">Full stack developer building practical products for international teams, with dual South African and German
            citizenship.</p> <div class="flex flex-wrap justify-center md:justify-start gap-1 sm:gap-2 mb-6">`);
  Tag($$renderer, {
    class: "bg-blue-100 text-blue-800 border-blue-200",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->⛰️ Loves Hiking`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Tag($$renderer, {
    class: "bg-emerald-100 text-emerald-800 border-emerald-200",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->🎸 Guitarist`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Tag($$renderer, {
    class: "bg-orange-100 text-orange-800 border-orange-200",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->🇿🇦 Afrikaans`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div> <div class="flex justify-center md:justify-start gap-2 sm:gap-4"><!--[-->`);
  const each_array = ensure_array_like(socialLinks);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$renderer.push(`<a${attr("href", link.url)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 text-neutral-700 hover:text-blue-600"><span class="text-lg">${escape_html(link.icon)}</span> <span class="font-medium">${escape_html(link.name)}</span></a>`);
  }
  $$renderer.push(`<!--]--></div></div></div></div></section> <section class="bg-white py-16"><div class="container mx-auto px-6"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-bold text-neutral-900 mb-8 text-center">About Me</h2> <div class="grid md:grid-cols-2 gap-6">`);
  Card($$renderer, {
    title: "🎓 Education & Background",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->I graduated with a <strong>Computer Science degree</strong> from the University of Stellenbosch in 2020. Since
            starting my professional journey in 2021, I've worked at start-ups to gain diverse product experience and
            sharpen my delivery skills.`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Card($$renderer, {
    title: "💼 Current Role",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Currently working full-time as a <strong>Full Stack Developer</strong> at an innovative start-up, where I contribute
            to building user-focused solutions while continuously expanding my skill set in fast-paced environments.`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Card($$renderer, {
    title: "🌍 Mobility & Languages",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->I hold <strong>dual citizenship: South African and German</strong>, which means I can work across Europe without
            additional visa sponsorship. I am <strong>fluent in Afrikaans and English</strong>, with <strong>elementary German</strong> proficiency.`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Card($$renderer, {
    title: "🛠️ Technical Skills",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="flex flex-wrap gap-2"><!--[-->`);
      const each_array_1 = ensure_array_like(skills);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let skill = each_array_1[$$index_1];
        Tag($$renderer2, {
          class: "bg-indigo-100 text-indigo-800 border-indigo-200 text-sm",
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->${escape_html(skill)}`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer2.push(`<!--]--></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Card($$renderer, {
    title: "🚀 Passion Projects",
    children: ($$renderer2) => {
      $$renderer2.push(`<p class="text-neutral-700 leading-relaxed">In my free time, I enjoy building simple apps to solve others' problems. I enjoy being challenged by new
              ideas and continuously learning.</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></div></div></section> <section id="life-timeline" class="bg-amber-50 py-16"><div class="container mx-auto px-6"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-bold text-neutral-900 mb-4 text-center">Life Timeline</h2> <p class="text-center text-neutral-600 mb-12">Moments and milestones that shaped my path.</p> <div class="relative"><div class="absolute left-1/2 top-0 bottom-0 w-1 bg-amber-200 -translate-x-1/2 hidden md:block"></div> <div class="space-y-8"><!--[-->`);
  const each_array_2 = ensure_array_like(lifeTimeline);
  for (let index = 0, $$length = each_array_2.length; index < $$length; index++) {
    let event = each_array_2[index];
    $$renderer.push(`<article class="relative"><div class="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-10"><div class="w-4 h-4 rounded-full bg-amber-500 border-4 border-amber-100"></div></div> <div class="md:grid md:grid-cols-2 md:gap-8 items-center">`);
    if (index % 2 === 0) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<div class="md:text-right md:pr-10"><div class="bg-white rounded-xl border border-amber-200 p-6 shadow-sm"><p class="text-sm font-semibold uppercase tracking-wide text-amber-700 mb-2">${escape_html(event.year)}</p> <h3 class="text-xl font-bold text-neutral-900 mb-2">${escape_html(event.title)}</h3> <p class="text-neutral-700 leading-relaxed">${escape_html(event.description)}</p></div></div> <div class="hidden md:block"></div>`);
    } else {
      $$renderer.push("<!--[!-->");
      $$renderer.push(`<div class="hidden md:block"></div> <div class="md:pl-10"><div class="bg-white rounded-xl border border-amber-200 p-6 shadow-sm"><p class="text-sm font-semibold uppercase tracking-wide text-amber-700 mb-2">${escape_html(event.year)}</p> <h3 class="text-xl font-bold text-neutral-900 mb-2">${escape_html(event.title)}</h3> <p class="text-neutral-700 leading-relaxed">${escape_html(event.description)}</p></div></div>`);
    }
    $$renderer.push(`<!--]--></div></article>`);
  }
  $$renderer.push(`<!--]--></div></div></div></div></section> <section id="projects" class="py-16 bg-linear-to-br from-blue-50 to-indigo-50"><div class="container mx-auto px-6"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-bold text-neutral-900 mb-12 text-center">Current Projects</h2> <div class="grid gap-8"><!--[-->`);
  const each_array_3 = ensure_array_like(projects);
  for (let $$index_4 = 0, $$length = each_array_3.length; $$index_4 < $$length; $$index_4++) {
    let project = each_array_3[$$index_4];
    $$renderer.push(`<a href="/doenit" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:bg-neutral-100 transition-all duration-300"><div class="p-8"><div class="flex justify-between items-start mb-4"><h3 class="text-2xl font-bold text-neutral-900 flex gap-2">`);
    Avatar($$renderer, {
      src: project.logo_src,
      alt: project.logo_alt,
      class: "w-8 h-8"
    });
    $$renderer.push(`<!----> ${escape_html(project.name)}</h3> <span class="px-3 py-1 bg-yellow-100 text-yellow-600 border border-yellow-600 rounded-full text-sm font-medium">${escape_html(project.status)}</span></div> <p class="text-neutral-700 mb-6 leading-relaxed">${escape_html(project.description)}</p> <div class="flex flex-wrap gap-2 mb-6"><!--[-->`);
    const each_array_4 = ensure_array_like(project.tech);
    for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
      let tech = each_array_4[$$index_3];
      Tag($$renderer, {
        class: "bg-purple-100 text-purple-800 border-purple-200 text-sm",
        children: ($$renderer2) => {
          $$renderer2.push(`<!---->${escape_html(tech)}`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer.push(`<!--]--></div> <div class="flex justify-end"><div class="inline-flex text-nowrap items-center gap-2 px-3 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"><span>🚀</span> Try it out</div></div></div></a>`);
  }
  $$renderer.push(`<!--]--></div></div></div></section> `);
  ScrollPastTimelineFab($$renderer, {
    label: "Scroll past timeline"
  });
  $$renderer.push(`<!----> <section class="bg-neutral-900 text-white py-16"><div class="container mx-auto px-6"><div class="max-w-4xl mx-auto text-center"><h2 class="text-3xl font-bold mb-8">Let's Connect</h2> <p class="text-xl text-neutral-300 mb-12 leading-relaxed">I'm always interested in discussing new opportunities, receiving feedback, or just having a chat about
          technology and development.</p> <div class="flex flex-wrap justify-center gap-6"><!--[-->`);
  const each_array_5 = ensure_array_like(socialLinks);
  for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
    let link = each_array_5[$$index_5];
    $$renderer.push(`<a${attr("href", link.url)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 px-6 py-4 bg-neutral-800 rounded-xl hover:bg-neutral-700 transition-all duration-200 hover:scale-105 group"><span class="text-2xl group-hover:scale-110 transition-transform duration-200">${escape_html(link.icon)}</span> <span class="font-medium text-lg">${escape_html(link.name)}</span></a>`);
  }
  $$renderer.push(`<!--]--></div></div></div></section></main>`);
}
export {
  _page as default
};
