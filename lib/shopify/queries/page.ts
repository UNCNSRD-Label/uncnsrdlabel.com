import imageFragment from '../fragments/image';
import seoFragment from '../fragments/seo';

const pageFragment = /* GraphQL */ `
  fragment page on Page {
    ... on Page {
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
  }
  ${imageFragment}
  ${seoFragment}
`;

export const getPageQuery = /* GraphQL */ `
  query getPage($handle: String!) {
    pageByHandle(handle: $handle) {
      ...page
    }
  }
  ${pageFragment}
`;

export const getPagesQuery = /* GraphQL */ `
  query getPages {
    pages(first: 100) {
      edges {
        node {
          ...page
        }
      }
    }
  }
  ${pageFragment}
`;
