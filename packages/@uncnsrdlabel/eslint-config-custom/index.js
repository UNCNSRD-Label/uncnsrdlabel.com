// import next from "eslint-config-next";
// import prettier from "eslint-config-prettier";
// import turbo from "eslint-config-turbo";
// import unicorn from "eslint-plugin-unicorn";

export default [
  // next,
  // prettier,
  // turbo,
  {
    plugins: {
      // unicorn,
    },
    // parserOptions: {
    //   babelOptions: {
    //     presets: [require.resolve("next/babel")],
    //   },
    // },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "no-unused-vars": [
        "error",
        {
          args: "after-used",
          caughtErrors: "none",
          ignoreRestSiblings: true,
          vars: "all",
        },
      ],
      "prefer-const": "error",
      "react-hooks/exhaustive-deps": "error",
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
        },
      ],
    },
  },
];
