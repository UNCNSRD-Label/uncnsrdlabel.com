import { graphql } from '@uncnsrdlabel/graphql-shopify-storefront/codegen';

export const seoFragment = graphql(/* GraphQL */ `
  fragment seo on SEO {
    description
    title
  }
`);
