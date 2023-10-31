import { graphql } from "../codegen/index";

export const getProductBasicQuery = graphql(/* GraphQL */ `
  query getProductBasic(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...productBasic
    }
  }
`);

export const getProductDetailsByHandleQuery = graphql(/* GraphQL */ `
  query getProductDetailsByHandle(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...productDetails
    }
  }
`);

export const getProductDetailsByIdQuery = graphql(/* GraphQL */ `
  query getProductDetailsById(
    $country: CountryCode
    $id: ID!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    product(id: $id) {
      ...productDetails
    }
  }
`);

export const getProductRecommendationsQuery = graphql(/* GraphQL */ `
  query getProductRecommendations(
    $country: CountryCode
    $productId: ID!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
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
