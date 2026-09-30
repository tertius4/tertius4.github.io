<script>
  import { page } from "$app/state";
  import { t } from "$lib/lang";

  const not_found = $derived(page.status === 404);
</script>

<svelte:head>
  <title>{page.status} – Tertius van Niekerk</title>
  <link rel="icon" href="/page-not-found.webp" />
</svelte:head>

<main class="h-dvh bg-page flex items-center justify-center">
  <div class="max-w-md mx-auto text-center px-6">
    <div class="mb-8">
      <h1 class="text-6xl font-bold text-muted mb-4">{page.status}</h1>
      <h2 class="text-2xl font-semibold text-white mb-4">
        {not_found ? t("error_not_found_title") : t("error_generic_title")}
      </h2>
      <p class="text-muted mb-8">
        {not_found ? t("error_not_found_text") : page.error?.message || t("error_generic_text")}
      </p>
    </div>

    <div class="space-y-4">
      <a
        href="/"
        class="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium"
      >
        {t("error_back_home")}
      </a>

      <div class="text-sm text-muted">{t("error_contact")}</div>
    </div>
  </div>
</main>
