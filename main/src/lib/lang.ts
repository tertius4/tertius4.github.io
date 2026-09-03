import { page } from "$app/state";

export default function t(key: keyof (typeof map)["en"]): string {
  const lang: "en" | "af" = page.data.lang || "en";
  return map[lang]?.[key] || map["en"]?.[key] || "";
}

const map = {
  en: {
    intro_sentence:
      "I'm a Software Developer who has been building software since 2021, primarily in start-up environments. Outside of work, I build my own projects to sharpen my skills, explore new ideas, and keep learning.",
    skills: "Skills",
    my_projects: "My Projects",
  },
  af: {
    intro_sentence:
      "Ek is ’n Software Developer met ervaring in startups sedert 2021. Buite werk bou ek aan my eie projekte om my vaardighede te slyp, met nuwe idees te eksperimenteer en aan te hou leer.",
    skills: "Vaardighede",
    my_projects: "My Projekte",
  },
};
