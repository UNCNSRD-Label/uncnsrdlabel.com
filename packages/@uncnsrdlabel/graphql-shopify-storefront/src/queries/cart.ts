import { graphql } from "../codegen/index";

export const cartQuery = graphql(/* GraphQL */ `
  query cart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
`);
