import { graphql } from "../codegen/index";

export const getCustomerCareQuery = graphql(/* GraphQL */ `
  query getCustomerCare($handle: String!) {
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
