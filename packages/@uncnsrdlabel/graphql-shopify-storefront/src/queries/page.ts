import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/index";

export const getPageQuery = graphql(/* GraphQL */ `
  query getPage($handle: String!) {
    pageByHandle(handle: $handle) {
      ...page
    }
  }
`);

export const getPagesQuery = graphql(/* GraphQL */ `
  query getPages($first: Int! = 250) {
    pages(first: $first) {
      edges {
        node {
          ...page
        }
      }
    }
  }
`);
