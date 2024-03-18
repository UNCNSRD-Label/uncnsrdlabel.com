import { graphql } from "../codegen/index";

export const pageSectionModuleFragment = graphql(/* GraphQL */ `
  fragment pageSectionModule on Metaobject {
    fields {
      __typename
      key
      type
      value
      reference {
        __typename
        ... on MediaImage {
          image {
            ...image
          }
        }
        ... on Metaobject {
          handle
          id
          type
          updatedAt
        }
      }
      references(first: 16) {
        edges {
          node {
            __typename
            ... on MediaImage {
              image {
                ...image
              }
            }
          }
        }
      }
    }
    handle
    id
    type
    updatedAt
  }
`);
