import eslintConfigCustom from "@uncnsrdlabel/eslint-config-custom";
import coreWebVitals from "next/core-web-vitals";

/** @type {import('eslint').Linter.FlatConfig[]} */
const configuration = [
  coreWebVitals,
  ...eslintConfigCustom,
  { files: ["src/**/*.ts*"] },
];

export default configuration;
