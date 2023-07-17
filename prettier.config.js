/** @type {import("prettier").Options} */
const config = {
  // pnpm doesn't support plugin autoloading
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindFunctions: ["clsx"],
};

export default config;
