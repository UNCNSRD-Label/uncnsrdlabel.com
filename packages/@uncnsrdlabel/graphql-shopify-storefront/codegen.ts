import type { CodegenConfig } from "@graphql-codegen/cli";
import { storefrontApiCustomScalars } from "@shopify/hydrogen-react";

const config: CodegenConfig = {
  ignoreNoDocuments: true, // for better experience with the watcher
  overwrite: true,
  schema: require.resolve("@shopify/hydrogen-react/storefront.schema.json"),
  documents: [
    "./src/fragments/**/*.{graphql,ts,tsx}",
    "./src/mutations/**/*.{graphql,ts,tsx}",
    "./src/queries/**/*.{graphql,ts,tsx}",
    "../../../apps/*/app/**/*.{shopify.graphql,ts,tsx}",
    "../../../apps/*/components/**/*.{shopify.graphql,ts,tsx}",
  ],
  emitLegacyCommonJSImports: false,
  generates: {
    "./src/codegen/": {
      config: {
        // defines the custom scalars used in the Storefront API
        scalars: storefrontApiCustomScalars,
      },
      preset: "client",
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
    },
  },
};

export default config;
