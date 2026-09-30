import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import ts from "typescript-eslint";

export default ts.config(
  { ignores: [".svelte-kit/", "build/", "node_modules/", "static/"] },
  js.configs.recommended,
  ts.configs.recommended,
  svelte.configs.recommended,
  prettier,
  svelte.configs.prettier,
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      // $effect is a rule of thumb, not a ban: warn so it is a conscious choice.
      "no-restricted-syntax": [
        "warn",
        {
          selector: "CallExpression[callee.name='$effect'], CallExpression[callee.object.name='$effect']",
          message: "Prefer $derived, attachments or event handlers; use $effect only if they overcomplicate the code.",
        },
      ],
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: { parserOptions: { parser: ts.parser } },
    rules: {
      // Components spread `...rest` props onto their root element.
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    // TypeScript already checks undefined names (incl. the global Project/Skill types in app.d.ts).
    files: ["**/*.ts", "**/*.svelte", "**/*.svelte.ts"],
    rules: { "no-undef": "off" },
  },
  {
    // The site is served from the domain root (paths.base is ""), so resolve() adds nothing.
    rules: { "svelte/no-navigation-without-resolve": "off" },
  },
);
