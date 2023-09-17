import { graphql } from "../codegen/index";

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
            }
          }
        }
      }
    }
    mediaVideos: metafield(namespace: "custom", key: "videos") {
      value
      references(first: 10) {
        edges {
          node {
            __typename
            ...video
          }
        }
      }
    }
  }
`);