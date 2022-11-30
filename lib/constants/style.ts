import type { Config } from "tailwindcss";

import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../tailwind.config.js";

type Breakpoint = {
  max: string;
  min: string;
};

export const config = resolveConfig(tailwindConfig) as Config & {
  theme: {
    maxWidth: {
      "0": string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
      "7xl": string;
      "8xl": string;
      fit: string;
      full: string;
      lg: string;
      max: string;
      md: string;
      min: string;
      none: string;
      prose: string;
      sm: string;
      xl: string;
      xs: string;
    };
    screens: {
      xs: Omit<Breakpoint, "min">;
      sm: Breakpoint;
      md: Breakpoint;
      lg: Breakpoint;
      xl: Breakpoint;
      "2xl": Breakpoint;
    };
  };
};

export const { theme } = config;
