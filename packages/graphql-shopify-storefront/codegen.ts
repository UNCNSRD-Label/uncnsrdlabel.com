import type { CodegenConfig } from "@graphql-codegen/cli";
import { storefrontApiCustomScalars } from '@shopify/hydrogen-react';

const config: CodegenConfig = {
  ignoreNoDocuments: true, // for better experience with the watcher
  overwrite: true,
  schema: require.resolve('@shopify/hydrogen-react/storefront.schema.json'),
  // schema: {
  //   endpoint: {
  //     headers: {
  //       'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
  //       'content-type': 'application/json',
  //     },
  //   },
  // },
  documents: [
    "./src/fragments/**/*.{graphql,ts,tsx}",
    "./src/mutations/**/*.{graphql,ts,tsx}",
    "./src/queries/**/*.{graphql,ts,tsx}",
    "../../apps/app/app/**/*.shopify.graphql",
    "../../apps/app/components/**/*.shopify.graphql",
    "../../apps/app/app/**/*.{ts,tsx}",
    "../../apps/app/components/**/*.{ts,tsx}",
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
