// import next from "eslint-config-next";
// import prettier from "eslint-config-prettier";
// import turbo from "eslint-config-turbo";
import { FlatCompat } from "@eslint/eslintrc";
import unicorn from "eslint-plugin-unicorn";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});


/** @type {import('eslint').Linter.FlatConfig[]} */
const configuration = [
  // mimic ESLintRC-style extends
  ...compat.extends("eslint-config-next"),
  ...compat.extends("eslint-config-prettier"),
  // ...compat.extends("eslint-config-turbo"),
  // next,
  // prettier,
  // turbo,
  {
    plugins: {
      unicorn,
      // ...compat.plugins("eslint-plugin-unicorn"),
    },
    // parserOptions: {
    //   babelOptions: {
    //     presets: [require.resolve("next/babel")],
    //   },
    // },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "no-unused-vars": [
        "error",
        {
          args: "after-used",
          caughtErrors: "none",
          ignoreRestSiblings: true,
          vars: "all",
        },
      ],
      "prefer-const": "error",
      "react-hooks/exhaustive-deps": "error",
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
        },
      ],
    },
  },
];

export default configuration;
