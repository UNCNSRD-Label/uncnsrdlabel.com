import { graphql } from "../codegen/index";

export const productVariantConnectionFragment = graphql(/* GraphQL */ `
  fragment productVariantConnection on ProductVariantConnection {
    edges {
      node {
        ...productVariant
      }
    }
  }
`);
