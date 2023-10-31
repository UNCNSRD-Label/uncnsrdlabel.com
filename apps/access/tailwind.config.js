import sharedConfig from "@uncnsrdlabel/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../../packages/*/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [sharedConfig],
};
