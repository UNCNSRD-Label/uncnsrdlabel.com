import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  ignoreNoDocuments: true, // for better experience with the watcher
  overwrite: true,
  schema: {
    // [`https://${process.env.NEXT_PUBLIC_HYGRAPH_REGION}.cdn.hygraph.com/content/${process.env.NEXT_PUBLIC_HYGRAPH_PROJECT_ID}/master`]:
    //   {
    //     headers: {
    //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN}`,
    //       "Content-Type": "application/json",
    //     },
    //   },
    schema: '@shopify/hydrogen-react/storefront.schema.json',
  },
  documents: [
    "./src/**/*.{graphql,ts,tsx}",
    "../../apps/app/app/**/*.shopify.graphql",
    "../../apps/app/components/**/*.shopify.graphql",
    "../../apps/app/app/**/*.{ts,tsx}",
    "../../apps/app/components/**/*.{ts,tsx}",
  ],
  emitLegacyCommonJSImports: false,
  generates: {
    "./src/": {
      preset: "client",
    },
  },
};

export default config;
