import sharedConfig from "@uncnsrdlabel/tailwind-config/tailwind.config";

/** @type {import('tailwindcss').Config} */
export default {
  // prefix ui lib classes to avoid conflicting with the app
  // prefix: "ui-",
  presets: [sharedConfig],
}