import { productFragment } from "@uncnsrdlabel/graphql-shopify-storefront/fragments/product";

export const getProductQuery = /* GraphQL */ `
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
                    # edges {
                    nodes {
                      ... on Metaobject {
                        fields {
                          key
                          type
                          value
                          references(first: 8) {
                            # edges {
                            nodes {
                              ... on Metaobject {
                                fields {
                                  key
                                  type
                                  value
                                  references(first: 8) {
                                    # edges {
                                    nodes {
                                      ... on Metaobject {
                                        fields {
                                          key
                                          type
                                          value
                                        }
                                      }
                                    }
                                    # }
                                  }
                                }
                              }
                            }
                            # }
                          }
                        }
                      }
                    }
                    # }
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
  ${productFragment}
`;

export const getProductsQuery = /* GraphQL */ `
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
  ${productFragment}
`;

export const getProductRecommendationsQuery = /* GraphQL */ `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${productFragment}
`;
