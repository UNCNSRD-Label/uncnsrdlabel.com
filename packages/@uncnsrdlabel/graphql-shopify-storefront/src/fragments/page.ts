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
    sections: metafield(namespace: "custom", key: "page_sections") {
      references(first: 16) {
        __typename
        nodes {
          __typename
          ... on Metaobject {
            handle
            id
            type
            updatedAt
            fields {
              __typename
              key
              type
              value
              reference {
                __typename
                ... on MediaImage {
                  id
                  image {
                    ...image
                  }
                }
                ... on Metaobject {
                  handle
                  id
                  type
                  updatedAt
                }
              }
              references(first: 16) {
                __typename
                nodes {
                  __typename
                  ... on Metaobject {
                    handle
                    id
                    type
                    updatedAt
                    fields {
                      __typename
                      key
                      type
                      value
                      reference {
                        __typename
                        ... on MediaImage {
                          id
                          image {
                            ...image
                          }
                        }
                        ... on Metaobject {
                          handle
                          id
                          type
                          updatedAt
                        }
                      }
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
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);
