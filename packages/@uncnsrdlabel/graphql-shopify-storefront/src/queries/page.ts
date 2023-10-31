import { graphql } from "../codegen/index";

export const getPageQuery = graphql(/* GraphQL */ `
  query getPage(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    page(handle: $handle) {
      ...page
    }
  }
`);

export const getPagesQuery = graphql(/* GraphQL */ `
  query getPages(
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
