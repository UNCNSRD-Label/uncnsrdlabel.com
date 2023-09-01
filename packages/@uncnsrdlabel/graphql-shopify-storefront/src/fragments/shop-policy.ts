import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/index";

export const shopPolicyFragment = graphql(/* GraphQL */ `
  fragment shopPolicy on ShopPolicy {
    ... on ShopPolicy {
      body
      handle
      id
      title
      url
    }
  }
`);
