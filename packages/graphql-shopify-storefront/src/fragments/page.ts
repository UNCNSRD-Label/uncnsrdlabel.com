import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen";

export const pageFragment = graphql(/* GraphQL */ `
  fragment page on Page {
    id
    title
    handle
    body
    bodySummary
    seo {
      ...seo
    }
    createdAt
    updatedAt
    mediaImages: metafield(namespace: "custom", key: "images") {
      value
      references(first: 10) {
        edges {
          node {
            ... on MediaImage {
              __typename
              id
              image {
                ...image
              }
              mediaContentType
            }
          }
        }
      }
    }
  }
`);