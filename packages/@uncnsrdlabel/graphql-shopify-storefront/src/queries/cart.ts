import { graphql } from "../codegen/index";

export const getCartQuery = graphql(/* GraphQL */ `
  query getCart($cartId: ID!, $country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language) {
    cart(id: $cartId) {
      ...cart
    }
  }
`);
