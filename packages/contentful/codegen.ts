import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  ignoreNoDocuments: true, // for better experience with the watcher
  overwrite: true,
  schema: {
    [`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`]:
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
  },
  documents: [
    './src/**/*.{graphql,ts,tsx}',
    'app/**/*.contentful.{graphql,ts,tsx}',
    'lib/graphql/**/*.contentful.{graphql,ts,tsx}',
    'pages/**/*.contentful.{graphql,ts,tsx}',
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
        dedupeFragments: true,
        exposeDocument: true,
        exposeFetcher: true,
        isReactHook: true,
        fetcher: {
          endpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`,
          fetchParams: {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
              'Content-Type': 'application/json',
            },
          },
        },
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
}

export default config
