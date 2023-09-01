import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/index.js";

export const getMenuQuery = graphql(/* GraphQL */ `
  query getMenu($handle: String!) {
    menu(handle: $handle) {
      id
      items {
        title
        url
      }
    }
  }
`);
