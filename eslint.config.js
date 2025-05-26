// eslint.config.js
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      // Add custom TypeScript rules here if needed
    },
  },
  {
    ignores: [
      "node_modules/",
      "dist/",
      "coverage/",
      "*.d.ts"
    ]
  }
];
