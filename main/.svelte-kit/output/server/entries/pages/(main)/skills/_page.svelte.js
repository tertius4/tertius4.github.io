import { G as attributes, K as clsx, F as escape_html, J as attr_class, N as ensure_array_like } from "../../../../chunks/index.js";
import { I as Icon, s as skills } from "../../../../chunks/Icon.js";
function CardSkill($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { data, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<article${attributes({
      ...rest,
      class: clsx([
        "bg-card border border-default p-4 rounded-lg h-full w-full",
        rest.class || ""
      ])
    })}><div class="flex items-center gap-2">`);
    Icon($$renderer2, { name: data.icon, class: "size-8" });
    $$renderer2.push(`<!----> <span class="font-medium text-xl">${escape_html(data.name)}</span></div> <div class="bg-neutral-900 text-foreground-700 w-full rounded font-mono py-0.5 px-2 mt-4">${escape_html(data.experience)} ● ${escape_html(data.years)}</div> <p class="text-foreground-400 mt-1">${escape_html(data.description)}</p></article>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let search = "";
    const filtered_skills = skills.filter(filterSkills);
    function filterSkills(skill) {
      return skill.name.toLowerCase().includes(search.toLowerCase());
    }
    $$renderer2.push(`<div class="text-white w-full p-4 overflow-y-auto mb-auto"><div class="flex gap-2 justify-between w-full items-center mb-4"><h2 class="text-2xl font-bold">Skills</h2> <div class="relative"><input type="text" placeholder="Search skills..." class="bg-surface border border-default lg:w-80 w-fit rounded-lg p-2 pr-12 text-white outline-none focus:ring active:ring ring-neutral-300 transition-colors"/> <div${attr_class(clsx({
      "pointer-events-none absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-md border border-default bg-card px-1.5 py-0.5 text-xs font-medium font-mono uppercase text-neutral-300 transition-opacity": true
    }))}><span>Ctrl</span> <span class="text-muted">+</span> <span>K</span></div></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"><!--[-->`);
    const each_array = ensure_array_like(filtered_skills);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let skill = each_array[$$index];
      $$renderer2.push(`<div>`);
      CardSkill($$renderer2, { data: skill });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
export {
  _page as default
};
