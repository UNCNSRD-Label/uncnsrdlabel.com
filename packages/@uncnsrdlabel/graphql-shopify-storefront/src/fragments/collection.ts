import { graphql } from "../codegen/index";

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
