const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
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
        gray: colors.zinc,
        "gray-1000": "rgb(17,17,19)",
        "gray-1100": "rgb(10,10,11)",
        vercel: {
          pink: "#FF0080",
          blue: "#0070F3",
          cyan: "#50E3C2",
          orange: "#F5A623",
          violet: "#7928CA",
        },
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
