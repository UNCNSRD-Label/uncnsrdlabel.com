import type { CodegenConfig } from "@graphql-codegen/cli";
import { endpoint } from "./src/constants";

const config: CodegenConfig = {
  ignoreNoDocuments: true, // for better experience with the watcher
  overwrite: true,
  schema: {
    [endpoint]:
      {
        headers: {
          'X-Shopify-Access-Token': process.env.SHOPIFY_PRIVATE_ACCESS_TOKEN || '',
        },
      },
  },
  documents: [
    "./src/fragments/**/*.{graphql,ts,tsx}",
    "./src/mutations/**/*.{graphql,ts,tsx}",
    "./src/queries/**/*.{graphql,ts,tsx}",
    "../../../apps/*/app/**/*.{shopify-admin.graphql,ts,tsx}",
    "../../../apps/*/components/**/*.{shopify-admin.graphql,ts,tsx}",
  ],
  emitLegacyCommonJSImports: false,
  generates: {
    "./src/codegen/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
    },
  },
};

export default config;
