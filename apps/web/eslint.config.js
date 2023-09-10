import eslintConfigCustom from "@uncnsrdlabel/eslint-config-custom";
import coreWebVitals from "next/core-web-vitals";

const configuration = [
  coreWebVitals,
  eslintConfigCustom,
  { files: ["src/**/*.ts*"] },
];

export default configuration;
