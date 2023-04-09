// const postcssJitProps = require("postcss-jit-props");
// const OpenProps = require("open-props");

module.exports = {
  plugins: {
    // postcssJitProps({
    //   files: [require("open-props/open-props.min.css")],
    // }),
    "postcss-easings": {},
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    "postcss-preset-env": {
      features: { "nesting-rules": false },
    },
    autoprefixer: {},
  },
};
