import { graphql } from "../codegen/index";

export const metafieldFragment = graphql(/* GraphQL */ `
  fragment metafield on Metafield {
    value
    id
    key
    namespace
    type
  }
`);
