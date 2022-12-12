/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    base: true,
    darkTheme: "black",
    logs: true,
    styled: true,
    themes: [
      {
        lofi: {
          // primary: "#ed53a7",
          // secondary: "#f41886",
          // accent: "#7f5bd3",
          // neutral: "#1E2024",
          // "base-100": "#243747",
          // info: "#A0CBF8",
          // success: "#176944",
          // warning: "#DD7703",
          // error: "#F04333",
        },
      },
      "black",
    ],
    themes: true,
    utils: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
        "3/4": "3 / 4",
        "16/9": "16 / 9",
        "9/16": "9 / 16",
      },
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
