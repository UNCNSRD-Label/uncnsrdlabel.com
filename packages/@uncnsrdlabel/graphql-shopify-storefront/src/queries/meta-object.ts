import { graphql } from "../codegen/index";

export const getRouteMetaObjectQuery = graphql(/* GraphQL */ `
  query getRouteMetaObject(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
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
