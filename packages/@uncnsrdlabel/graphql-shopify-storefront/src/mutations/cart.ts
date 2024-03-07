import { graphql } from "../codegen/index";

export const addToCartMutation = graphql(/* GraphQL */ `
  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
      userErrors {
        field
        message
      }
    }
  }
`);

export const cartBuyerIdentityUpdateMutation = graphql(/* GraphQL */ `
  mutation cartBuyerIdentityUpdate(
    $buyerIdentity: CartBuyerIdentityInput!
    $cartId: ID!
  ) {
    cartBuyerIdentityUpdate(buyerIdentity: $buyerIdentity, cartId: $cartId) {
      cart {
        ...cart
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`);

export const createCartMutation = graphql(/* GraphQL */ `
  mutation createCart($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        ...cart
      }
      userErrors {
        field
        message
      }
    }
  }
`);

export const editCartItemsMutation = graphql(/* GraphQL */ `
  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
      userErrors {
        field
        message
      }
    }
  }
`);

export const removeFromCartMutation = graphql(/* GraphQL */ `
  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...cart
      }
      userErrors {
        field
        message
      }
    }
  }
`);
