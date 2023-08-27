import { graphql } from '@uncnsrdlabel/graphql-shopify-storefront/codegen';

export const imageFragment = graphql(/* GraphQL */ `
  fragment image on Image {
    altText
    height
    id
    url
    width
  }
`);
