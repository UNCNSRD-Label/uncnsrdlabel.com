import sharedConfig from "@uncnsrdlabel/tailwind-config/tailwind.config";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../../packages/**/src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [sharedConfig],
}

