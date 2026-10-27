import type { Color, LogMethod, LogStyle } from "styling-console/logger";

export const links = {
  github: "https://github.com/tertius4/styling-console",
  npm: "https://www.npmjs.com/package/styling-console",
  issues: "https://github.com/tertius4/styling-console/issues",
};

export const install_command = "npm i styling-console";

export const meta = ["v1.0.1", "MIT", "0 dependencies", "ESM"];

export const features = [
  {
    title: "Familiar methods",
    text: "Wraps `log`, `info`, `warn`, `error` and `debug`. Everything else on the console is left untouched.",
  },
  {
    title: "Node.js and browser",
    text: "ANSI escape codes in the terminal, `%c` CSS in DevTools. One API for both.",
  },
  {
    title: "Per-method defaults",
    text: "`configure()` sets a default style for each method and merges on repeated calls.",
  },
  {
    title: "Non-mutating `style()`",
    text: "`style()` returns a new logger with overrides. The original is never changed, and calls chain.",
  },
] as const;

export const methods: LogMethod[] = ["log", "info", "warn", "error", "debug"];

/** Approximate ANSI terminal colours, used for previews on this page. */
export const colors: Record<Color, string> = {
  black: "#484f58",
  red: "#ff7b72",
  green: "#3fb950",
  yellow: "#d29922",
  blue: "#58a6ff",
  magenta: "#bc8cff",
  cyan: "#39c5cf",
  white: "#e6edf3",
};

export const color_names = Object.keys(colors) as Color[];

export const terminal_demo: { method: LogMethod; style: LogStyle; text: string }[] = [
  { method: "log", style: { bold: true, color: "green" }, text: "Server listening on :3000" },
  { method: "warn", style: { color: "yellow" }, text: "Cache miss for /api/users" },
  { method: "error", style: { bold: true, color: "red" }, text: "Database connection refused" },
  { method: "info", style: { italic: true, color: "blue" }, text: "Retrying in 5s…" },
];

export const usage = [
  {
    title: "Local logger",
    text: "Import the logger without touching the global console.",
    code: `import logger from "styling-console/logger";

logger.configure({
  log: { bold: true, color: "green" },
  error: { bold: true, color: "red" },
});

logger.log("Build complete");
logger.style({ italic: true, color: "blue" }).log("One-off line");`,
  },
  {
    title: "Global console",
    text: "Importing the package patches `console`. `restore()` undoes it, `install()` re-applies it.",
    code: `import { restore } from "styling-console";

console.configure({ error: { bold: true, color: "red" } });

console.error("Something went wrong");
console.style({ background: "cyan", color: "black" }).log("Highlighted");

restore(); // back to the original console`,
  },
];

export const environments = [
  {
    title: "Node.js",
    icon: "nodejs",
    points: [
      "Styles use ANSI escape codes.",
      "Colours only appear when the stream is a TTY.",
      "`FORCE_COLOR` forces colours on; `0` or `false` forces them off.",
      "`NO_COLOR` disables colours.",
    ],
  },
  {
    title: "Browser",
    icon: "javascript",
    points: [
      "Styles use `%c` and CSS in DevTools.",
      "No separate API or build step needed.",
      "Works with any bundler that supports ESM.",
    ],
  },
] as const;

export const notes = [
  "Only string arguments are styled; other values pass through unchanged.",
  "`style()` never changes existing configuration.",
  "Passing `null` for a method in `configure()` resets it.",
  "An unknown colour throws a `TypeError`.",
  "Meant for developer-tool output, not HTML or DOM styling.",
];

/** Inline CSS for previewing a style on this page. */
export function previewCss(style: LogStyle) {
  const css = [];
  if (style.bold) css.push("font-weight: 700");
  if (style.italic) css.push("font-style: italic");
  if (style.color) css.push(`color: ${colors[style.color]}`);
  if (style.background) css.push(`background-color: ${colors[style.background]}`);
  return css.join("; ");
}
