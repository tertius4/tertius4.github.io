import config from "./config";

const STORAGE_KEY = "analytics_consent";

/** "pending" until storage was read after hydration; "unknown" means the visitor still has to choose. */
type Consent = "pending" | "unknown" | "granted" | "denied";

export const analytics = $state<{ consent: Consent }>({ consent: "pending" });

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

function loadGtag(id: string) {
  window.dataLayer = window.dataLayer || [];
  function gtag(..._args: unknown[]) {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", id);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}

/** Starts analytics only when an analytics ID is configured and the visitor has agreed. */
export function initAnalytics() {
  let saved: string | null = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch {
    // Storage unavailable: treat as no decision.
  }

  analytics.consent = saved === "granted" || saved === "denied" ? saved : "unknown";
  if (analytics.consent === "granted" && config.google_analytics_id) loadGtag(config.google_analytics_id);
}

export function setConsent(granted: boolean) {
  try {
    localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
  } catch {
    // Ignore: the choice just isn't remembered.
  }

  analytics.consent = granted ? "granted" : "denied";
  if (granted && config.google_analytics_id) loadGtag(config.google_analytics_id);
}

export const acceptAnalytics = () => setConsent(true);
export const declineAnalytics = () => setConsent(false);
