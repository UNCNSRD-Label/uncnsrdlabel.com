import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import { type Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

type Configuration = { theme: (property: string, defaultValue?: unknown) => {} }

export default {
  content: ["../../*/dist/**/*.{js,ts,jsx,tsx}",],
  darkMode: ["class"],
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
        serif: ["var(--font-lato)"],
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
      backgroundColor: ({ theme }: Configuration) => ({
        ...theme("colors"),
      }),
      borderColor: ({ theme }: Configuration) => ({
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
      spacing: {
        safeTop: "env(safe-area-inset-top, 1.5rem)",
      },
      typography: ({
        theme,
      }: Configuration) => ({
        DEFAULT: {
          css: {
            h1: {
              fontWeight: theme("fontWeight.normal"),
            },
            h2: {
              fontWeight: theme("fontWeight.normal"),
            },
            h3: {
              fontWeight: theme("fontWeight.normal"),
            },
            h4: {
              fontWeight: theme("fontWeight.normal"),
            },
            h5: {
              fontWeight: theme("fontWeight.normal"),
            },
            h6: {
              fontWeight: theme("fontWeight.normal"),
            },
          },
        },
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
} satisfies Config;