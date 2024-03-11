import { graphql } from "../codegen/index";

export const collectionQuery = graphql(/* GraphQL */ `
  query collection(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      ...collection
    }
  }
`);

export const collectionsQuery = graphql(/* GraphQL */ `
  query collections(
    $country: CountryCode
    $first: Int = 64
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

export const collectionWithProductsQuery = graphql(/* GraphQL */ `
  query collectionWithProducts(
    $country: CountryCode
    $first: Int = 64
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
