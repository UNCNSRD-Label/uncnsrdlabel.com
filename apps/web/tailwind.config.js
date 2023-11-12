import componentConfig from "@uncnsrdlabel/components/tailwind.config";

const variants = ["sm", "md", "lg", "xl"];

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../../packages/@uncnsrdlabel/components/src/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  presets: [componentConfig],
  safelist: [
    {
      pattern: /h-.+/,
      variants,
    },
    {
      pattern: /w-.+/,
      variants,
    },
    {
      pattern: /min-h-.+/,
      variants,
    },
    {
      pattern: /min-w-.+/,
      variants,
    },
    {
      pattern: /max-h-.+/,
      variants,
    },
    {
      pattern: /max-w-.+/,
      variants,
    },
    {
      pattern: /gap-.+/,
      variants,
    },
    {
      pattern: /grid-.+/,
      variants,
    },
    {
      pattern: /p-.+/,
      variants,
    },
    {
      pattern: /m-.+/,
      variants,
    },
    {
      pattern: /content-.+/,
      variants,
    },
    {
      pattern: /items-.+/,
      variants,
    },
    {
      pattern: /justify-.+/,
      variants,
    },
    {
      pattern: /place-.+/,
      variants,
    },
    {
      pattern: /self-.+/,
      variants,
    },
    {
      pattern: /space-.+/,
      variants,
    },
  ],
};
