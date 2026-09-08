declare global {
  namespace App {}

  interface Project {
    title: string;
    description: string;
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
    description: string;
  }
}

export {};
