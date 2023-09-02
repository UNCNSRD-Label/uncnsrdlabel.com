import { graphql } from "../codegen/index";

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
