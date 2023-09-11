import eslintConfigCustom from "@uncnsrdlabel/eslint-config-custom";
import babel from "next/babel";
import coreWebVitals from "next/core-web-vitals";

/** @type {import('eslint').Linter.FlatConfig[]} */
const configuration = [
  babel,
  coreWebVitals,
  ...eslintConfigCustom,
  { files: ["src/**/*.ts*"] },
];

export default configuration;
