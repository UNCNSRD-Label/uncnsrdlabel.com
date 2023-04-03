## Shopify Provider

Before getting started, a [Shopify](https://www.shopify.com/) account and store is required before using the provider.

Next, copy the `.env.template` file in this directory to `.env.local` in the main directory (which will be ignored by Git):

```bash
cp packages/shopify/.env.template .env.local
```

Then, set the environment variables in `.env.local` to match the ones from your Shopify store.

## Code generation

This provider makes use of GraphQL code generation. The [graphql.ts](./generated/graphql.ts) file contains the generated types and schema introspection results. You should import this file into your code.

When developing the provider, changes to any GraphQL operations should be followed by re-generation of the types and schema files:

From the project root directory, run:

```sh
pnpm generate:shopify
```

OR

From the `graphql/shopify` directory, run:

```sh
pnpm generate
```
