import { graphql } from "../codegen/index";

export const productMetafieldFragment = graphql(/* GraphQL */ `
  fragment productMetafields on Metafield {
    description
    id
    key
    namespace
    reference {
      ... on MetafieldReference {
        ... on Page {
          body
          handle
          onlineStoreUrl
          title
        }
        ... on Metaobject {
          id
          type
          fields {
            key
            type
            value
          }
        }
      }
    }
    references(first: 16) {
      nodes {
        ... on MetafieldReference {
          ... on Page {
            body
            handle
            onlineStoreUrl
            title
          }
          ... on Metaobject {
            id
            type
            fields {
              key
              type
              value
              references(first: 8) {
                nodes {
                  ... on Metaobject {
                    fields {
                      key
                      type
                      value
                      references(first: 8) {
                        nodes {
                          ... on Metaobject {
                            fields {
                              key
                              type
                              value
                              references(first: 8) {
                                nodes {
                                  ... on Metaobject {
                                    fields {
                                      key
                                      type
                                      value
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
      }
    }
    type
    value
  }
`);