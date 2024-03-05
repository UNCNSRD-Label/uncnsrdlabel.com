import { graphql } from "../codegen/index";

export const metaObjectsQuery = graphql(/* GraphQL */ `
  query metaObjects(
    $country: CountryCode
    $type: String!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    metaobjects(first: 64, type: $type) {
      edges {
        node {
          id
          fields {
            key
            value
          }
        }
      }
    }
  }
`);

export const routeMetaObjectQuery = graphql(/* GraphQL */ `
  query routeMetaObject(
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
