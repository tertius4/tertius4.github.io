import "@sveltejs/kit";
const prerender = true;
const csr = true;
async function load({ url }) {
  return { lang: "en" };
}
export {
  csr,
  load,
  prerender
};
