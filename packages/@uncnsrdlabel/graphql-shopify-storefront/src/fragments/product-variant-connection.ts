import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/index.js";

export const productVariantConnectionFragment = graphql(/* GraphQL */ `
  fragment productVariantConnection on ProductVariantConnection {
    edges {
      node {
        availableForSale
        id
        image {
          ...image
        }
        price {
          amount
          currencyCode
        }
        title
        selectedOptions {
          name
          value
        }
      }
    }
  }
`);
