const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: true,
    base: true,
    utils: true,
    logs: true,
    themes: ["lofi", "black"],
    darkTheme: "black",
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1920px",
      },
      screens: {
        landscape: { raw: "(orientation: landscape)" },
        // => @media (orientation: landscape) { ... }
        portrait: { raw: "(orientation: portrait)" },
        // => @media (orientation: portrait) { ... }
        tablet: "640px",
        // => @media (min-width: 640px) { ... }
        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
        xs: { max: "639px" },
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px", max: "1535px" },
        "2xl": { min: "1536px" },
      },
      typography: (theme) => ({
        xs: {
          css: {
            fontSize: "0.75rem",
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
