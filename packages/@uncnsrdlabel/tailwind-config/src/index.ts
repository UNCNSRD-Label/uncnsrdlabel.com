import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import { type Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export const config: Config = {
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
  },
  borderRadius: {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)",
  },
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  content: [],
  darkMode: ["class"],
  keyframes: {
    "accordion-down": {
      from: { height: 0 },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: 0 },
    },
  },
  theme: {
    extend: {
      animation: {
        blink: "blink 1.4s both infinite",
        carousel: "marquee 60s linear infinite",
        fadein: "fadein .3s ease-in-out",
        "grow-progress": "linear growProgress forwards",
      },
      aspectRatio: {
        "13/21": "13 / 21",
        "16/9": "16 / 9",
        "2/3": "2 / 3",
        "21/13": "21 / 13",
        "3/2": "3 / 2",
        "3/4": "3 / 4",
        "4/3": "4 / 3",
      },
      fontFamily: {
        brand: ["var(--font-bomber-escort)"],
        sans: ["var(--font-montserrat)"],
      },
      fontSize: {
        xxs: [
          "0.625rem",
          {
            lineHeight: "0.675rem",
          },
        ],
      },
      colors: {
        success: colors.green["500"],
        error: colors.red["500"],
        gray: colors.neutral,
        hotGreen: "#4dff74",
        hotOrange: "#ff6f00",
        hotPink: "#ff4dd8",
        stateFocus: colors.gray["500"],
        stateHover: colors.gray["500"],
        dark: "#010101",
        light: "#fafafa",
        disabled: colors.gray["300"],
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundColor: ({ theme }) => ({
        ...theme("colors"),
      }),
      borderColor: ({ theme }) => ({
        ...theme("colors"),
      }),
      keyframes: {
        blink: {
          "0%": { opacity: "0.2" },
          "20%": { opacity: "1" },
          "100% ": { opacity: "0.2" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        growProgress: {
          from: {
            transform: "scaleX(0)",
          },
          to: {
            transform: "scaleX(1)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      typography: ({
        theme,
      }: {
        theme: (path: string, defaultValue?: unknown) => any;
      }) => ({
        hotGreen: {
          css: {
            "--tw-prose-body": theme("colors.hotGreen"),
            "--tw-prose-headings": theme("colors.hotGreen"),
          },
        },
        hotOrange: {
          css: {
            "--tw-prose-body": theme("colors.hotOrange"),
            "--tw-prose-headings": theme("colors.hotOrange"),
          },
        },
        hotPink: {
          css: {
            "--tw-prose-body": theme("colors.hotPink"),
            "--tw-prose-headings": theme("colors.hotPink"),
          },
        },
        white: {
          css: {
            "--tw-prose-body": theme("colors.white"),
            "--tw-prose-headings": theme("colors.white"),
          },
        },
      }),
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    animate,
    forms,
    typography,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        },
      );
    }),
  ],
};

export default config;
