export const links = {
  play: "https://play.google.com/store/apps/details?id=doenit.app",
  reddit: "https://www.reddit.com/r/Doenit/",
  x: "https://x.com/Tertius39",
  github: "https://github.com/tertius4/doenit",
  ios_waiting_list:
    "https://docs.google.com/forms/d/e/1FAIpQLSd95Q-fA4WIjmwKEbcjSOrzDqoYAE5Y3O_djThffA6-aBo10w/viewform?usp=header",
  support_email: "doenitapp@gmail.com",
};

export const stats = [
  { value: "100%", label: "Afrikaans" },
  { value: "R 0", label: "Gratis" },
  { value: "🔒", label: "Vanlyn (offline)" },
  { value: "🇿🇦", label: "Suid-Afrika" },
];

export const features = [
  {
    icon: "🕒",
    tone: "primary",
    title: "Herhalende take",
    text: "Stel herinnerings op vir enige tydsinterval — maandliks, weekliks of selfs elke tweede Donderdag. Perfek vir roetines.",
  },
  {
    icon: "🔒",
    tone: "success",
    title: "Vanlyn & veilig",
    text: "Jou data bly op jou toestel, geënkripteer. Geen internet nodig nie, en jy bepaal of jy rugsteun wil hê.",
  },
  {
    icon: "🧩",
    tone: "warning",
    title: "Maklike kategorieë",
    text: "Hou werk, huis en familie take apart met eenvoudige groepering en duidelike kleur-etikette.",
  },
  {
    icon: "🎨",
    tone: "primary",
    title: "Lig of donker tema",
    text: "Pas Doenit aan by jou styl — automaties volgens jou toestel se instelling, of kies self.",
  },
  {
    icon: "📱",
    tone: "error",
    title: "Tuisskerm-widgets",
    text: "Sien jou belangrike take direk op jou tuisskerm sonder om die app oop te maak.",
  },
  {
    icon: "👥",
    tone: "primary",
    title: "Deel met vriende",
    text: "Doenit Plus sal jou laat saamwerk aan take met vriende en familie. Bou saam aan doelwitte!",
    badge: "Binnekort 🔥",
  },
] as const;

/** Tailwind needs the full class names to be present in the source. */
export const tone_classes = {
  primary: { bg: "bg-primary/20 group-hover:bg-primary/30", text: "text-primary" },
  success: { bg: "bg-success/20 group-hover:bg-success/30", text: "text-success" },
  warning: { bg: "bg-warning/20 group-hover:bg-warning/30", text: "text-warning" },
  error: { bg: "bg-error/20 group-hover:bg-error/30", text: "text-error" },
} as const;

export const screenshots = [
  { src: "/tuisblad.webp", alt: "Doenit tuisblad skerm", title: "Tuisblad", text: "Jou hele dag in een oogopslag" },
  { src: "/wysig-taak.webp", alt: "Wysig taak skerm", title: "Wysig take", text: "Stel alles presies reg" },
  { src: "/instellings.webp", alt: "Doenit instellings skerm", title: "Instellings", text: "Maak dit jou eie" },
];

export const testimonials = [
  { name: "Franco", tone: "primary", text: "Hou baie daarvan!" },
  { name: "Werner", tone: "success", text: "Uitstekend toep, dit is verbruikers vriendelike en werk goed." },
  {
    name: "Heike",
    tone: "error",
    text: "Baie lekker om so n toepassing in afrikaans te kan hê. Baie gebruikersvriendelik.",
  },
] as const;

type Segment = string | { text: string; href?: string; bold?: boolean };

export const faqs: { question: string; answer: Segment[] }[] = [
  {
    question: "Is Doenit werklik gratis?",
    answer: [
      "Ja! Doenit se kernfunksies is 100% gratis - take, kategorieë, herinnerings, widgets, alles. Ons het wel 'n ",
      { text: "Doenit Plus", bold: true },
      " subskripsie wat binnekort premium funksies soos vriende-deling en outomatiese rugsteun sal bied.",
    ],
  },
  {
    question: "Hoe veilig is my data?",
    answer: [
      "Jou data bly op jou toestel en word plaaslik geënkripteer. Ons stoor niks op ons bedieners nie, tensy jy spesifiek rugsteun aktiveer. Selfs dan word alles geënkripteer voordat dit jou toestel verlaat.",
    ],
  },
  {
    question: "Wanneer kom Doenit na iOS?",
    answer: [
      "Ons wil graag Doenit na iOS bring, maar die Apple Developer Program kos R1600 per jaar. As die Android-weergawe genoeg ondersteuning kry, sal ons daardie koste kan regverdig. Hou r/Doenit dop vir nuutste verwikkelinge!",
    ],
  },
  {
    question: "Kan ek Engels ook gebruik?",
    answer: [
      "Absoluut! Doenit ondersteun beide Afrikaans en Engels volledig. Jy kan maklik tussen die tale skakel in die instellings-skerm.",
    ],
  },
  {
    question: "Hoe kan ek help met ontwikkeling?",
    answer: [
      "Doenit is oopbron! Jy kan bydra op ",
      { text: "GitHub", href: links.github },
      ", deel jou idees op ",
      { text: "r/Doenit", href: links.reddit },
      ", of help ander gebruikers. Elke bietjie hulp tel!",
    ],
  },
];

export const footer_social = [
  { label: "💻 GitHub", href: links.github },
  { label: "💬 Reddit", href: links.reddit },
  { label: "🐦 Twitter", href: links.x },
];

export const footer_links = [
  { label: "Google Play", href: links.play },
  { label: "Brondekode", href: links.github },
  { label: "Gemeenskap", href: links.reddit },
];

export const footer_support = [
  { label: "Hulp & FAQ", href: links.reddit },
  { label: "Kontak my", href: `mailto:${links.support_email}` },
  { label: "Rapporteer 'n probleem", href: `mailto:${links.support_email}?subject=Doenit%20Rapporteer%20n%20Probleem` },
];
