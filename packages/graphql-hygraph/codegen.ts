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
    "./src/**/*.{graphql,ts,tsx}",
    "../../apps/app/app/**/*.hygraph.graphql",
    "../../apps/app/components/**/*.hygraph.graphql",
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
