import "clsx";
function CardContainer($$renderer, $$props) {
  const { children } = $$props;
  $$renderer.push(`<article class="p-2 rounded-lg bg-surface border border-default w-full">`);
  children($$renderer);
  $$renderer.push(`<!----></article>`);
}
function _page($$renderer) {
  $$renderer.push(`<main class="text-white w-full h-full flex flex-col gap-7">`);
  CardContainer($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<h1 class="text-3xl font-medium">Summary</h1> <p>I am John</p> <h1 class="text-3xl font-medium">Currently, I am:</h1> <p>Look for a new opportunity in the tech industry in Europe.</p>`);
    }
  });
  $$renderer.push(`<!----> `);
  CardContainer($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<h1 class="text-3xl font-medium">Education</h1> <p>I received my bachelors degree at...</p>`);
    }
  });
  $$renderer.push(`<!----> `);
  CardContainer($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<h1 class="text-3xl font-medium">Work Experience</h1> <p>I have worked at two tech companies – both start-ups – for around three years each.</p> <h2>UNAFFI</h2>`);
    }
  });
  $$renderer.push(`<!----></main>`);
}
export {
  _page as default
};
