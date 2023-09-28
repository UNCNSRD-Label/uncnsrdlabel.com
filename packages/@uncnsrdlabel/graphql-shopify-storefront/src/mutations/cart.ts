import { graphql } from "../codegen/index";

export const addToCartMutation = graphql(/* GraphQL */ `
  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
`);

export const createCartMutation = graphql(/* GraphQL */ `
  mutation createCart($country: CountryCode!, $language: LanguageCode!, $lineItems: [CartLineInput!]) @inContext(country: $country, language: $language) {
  # mutation createCart($cartInput: CartInput!, $country: CountryCode, $language: LanguageCode, $lineItems: [CartLineInput!]) @inContext(country: $country, language: $language) {
    cartCreate(input: { lines: $lineItems }) {
      cart {
        ...cart
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
    }
  }
`);

export const removeFromCartMutation = graphql(/* GraphQL */ `
  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...cart
      }
    }
  }
`);
