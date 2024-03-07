import { graphql } from "../codegen/index";

export const menuQuery = graphql(/* GraphQL */ `
  query menu($country: CountryCode, $handle: String!, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    menu(handle: $handle) {
      id
      items {
        id
        title
        url
      }
    }
  }
`);
