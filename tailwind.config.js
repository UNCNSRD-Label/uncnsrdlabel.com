/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // daisyui: {
  //   base: true,
  //   // darkTheme: 'black',
  //   logs: false,
  //   styled: true,
  //   themes: [
  //     {
  //       uncnsrd: {
  //         ...require('daisyui/src/colors/themes')['[data-theme=lofi]'],
  //         'color-scheme': 'light',
  //         primary: '#0D0D0D',
  //         'primary-content': '#ffffff',
  //         secondary: '#1A1919',
  //         'secondary-content': '#ffffff',
  //         accent: '#262626',
  //         'accent-content': '#ffffff',
  //         neutral: '#000000',
  //         'neutral-content': '#ffffff',
  //         'base-100': '#fffaf0',
  //         'base-200': '#F2F2F2',
  //         'base-300': '#E6E5E5',
  //         'base-content': '#000000',
  //         info: '#0070F3',
  //         'info-content': '#ffffff',
  //         success: '#21CC51',
  //         'success-content': '#ffffff',
  //         warning: '#FF6154',
  //         'warning-content': '#ffffff',
  //         error: '#DE1C8D',
  //         'error-content': '#ffffff',
  //         '--rounded-box': '0.25rem',
  //         '--rounded-btn': '0.125rem',
  //         '--rounded-badge': '0.125rem',
  //         '--animation-btn': '0',
  //         '--animation-input': '0',
  //         '--btn-focus-scale': '1',
  //         '--tab-radius': '0',
  //         '--tw-ring-color': 'transparent',
  //       },
  //     },
  //     // 'lofi',
  //     // 'black',
  //   ],
  //   utils: true,
  // },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    // require('daisyui'),
    plugin(function ({ addBase, theme }) {
      addBase({
        // button: {
        //   outlineColor: theme('colors.black'),
        //   '&:focus': {
        //     outlineStyle: 'solid',
        //     outlineWidth: '1px',
        //   },
        //   '&:hover': {
        //     outlineStyle: 'solid',
        //     outlineWidth: '1px',
        //   },
        // },
      });
    }),
    plugin(function ({ addComponents }) {
      addComponents({
        ".btn": {
          "&:focus-visible": {
            outlineOffset: "-1px",
          },
        },
        ".btn-spacious": {
          boxSizing: "content-box",
          padding: "0.25rem 2rem",
        },
        ".btn-transparent": {
          "--nc": "0 0% 0%",
          "--tw-border-opacity": 0,
          backgroundColor: "transparent !important",
        },
      });
    }),
  ],
  theme: {
    extend: {
      aspectRatio: {
        "2/1": "2 / 1",
        "2/3": "2 / 3",
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "3/4": "3 / 4",
        "16/9": "16 / 9",
        "9/16": "9 / 16",
      },
      colors: {
        primary: "var(--primary)",
        "primary-2": "var(--primary-2)",
        secondary: "var(--secondary)",
        "secondary-2": "var(--secondary-2)",
        hover: "var(--hover)",
        "hover-1": "var(--hover-1)",
        "hover-2": "var(--hover-2)",
        "accent-0": "var(--accent-0)",
        "accent-1": "var(--accent-1)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
        "accent-4": "var(--accent-4)",
        "accent-5": "var(--accent-5)",
        "accent-6": "var(--accent-6)",
        "accent-7": "var(--accent-7)",
        "accent-8": "var(--accent-8)",
        "accent-9": "var(--accent-9)",
        violet: "var(--violet)",
        "violet-light": "var(--violet-light)",
        "violet-dark": "var(--violet-dark)",
        pink: "var(--pink)",
        "pink-light": "var(--pink-light)",
        cyan: "var(--cyan)",
        blue: "var(--blue)",
        green: "var(--green)",
        red: "var(--red)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
        text: ["var(--font-text)", "serif"],
      },
      textColor: {
        base: "var(--text-base)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
      lineHeight: {
        tighter: "1.15",
      },
      maxWidth: {
        "screen-3xl": "1600px",
        "screen-4xl": "1920px",
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
        "3xl": {
          css: {
            fontSize: "2rem",
          },
        },
        "4xl": {
          css: {
            fontSize: "2.5rem",
          },
        },
      }),
    },
  },
};
