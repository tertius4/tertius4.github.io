<script lang="ts">
  import { analytics, acceptAnalytics, declineAnalytics } from "$lib/analytics.svelte";
  import { t } from "$lib/lang";
</script>

{#if analytics.consent === "unknown"}
  <div
    role="dialog"
    aria-label={t("consent_text")}
    class="fixed bottom-24 lg:bottom-6 left-4 right-4 lg:left-auto lg:right-6 lg:max-w-sm z-50 rounded-xl border border-default bg-card p-4 text-sm text-normal shadow-xl"
  >
    <p>{t("consent_text")}</p>
    <div class="mt-3 flex gap-2 justify-end">
      <button type="button" class="rounded-lg px-3 py-1 text-muted cursor-pointer" onclick={declineAnalytics}>
        {t("consent_decline")}
      </button>
      <button
        type="button"
        class="rounded-lg bg-primary px-3 py-1 font-medium text-white cursor-pointer"
        onclick={acceptAnalytics}
      >
        {t("consent_accept")}
      </button>
    </div>
  </div>
{/if}
