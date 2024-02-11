import { graphql } from "../codegen/index";

export const getProductRecommendationsQuery = graphql(/* GraphQL */ `
  query getProductRecommendations(
    $country: CountryCode
    $productId: ID!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    productRecommendations(productId: $productId) {
      ...productBasic
    }
  }
`);
