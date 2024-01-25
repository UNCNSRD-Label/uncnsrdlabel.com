import { graphql } from "../codegen/index";

export const getBlogArticleQuery = graphql(/* GraphQL */ `
query getBlogArticle($country: CountryCode, $articleHandle: String!, $blogHandle: String!, $language: LanguageCode) @inContext(country: $country, language: $language) {
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