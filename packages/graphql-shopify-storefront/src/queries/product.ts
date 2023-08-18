import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen";

export const getProductQuery = graphql(/* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
      metafields(
        identifiers: [
          { namespace: "custom", key: "line" }
          { namespace: "custom", key: "shape" }
          { namespace: "custom", key: "component" }
          { namespace: "custom", key: "returns" }
          { namespace: "custom", key: "shipping" }
          { namespace: "custom", key: "sizing" }
          { namespace: "custom", key: "model" }
          { namespace: "descriptors", key: "care_guide" }
          {
            namespace: "shopify--discovery--product_recommendation"
            key: "complementary_products"
          }
          {
            namespace: "shopify--discovery--product_recommendation"
            key: "related_products"
          }
        ]
      ) {
        namespace
        key
        type
        value
        description
        id
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
      }
    }
  }
`);

export const getProductsQuery = graphql(/* GraphQL */ `
  query getProducts(
    $sortKey: ProductSortKeys
    $reverse: Boolean
    $query: String
  ) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }
`);

export const getProductRecommendationsQuery = graphql(/* GraphQL */ `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
`);
