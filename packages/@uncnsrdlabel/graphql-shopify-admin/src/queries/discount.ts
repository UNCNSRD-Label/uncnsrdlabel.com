import { graphql } from "../codegen/index";

export const getDiscountNodesQuery = graphql(/* GraphQL */ `
  query getDiscountNodes(
    $first: Int = 100
    $query: String!
  ) {
    discountNodes(first: $first, query: $query) {
      edges {
        node {
          ...discountNode
        }
      }
    }
  }
`);
