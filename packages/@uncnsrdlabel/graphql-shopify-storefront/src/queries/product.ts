import { graphql } from "../codegen/index";

export const getProductBasicQuery = graphql(/* GraphQL */ `
  query getProductBasic($handle: String!) {
    product(handle: $handle) {
      ...productBasic
    }
  }
`);

export const getProductDetailsQuery = graphql(/* GraphQL */ `
  query getProductDetails($handle: String!) {
    product(handle: $handle) {
      ...productDetails
    }
  }
`);

export const getProductRecommendationsQuery = graphql(/* GraphQL */ `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...productBasic
    }
  }
`);

export const getProductsQuery = graphql(/* GraphQL */ `
  query getProducts(
    $sortKey: ProductSortKeys
    $reverse: Boolean
    $query: String
  ) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 96) {
      edges {
        node {
          ...productBasic
        }
      }
    }
  }
`);

export const getProductsWithVariantsQuery = graphql(/* GraphQL */ `
  query getProductsWithVariants(
    $sortKey: ProductSortKeys
    $reverse: Boolean
    $query: String
  ) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 96) {
      edges {
        node {
          ...productWithVariants
        }
      }
    }
  }
`);