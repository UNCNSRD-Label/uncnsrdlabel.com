import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  ignoreNoDocuments: true, // for better experience with the watcher
  overwrite: true,
  schema: {
    [`https://${process.env.NEXT_PUBLIC_HYGRAPH_REGION}.cdn.hygraph.com/content/${process.env.NEXT_PUBLIC_HYGRAPH_PROJECT_ID}/master`]:
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
  },
  documents: [
    "./src/fragments/**/*.{graphql,ts,tsx}",
    "./src/mutations/**/*.{graphql,ts,tsx}",
    "./src/queries/**/*.{graphql,ts,tsx}",
    "../../../apps/*/app/**/*.{hygraph.graphql,ts,tsx}",
    "../../../apps/*/components/**/*.{hygraph.graphql,ts,tsx}",
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
