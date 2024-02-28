import { graphql } from "../codegen/index";

export const cartQuery = graphql(/* GraphQL */ `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
`);
