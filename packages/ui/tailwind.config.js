const sharedConfig = require("@uncnsrdlabel/ui/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  prefix: "ui-",
  presets: [sharedConfig],
};
