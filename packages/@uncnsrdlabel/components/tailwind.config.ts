import sharedConfig from "@uncnsrdlabel/tailwind-config";
import type { Config } from "tailwindcss";

export default {
  // prefix ui lib classes to avoid conflicting with the app
  // prefix: "ui-",
  presets: [sharedConfig],
} satisfies Omit<Config, "content">;