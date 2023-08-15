import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen";
import { pageFragment } from "@uncnsrdlabel/graphql-shopify-storefront/fragments/page";

export const getPageQuery2 = graphql(/* GraphQL */ `
  query getPage2($handle: String!) {
    pageByHandle(handle: $handle) {
      id
      title
      handle
    }
  }
`);

export const getPageQuery = graphql(/* GraphQL */ `
  query getPage($handle: String!) {
    pageByHandle(handle: $handle) {
      ...page
      id
      title
      handle
    }
  }
  ${pageFragment}
`);

export const getPagesQuery = graphql(/* GraphQL */ `
  query getPages {
    pages(first: 100) {
      edges {
        node {
          ...page
        }
      }
    }
  }
  ${pageFragment}
`);
