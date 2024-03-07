import componentConfig from "@uncnsrdlabel/components/tailwind.config";
import type { Config } from "tailwindcss";

export default {
  content: [
    "../../packages/@uncnsrdlabel/*/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [componentConfig],
} satisfies Config;
