import type { CodegenConfig } from "@graphql-codegen/cli";

import { storefrontApiCustomScalars } from "@shopify/hydrogen-react";

const config: CodegenConfig = {
  overwrite: true,
  schema: "node_modules/@shopify/hydrogen-react/storefront.schema.json",
  documents: [
    "app/**/*.{graphql,tsx}",
    "lib/graphql/**/*.{graphql,tsx}",
    "pages/**/*.{graphql,tsx}",
  ],
  generates: {
    "generated/graphql/": {
      preset: "client",
      plugins: [],
      config: {
        scalars: storefrontApiCustomScalars,
      },
    },
  },
};

export default config;
