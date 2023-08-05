import type { Config } from "tailwindcss";

import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./icons/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
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
        error: colors.red["500"],
        gray: colors.neutral,
        hotPink: "#ff4dd8",
        hotGreen: "#4dff74",
        stateFocus: colors.gray["500"],
        stateHover: colors.gray["500"],
        dark: "#111111",
        light: "#fafafa",
        disabled: colors.gray["300"],
      },
      // backgroundColor: "#111111",
      // borderColor: colors.gray["200"],
      // boxShadowColor: "#ff4dd8",
      // caretColor: "#ff4dd8",
      // divideColor: "#ff4dd8",
      // outlineColor: "#ff4dd8",
      // placeholderColor: "#ff4dd8",
      // ringColor: "#ff4dd8",
      // ringOffsetColor: "#ff4dd8",
      // textColor: "#fafafa",
      // textDecorationColor: "#ff4dd8",
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        blink: {
          "0%": { opacity: "0.2" },
          "20%": { opacity: "1" },
          "100% ": { opacity: "0.2" },
        },
      },
      animation: {
        fadeIn: "fadeIn .3s ease-in-out",
        carousel: "marquee 60s linear infinite",
        blink: "blink 1.4s both infinite",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
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