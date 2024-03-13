import { graphql } from "../codegen/index";

export const pageFragment = graphql(/* GraphQL */ `
  fragment page on Page {
    __typename
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
    styleSm: metafield(namespace: "custom", key: "style_sm") {
      __typename
      value
    }
    styleMd: metafield(namespace: "custom", key: "style_md") {
      __typename
      value
    }
    styleLg: metafield(namespace: "custom", key: "style_lg") {
      __typename
      value
    }
    styleXl: metafield(namespace: "custom", key: "style_xl") {
      __typename
      value
    }
    mediaImages: metafield(namespace: "custom", key: "images") {
      value
      references(first: 16) {
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
      references(first: 16) {
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
