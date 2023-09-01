import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/index.js";

export const getCollectionQuery = graphql(/* GraphQL */ `
  query getCollection($handle: String!) {
    collection(handle: $handle) {
      ...collection
    }
  }
`);

export const getCollectionsQuery = graphql(/* GraphQL */ `
  query getCollections {
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
    $handle: String!
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
  ) {
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
