import { type Config } from "tailwindcss";

declare global {
  interface Window {
    tailwind: {
      config: {
        presets: Config[];
      }
    };
  }
}