import { graphql } from "../codegen/index";

export const getCartQuery = graphql(/* GraphQL */ `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
`);
