import type { TranslationKey } from "$lib/lang";

declare global {
  namespace App {}

  interface Project {
    title: string;
    title_key?: TranslationKey;
    description: TranslationKey;
    status: "in_development" | "improving" | "shelved" | "production";
    image_src?: string;
    tech: string[];
    href?: string;
  }

  interface Skill {
    name: string;
    level: 5 | 4 | 3 | 2 | 1;
    icon: string;
    experience: string;
    years: string;
    description: TranslationKey;
  }
}

export {};
