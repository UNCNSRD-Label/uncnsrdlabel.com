import eslintConfigCustom from "@uncnsrdlabel/eslint-config-custom";

const configuration = [
  eslintConfigCustom,
  {
    files: ["src/**/*.ts*"],
  },
];

export default configuration;
