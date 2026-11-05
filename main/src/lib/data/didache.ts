export const links = {
  site: "https://didache.co.za",
  first_lesson: "https://didache.co.za/learn/bible-stories/noah/a-wicked-world",
  about: "https://didache.co.za/about",
  feedback: "https://didache.co.za/feedback",
};

export const meta = ["Test version", "Web app", "English", "No account needed"];

export const steps = [
  { title: "Watch or read the story", text: "A short video, or illustrated story cards, one per scene." },
  { title: "Answer a few questions", text: "About ten quick questions, each with its verse." },
  { title: "Unlock the next lesson", text: "Move one stop further along the journey." },
];

export const features = [
  {
    title: "Story first",
    text: "Each lesson opens with the Bible story, as a short video or illustrated story cards.",
  },
  {
    title: "Rooted in Scripture",
    text: "Every answer shows the ESV verse it comes from, so you can check it for yourself.",
  },
  {
    title: "Five question types",
    text: "Multiple choice, fill in the blank, true or false, put events in order, and match pairs.",
  },
  {
    title: "A journey to follow",
    text: "Lessons unlock in order along a winding map of Bible stories.",
  },
  {
    title: "No account needed",
    text: "Progress is saved on your device. Open the site and start.",
  },
  {
    title: "Private by design",
    text: "Usage statistics are anonymous and cookieless. Your email is used only if you join the waitlist.",
  },
] as const;

export interface Verse {
  ref: string;
  text: string;
}

export interface DemoQuestion {
  label: string;
  prompt: string;
  options: string[];
  answer: string;
  verse: Verse;
  explanation?: string;
}

const gen6_5: Verse = {
  ref: "Genesis 6:5",
  text: "The LORD saw that the wickedness of man was great in the earth, and that every intention of the thoughts of his heart was only evil continually.",
};

const gen6_6: Verse = {
  ref: "Genesis 6:6",
  text: "And the LORD regretted that he had made man on the earth, and it grieved him to his heart.",
};

/** Real questions from lesson 1, "A Wicked World". `___` marks the blank in a fill-in. */
export const demo_questions: DemoQuestion[] = [
  {
    label: "True or false?",
    prompt: "God was pleased with how people lived before the flood.",
    options: ["True", "False"],
    answer: "False",
    verse: gen6_6,
    explanation: "The wickedness of the world grieved God to his heart.",
  },
  {
    label: "Choose one",
    prompt: "What did the LORD see when he looked at the earth?",
    options: [
      "The wickedness of man was great",
      "People were seeking him",
      "Everyone lived in peace",
      "The earth was empty",
    ],
    answer: "The wickedness of man was great",
    verse: gen6_5,
  },
  {
    label: "Complete the verse",
    prompt: "Every intention of the thoughts of his heart was only ___ continually.",
    options: ["evil", "good", "sad", "hidden"],
    answer: "evil",
    verse: gen6_5,
  },
];

export const upcoming_units = ["Adam and Eve", "Cain and Abel", "The Tower of Babel"];

export const tech = [
  { name: "SvelteKit (Svelte 5)", role: "Every page prerendered as static HTML." },
  { name: "TypeScript", role: "Lessons written as typed data, checked by tests." },
  { name: "Tailwind CSS 4", role: "Styling, with the parchment palette as theme tokens." },
  { name: "Capacitor 7", role: "Set up so the same build can become a phone app later." },
  { name: "Cloudflare Workers", role: "Serves the site as static assets." },
  { name: "PostHog", role: "Cookieless, anonymous usage statistics." },
];

export const esv_notice =
  "Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), copyright © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved.";
