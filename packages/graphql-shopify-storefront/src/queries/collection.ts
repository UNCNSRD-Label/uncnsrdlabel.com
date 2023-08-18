import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen";
import { productFragment } from "@uncnsrdlabel/graphql-shopify-storefront/fragments/product";
import { seoFragment } from "@uncnsrdlabel/graphql-shopify-storefront/fragments/seo";

const collectionFragment = graphql(/* GraphQL */ `
  fragment collection on Collection {
    handle
    title
    description
    seo {
      ...seo
    }
    updatedAt
  }
  ${seoFragment}
`);

export const getCollectionQuery = graphql(/* GraphQL */ `
  query getCollection($handle: String!) {
    collection(handle: $handle) {
      ...collection
    }
  }
  ${collectionFragment}
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
  ${collectionFragment}
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
            ...product
          }
        }
      }
    }
  }
  ${productFragment}
`);
