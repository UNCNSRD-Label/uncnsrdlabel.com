import { graphql } from "../codegen/index";

export const getCustomerCareQuery = graphql(/* GraphQL */ `
  query getCustomerCare(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    metaobject(handle: { type: "customer_care", handle: $handle }) {
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
