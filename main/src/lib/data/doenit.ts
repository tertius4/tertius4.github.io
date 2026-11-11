export const links = {
  play: "https://play.google.com/store/apps/details?id=doenit.app",
  app_store: "https://apps.apple.com/us/app/doenit-app/id6783408047",
  web: "https://doenit.org",
  reddit: "https://www.reddit.com/r/Doenit/",
  x: "https://x.com/Tertius39",
  github: "https://github.com/tertius4/doenit",
} as const;

export type Category = "Afsprake" | "Higiëne" | "Onderhoud";

export interface DemoTask {
  title: string;
  category: Category;
  /** Shown beside the card on the page, not in the app itself. */
  repeat: string;
  /** Days from today: negative is overdue, 0 is today. Dates are worked out in the browser so they never go stale. */
  in_days: number;
}

export const categories: Category[] = ["Afsprake", "Higiëne", "Onderhoud"];

/** Sample tasks for the category filter: things that come back every few weeks or months. */
export const demo_tasks: DemoTask[] = [
  { title: "Aircon skoonmaak", category: "Onderhoud", repeat: "Elke jaar", in_days: -8 },
  { title: "Waterfilter omruil", category: "Onderhoud", repeat: "Elke 3 maande", in_days: 0 },
  { title: "Beddegoed was", category: "Higiëne", repeat: "Elke 2 weke", in_days: 0 },
  { title: "Naels knip", category: "Higiëne", repeat: "Elke week", in_days: 7 },
  { title: "Hare laat sny", category: "Afsprake", repeat: "Elke 6 weke", in_days: 21 },
  { title: "Tandarts", category: "Afsprake", repeat: "Elke 6 maande", in_days: 23 },
  { title: "Tandeborsel vervang", category: "Higiëne", repeat: "Elke 3 maande", in_days: 51 },
  { title: "Oogtoets", category: "Afsprake", repeat: "Elke 2 jaar", in_days: 70 },
  { title: "Motor se diens", category: "Onderhoud", repeat: "Elke jaar", in_days: 95 },
];

/** The tasks drawn inside the app screen in the hero. */
export const hero_titles = ["Lugversorger skoonmaak", "Waterfilter omruil", "Beddegoed was", "Tandarts"];

export const repeat_options = ["Elke dag", "Elke week", "Elke maand", "Elke 3 maande", "Elke jaar"];
export const repeat_selected = "Elke 3 maande";

export const groups_demo = [
  { name: "Familie", members: "Jy, Elsie", tasks: 10 },
  { name: "Die Kantoor", members: "Jy, Gert, Anne-Marie", tasks: 32 },
];

export const testimonials = [
  { name: "Franco", color: "bg-primary", text: "Hou baie daarvan!" },
  { name: "Werner", color: "bg-(--accent)", text: "Uitstekend toep, dit is verbruikers vriendelike en werk goed." },
  { name: "Heike", color: "bg-success", text: "Baie lekker om so n toepassing in afrikaans te kan hê. Baie gebruikersvriendelik." },
] as const;

export type Status = "late" | "today" | "later";

export function statusOf(task: DemoTask): Status {
  if (task.in_days < 0) return "late";
  if (task.in_days === 0) return "today";
  return "later";
}

// Full class names so Tailwind can see them.
export const card_classes: Record<Status, string> = {
  late: "bg-(--late-card)",
  today: "bg-(--today-card)",
  later: "bg-surface",
};
export const chip_classes: Record<Status, string> = {
  late: "bg-(--late-chip)",
  today: "bg-(--today-chip)",
  later: "bg-card",
};

export type FooterLink = { label: string; href: string } | { label: string; email: true; subject?: string };

export const footer_social: FooterLink[] = [
  { label: "GitHub", href: links.github },
  { label: "Reddit", href: links.reddit },
  { label: "X", href: links.x },
];

export const footer_links: FooterLink[] = [
  { label: "Google Play", href: links.play },
  { label: "Web", href: links.web },
  { label: "Bron-kode", href: links.github },
  { label: "Gemeenskap", href: links.reddit },
];

export const footer_support: FooterLink[] = [
  { label: "Hulp & FAQ", href: links.reddit },
  { label: "Kontak my", email: true },
  { label: "Rapporteer 'n probleem", email: true, subject: "Doenit Rapporteer 'n Probleem" },
];
