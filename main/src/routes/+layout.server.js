export async function load({ cookies }) {
  const lang = cookies.get("lang");
  return {
    lang: lang || "en",
  };
}
