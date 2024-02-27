import { graphql } from "../codegen/index";

export const getCollectionQuery = graphql(/* GraphQL */ `
  query getCollection(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      ...collection
    }
  }
`);

export const getCollectionsQuery = graphql(/* GraphQL */ `
  query getCollections(
    $country: CountryCode
    $first: Int = 100
    $language: LanguageCode
  )
  @inContext(country: $country, language: $language) {
    collections(first: $first, sortKey: TITLE) {
      edges {
        node {
          ...collection
        }
      }
    }
  }
`);

export const getCollectionWithProductsQuery = graphql(/* GraphQL */ `
  query getCollectionWithProducts(
    $country: CountryCode
    $first: Int = 100
    $handle: String!
    $language: LanguageCode
    $reverse: Boolean
    $sortKey: ProductCollectionSortKeys
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      products(sortKey: $sortKey, reverse: $reverse, first: $first) {
        edges {
          node {
            ...productBasic
          }
        }
      }
    }
  }
`);
