import { graphql } from "../codegen/index";

export const pageQuery = graphql(/* GraphQL */ `
  query page($country: CountryCode, $handle: String!, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    page(handle: $handle) {
      ...page
    }
  }
`);

export const pagesQuery = graphql(/* GraphQL */ `
  query pages(
    $country: CountryCode
    $first: Int! = 250
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    pages(first: $first) {
      edges {
        node {
          ...page
        }
      }
    }
  }
`);
