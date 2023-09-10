import eslintConfigCustom from "@uncnsrdlabel/eslint-config-custom";

/** @type {import('eslint').Linter.FlatConfig[]} */
const configuration = [
  ...eslintConfigCustom,
  {
    files: ["src/**/*.ts*"],
  },
];

export default configuration;
