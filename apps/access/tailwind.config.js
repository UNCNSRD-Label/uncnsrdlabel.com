const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/images/**/*.svg",
  ],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      aspectRatio: {
        "16/9": "16 / 9",
        "21/9": "21 / 9",
        "3/4": "3 / 4",
        "4/3": "4 / 3",
      },
      // https://vercel.com/design/color
      colors: {
        error: colors.red["500"],
        gray: colors.neutral,
        hotGreen: "#4dff74",
        hotOrange: "#ff6f00",
        hotPink: "#ff4dd8",
        stateFocus: colors.gray["500"],
        stateHover: colors.gray["500"],
        dark: "#111111",
        light: "#fafafa",
        disabled: colors.gray["300"],
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
        text: ["var(--font-text)", "serif"],
      },
      fontSize: {
        "1xs": "0.5rem",
        "2xs": "0.375rem",
      },
      lineHeight: {
        tighter: "1.15",
      },
      maxWidth: {
        "8xl": "100rem",
        "9xl": "120rem",
      },
      screens: {
        landscape: { raw: "(orientation: landscape)" }, // => @media (orientation: landscape) { ... }
        portrait: { raw: "(orientation: portrait)" }, // => @media (orientation: portrait) { ... }
      },
    },
    future: {
      hoverOnlyWhenSupported: true,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
