import { graphql } from "../codegen/index";

export const seoFragment = graphql(/* GraphQL */ `
  fragment seo on SEO {
    description
    title
  }
`);
