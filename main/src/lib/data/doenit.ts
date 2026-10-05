export const links = {
  play: "https://play.google.com/store/apps/details?id=doenit.app",
  reddit: "https://www.reddit.com/r/Doenit/",
  x: "https://x.com/Tertius39",
  github: "https://github.com/tertius4/doenit",
  ios_waiting_list:
    "https://docs.google.com/forms/d/e/1FAIpQLSd95Q-fA4WIjmwKEbcjSOrzDqoYAE5Y3O_djThffA6-aBo10w/viewform?usp=header",
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
    text: "Doenit laat jou saamwerk aan take met vriende en familie. Bou saam aan doelwitte!",
  },
] as const;

/** Tailwind needs the full class names to be present in the source. */
export const tone_classes = {
  primary: { bg: "bg-primary/20 group-hover:bg-primary/30", text: "text-primary", border: "border-primary/50" },
  success: { bg: "bg-success/20 group-hover:bg-success/30", text: "text-success", border: "border-success/50" },
  warning: { bg: "bg-warning/20 group-hover:bg-warning/30", text: "text-warning", border: "border-warning/50" },
  error: { bg: "bg-error/20 group-hover:bg-error/30", text: "text-error", border: "border-error/50" },
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

export const footer_social = [
  { label: "💻 GitHub", href: links.github },
  { label: "💬 Reddit", href: links.reddit },
  { label: "🐦 Twitter", href: links.x },
];

export const footer_links = [
  { label: "Google Play", href: links.play },
  { label: "Bron-kode", href: links.github },
  { label: "Gemeenskap", href: links.reddit },
];

export const footer_support = [
  { label: "Hulp & FAQ", href: links.reddit },
  { label: "Kontak my", email: true },
  { label: "Rapporteer 'n probleem", email: true, subject: "Doenit Rapporteer 'n Probleem" },
] as const;
