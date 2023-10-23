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
    classes: metafield(namespace: "custom", key: "classes") {
      __typename
      value
    }
    style: metafield(namespace: "custom", key: "style") {
      __typename
      value
    }
    mediaImages: metafield(namespace: "custom", key: "images") {
      value
      references(first: 10) {
        edges {
          node {
            __typename
            ... on MediaImage {
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
    sections: metafield(namespace: "custom", key: "page_section_module") {
      references(first: 16) {
        __typename
        nodes {
          __typename
          ...pageSectionModule
        }
      }
    }
  }
`);
