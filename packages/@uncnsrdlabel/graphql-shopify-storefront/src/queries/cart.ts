import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/index.js";

export const getCartQuery = graphql(/* GraphQL */ `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
`);
