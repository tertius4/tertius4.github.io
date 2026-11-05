import type { TranslationKey } from "$lib/lang";

export const languages: { flag: string; name: TranslationKey; level: TranslationKey }[] = [
  { flag: "united-kingdom", name: "about_english", level: "about_english_level" },
  { flag: "south-africa", name: "about_afrikaans", level: "about_afrikaans_level" },
  { flag: "germany", name: "about_german", level: "about_german_level" },
];

export const locations: { name: TranslationKey; label: TranslationKey }[] = [
  { name: "about_south_africa", label: "about_south_africa_label" },
];

export const hobbies: { name: TranslationKey; description: TranslationKey }[] = [
  { name: "about_reading", description: "about_reading_desc" },
  { name: "about_coding", description: "about_coding_desc" },
  { name: "about_exploring", description: "about_exploring_desc" },
  { name: "about_jogging", description: "about_jogging_desc" },
];

export const education: {
  title: TranslationKey;
  subtitle?: TranslationKey;
  period: TranslationKey;
  paragraphs: TranslationKey[];
  tags?: string[];
}[] = [
  {
    title: "about_self_study",
    subtitle: "about_self_study_subtitle",
    period: "about_self_study_period",
    paragraphs: ["about_self_study_desc"],
  },
  {
    title: "about_university",
    subtitle: "about_university_subtitle",
    period: "about_university_period",
    paragraphs: ["about_university_desc"],
    tags: ["C", "Java"],
  },
  {
    title: "about_gap_year",
    subtitle: "about_gap_year_subtitle",
    period: "about_gap_year_period",
    paragraphs: ["about_gap_year_desc"],
  },
  {
    title: "about_high_school",
    subtitle: "about_high_school_subtitle",
    period: "about_high_school_period",
    paragraphs: ["about_high_school_desc"],
  },
];

export const work_experience: {
  company: TranslationKey;
  period: TranslationKey;
  summary?: TranslationKey;
  points: TranslationKey[];
}[] = [
  {
    company: "about_between_jobs",
    period: "about_between_jobs_period",
    summary: "about_between_jobs_summary",
    points: ["about_between_jobs_li_1", "about_between_jobs_li_2", "about_between_jobs_li_3"],
  },
  {
    company: "about_unaffi",
    period: "about_unaffi_period",
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
    period: "about_gatekeeper_period",
    points: [
      "about_gatekeeper_li_1",
      "about_gatekeeper_li_2",
      "about_gatekeeper_li_3",
      "about_gatekeeper_li_4",
      "about_gatekeeper_li_5",
    ],
  },
];
