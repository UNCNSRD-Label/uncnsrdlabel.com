import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/index";

export const seoFragment = graphql(/* GraphQL */ `
  fragment seo on SEO {
    description
    title
  }
`);
