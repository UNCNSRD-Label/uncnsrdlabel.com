import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/index.js";

export const imageFragment = graphql(/* GraphQL */ `
  fragment image on Image {
    altText
    height
    id
    url
    width
  }
`);
