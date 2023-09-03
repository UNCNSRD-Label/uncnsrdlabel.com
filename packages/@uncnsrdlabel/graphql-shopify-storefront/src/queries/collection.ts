import { graphql } from "../codegen/index";

export const getCollectionQuery = graphql(/* GraphQL */ `
  query getCollection($country: CountryCode, $handle: String!, $language: LanguageCode) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      ...collection
    }
  }
`);

export const getCollectionsQuery = graphql(/* GraphQL */ `
  query getCollections($country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language) {
    collections(first: 100, sortKey: TITLE) {
      edges {
        node {
          ...collection
        }
      }
    }
  }
`);

export const getCollectionProductsQuery = graphql(/* GraphQL */ `
  query getCollectionProducts(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $reverse: Boolean
    $sortKey: ProductCollectionSortKeys
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      products(sortKey: $sortKey, reverse: $reverse, first: 100) {
        edges {
          node {
            ...productBasic
          }
        }
      }
    }
  }
`);
