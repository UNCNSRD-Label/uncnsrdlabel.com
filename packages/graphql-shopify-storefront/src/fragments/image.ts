import { graphql } from '@uncnsrdlabel/graphql-shopify-storefront/codegen';

export const imageFragment = graphql(/* GraphQL */ `
  fragment image on Image {
    url
    altText
    width
    height
  }
`);
