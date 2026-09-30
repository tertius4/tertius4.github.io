import type { TranslationKey } from "$lib/lang";

export const languages: { flag: string; name: TranslationKey; level: TranslationKey }[] = [
  { flag: "united-kingdom", name: "about_english", level: "about_english_level" },
  { flag: "south-africa", name: "about_afrikaans", level: "about_afrikaans_level" },
  { flag: "germany", name: "about_german", level: "about_german_level" },
];

export const locations: { name: TranslationKey; label: TranslationKey }[] = [
  { name: "about_south_africa", label: "about_south_africa_label" },
  { name: "about_luxembourg", label: "about_luxembourg_label" },
];

export const hobbies: { name: TranslationKey; description: TranslationKey }[] = [
  { name: "about_reading", description: "about_reading_desc" },
  { name: "about_coding", description: "about_coding_desc" },
  { name: "about_exploring", description: "about_exploring_desc" },
  { name: "about_jogging", description: "about_jogging_desc" },
];

export const education: { title: TranslationKey; paragraphs: TranslationKey[] }[] = [
  { title: "about_university", paragraphs: ["about_university_desc"] },
  { title: "about_high_school", paragraphs: ["about_high_school_desc"] },
  { title: "about_other_education", paragraphs: ["about_other_education_p1", "about_other_education_p2"] },
];

export const work_experience: { company: TranslationKey; points: TranslationKey[] }[] = [
  {
    company: "about_unaffi",
    points: [
      "about_unaffi_li_1",
      "about_unaffi_li_2",
      "about_unaffi_li_3",
      "about_unaffi_li_4",
      "about_unaffi_li_5",
      "about_unaffi_li_6",
    ],
  },
  {
    company: "about_gatekeeper",
    points: [
      "about_gatekeeper_li_1",
      "about_gatekeeper_li_2",
      "about_gatekeeper_li_3",
      "about_gatekeeper_li_4",
      "about_gatekeeper_li_5",
    ],
  },
];
