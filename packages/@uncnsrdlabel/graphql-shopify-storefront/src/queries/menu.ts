import { graphql } from '@uncnsrdlabel/graphql-shopify-storefront/codegen';

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