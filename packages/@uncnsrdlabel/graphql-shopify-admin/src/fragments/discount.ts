import { graphql } from "../codegen/index";

export const discountNodeFragment = graphql(/* GraphQL */ `
  fragment discountNode on DiscountNode {
    __typename
    id
    discount {
      __typename
      ... on DiscountAutomaticBasic {
        __typename
        customerGets {
          value {
            __typename
          }
        }
        discountClass
        endsAt
        minimumRequirement {
          ... on DiscountMinimumQuantity {
            greaterThanOrEqualToQuantity
          }
          ... on DiscountMinimumSubtotal {
            greaterThanOrEqualToSubtotal {
              amount
              currencyCode
            }
          }
        }
        shortSummary
        startsAt
        status
        summary
        title
      }
      ... on DiscountCodeBasic {
        __typename
        appliesOncePerCustomer
        customerGets {
          value {
            __typename
          }
        }
        discountClass
        endsAt
        shortSummary
        startsAt
        status
        summary
        title
      }
    }
  }
`);
