import eslintJs from "@eslint/js";
import globals from "globals";
import typescriptEslint from "typescript-eslint";
import eslintPluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ["*.d.ts", "**/coverage", "**/dist"] },
  eslintJs.configs.recommended,
  ...typescriptEslint.configs.recommended,
  ...eslintPluginVue.configs["flat/recommended"],
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { parser: typescriptEslint.parser },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn", // error
      "vue/no-unused-vars": "warn",
    },
  },
];
