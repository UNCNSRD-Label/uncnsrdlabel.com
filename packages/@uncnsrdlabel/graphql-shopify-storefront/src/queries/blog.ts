import { graphql } from "../codegen/index";

export const blogArticleQuery = graphql(/* GraphQL */ `
  query blogArticle(
    $country: CountryCode
    $articleHandle: String!
    $blogHandle: String!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    blog(handle: $blogHandle) {
      articleByHandle(handle: $articleHandle) {
        contentHtml
        excerptHtml
        id
        title
      }
    }
  }
`);
