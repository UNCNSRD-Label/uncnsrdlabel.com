import { graphql } from "../codegen/index";

export const getRouteMetaObjectQuery = graphql(/* GraphQL */ `
  query getRouteMetaObject($handle: String!) {
    metaobject(handle: { type: "route", handle: $handle }) {
      handle
      updatedAt
      fields {
        __typename
        key
        value
        reference {
          __typename
          ... on MediaImage {
            alt
            image {
              ...image
            }
          }
          ...video
        }
      }
    }
  }
`);
