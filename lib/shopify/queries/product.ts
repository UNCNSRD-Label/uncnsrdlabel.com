import productFragment from "../fragments/product";

export const getProductQuery = /* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
      metafields(
        identifiers: [
          { namespace: "custom", key: "bra_shape" }
          { namespace: "custom", key: "composition" }
          { namespace: "custom", key: "line" }
          { namespace: "custom", key: "lining" }
          { namespace: "custom", key: "material" }
          { namespace: "custom", key: "model" }
          { namespace: "custom", key: "panties_shape" }
          { namespace: "custom", key: "returns" }
          { namespace: "custom", key: "shipping" }
          { namespace: "custom", key: "sizing" }
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
          }
        }
        references(first: 32) {
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
