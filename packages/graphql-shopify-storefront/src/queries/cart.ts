import { cartFragment } from "@uncnsrdlabel/graphql-shopify-storefront/fragments/cart.js";

export const getCartQuery = /* GraphQL */ `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${cartFragment}
`;
