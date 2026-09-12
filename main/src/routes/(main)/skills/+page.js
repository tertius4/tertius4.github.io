export async function load({ url, depends }) {
  depends("page:skills");

  const search = url.searchParams.get("search") || "";

  return {
    search,
  };
}
