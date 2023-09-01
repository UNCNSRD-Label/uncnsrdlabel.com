import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/index";

export const collectionFragment = graphql(/* GraphQL */ `
  fragment collection on Collection {
    handle
    title
    description
    seo {
      ...seo
    }
    updatedAt
  }
`);
