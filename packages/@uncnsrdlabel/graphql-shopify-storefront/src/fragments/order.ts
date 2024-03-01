import { graphql } from "../codegen/index";

export const orderFragment = graphql(/* GraphQL */ `
  fragment order on Order {
    billingAddress {
      ...mailingAddress
    }
    cancelReason
    canceledAt
    currencyCode
    currentSubtotalPrice {
      amount
      currencyCode
    }
    currentTotalDuties {
      amount
      currencyCode
    }
    currentTotalPrice {
      amount
      currencyCode
    }
    customerLocale
    customerUrl
    edited
    email
    financialStatus
    fulfillmentStatus
    id
    name
    orderNumber
    originalTotalDuties {
      amount
      currencyCode
    }
    originalTotalPrice {
      amount
      currencyCode
    }
    phone
    processedAt
    shippingAddress {
      ...mailingAddress
    }
    shippingDiscountAllocations {
      allocatedAmount {
        amount
        currencyCode
      }
      discountApplication {
        allocationMethod
        targetSelection
        targetType
        value {
          ... on MoneyV2 {
            amount
            currencyCode
          }
          ... on PricingPercentageValue {
            percentage
          }
        }
      }
    }
    statusUrl
    subtotalPrice {
      amount
      currencyCode
    }
    successfulFulfillments {
      trackingCompany
      trackingInfo {
        number
        url
      }
    }
    totalPrice {
      amount
      currencyCode
    }
    totalRefunded {
      amount
      currencyCode
    }
    totalShippingPrice {
      amount
      currencyCode
    }
    totalTax {
      amount
      currencyCode
    }
  }
`);
