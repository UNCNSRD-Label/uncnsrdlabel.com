import type { CodegenConfig } from '@graphql-codegen/cli'

import { storefrontApiCustomScalars } from '@shopify/hydrogen-react'
import { LATEST_API_VERSION } from '@shopify/shopify-api'

const config: CodegenConfig = {
  ignoreNoDocuments: true, // for better experience with the watcher
  overwrite: true,
  schema: '../../node_modules/@shopify/hydrogen-react/storefront.schema.json',
  documents: [
    './src/**/*.{graphql,ts,tsx}',
    'app/**/*.shopify.{graphql,ts,tsx}',
    'lib/graphql/**/*.shopify.{graphql,ts,tsx}',
    'pages/**/*.shopify.{graphql,ts,tsx}',
  ],
  generates: {
    'generated/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
      },
      config: {
        addInfiniteQuery: true,
        exposeDocument: true,
        exposeFetcher: true,
        isReactHook: true,
        fetcher: {
          endpoint: `${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/${LATEST_API_VERSION}/graphql.json`,
          fetchParams: {
            headers: {
              'X-Shopify-Storefront-Access-Token': `${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN}`,
              'Content-Type': 'application/json',
            },
          },
        },
        scalars: storefrontApiCustomScalars,
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
}

export default config
