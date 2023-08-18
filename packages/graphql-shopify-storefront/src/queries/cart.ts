import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen";
import { cartFragment } from "@uncnsrdlabel/graphql-shopify-storefront/fragments/cart";

export const getCartQuery = graphql(/* GraphQL */ `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${cartFragment}
`);
