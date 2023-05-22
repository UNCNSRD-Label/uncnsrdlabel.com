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
      media: metafield(namespace: "custom", key: "media") {
        value
        references(first: 10) {
          edges {
            node {
              ... on MediaImage {
                __typename
                alt
                id
                image {
                  altText
                  height
                  id
                  url
                  width
                }
                mediaContentType
                # previewImage {
                #   altText
                #   height
                #   id
                #   url
                #   width
                # }
              }
            }
          }
        }
      }
    }
  }
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
