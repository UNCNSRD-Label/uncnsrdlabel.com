import { graphql } from "../../codegen/index";

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
          ... on DiscountCodeApp {
            
          }
          ... on DiscountCodeBasic {
            appliesOncePerCustomer
            asyncUsageCount
            codeCount
            combinesWith {
              orderDiscounts
              productDiscounts
              shippingDiscounts
            }
            createdAt
            customerGets {
              appliesOnOneTimePurchase
              appliesOnSubscription
              items {
                __typename
                ... on AllDiscountItems {
                  allItems
                }
                ... on DiscountCollections {
                  first
                  after
                  last
                  before
                  reverse
                }
                ... on DiscountProducts {
                  productVariants {
                    availableForSale
                    id
                    handle
                    price {
                      amount
                      currencyCode
                    }
                    title
                  }
                  products {
                    id
                    handle
                    priceRangeV2 {
                      maxVariantPrice {
                        amount
                        currencyCode
                      }
                      minVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                    title
                  }
                }
              }
              value {
                ... on DiscountAmount {
                  amount {
                    amount
                    currencyCode
                  }
                  appliesOnEachItem
                }
                ... on DiscountOnQuantity {
                  effect {
                    ... on DiscountAmount {
                      amount {
                        amount
                        currencyCode
                      }
                      appliesOnEachItem
                    }
                    ... on DiscountPercentage {
                      percentage
                    }
                  }
                  quantity {
                    quantity
                  }
                }
              }
            }
            customerSelection
            discountClass
            discountId
            endsAt
            shareableUrls {
              targetItemImage {
                altText
                height
                id
                url
                width
              }
              targetType
              title
              url
            }
            startsAt
            status
            title
            totalSales {
              amount
              currencyCode
            }
            updatedAt
            usageLimit
          }
          ... on DiscountCodeBxgy {

          }
          ... on DiscountCodeFreeShipping {
            title
          }
          ... on DiscountMinimumSubtotal {
            greaterThanOrEqualToSubtotal {
              amount
              currencyCode
            }
          }
          ... on DiscountMinimumQuantity {
            greaterThanOrEqualToQuantity
          }
        }
        shortSummary
        startsAt
        status
        summary
        title
      }
      ... on DiscountCodeBasic {

      }
    }
  }
`);
