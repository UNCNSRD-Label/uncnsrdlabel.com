import { graphql } from "../codegen/index";

export const getMenuQuery = graphql(/* GraphQL */ `
  query getMenu($country: CountryCode, $handle: String!, $language: LanguageCode) @inContext(country: $country, language: $language) {
    menu(handle: $handle) {
      id
      items {
        title
        url
      }
    }
  }
`);
