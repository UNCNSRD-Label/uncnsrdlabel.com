import { cartFragment } from "@uncnsrdlabel/graphql-shopify-storefront/fragments/cart";

export const getCartQuery = /* GraphQL */ `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${cartFragment}
`;
