/** Addresses are base64-encoded so scrapers reading the static HTML/JS don't find them. */
export const emails = {
  personal: "dGVydGl1cy52YW5uaWVrZXJrQHBtLm1l",
  doenit_support: "ZG9lbml0YXBwQGdtYWlsLmNvbQ==",
} as const;

/** Attachment: sets the real mailto: link once the page runs in a browser. */
export function revealEmail(key: keyof typeof emails, subject?: string) {
  return (node: HTMLAnchorElement) => {
    const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
    node.href = `mailto:${atob(emails[key])}${query}`;
  };
}
