import { graphql } from "../codegen/index";

export const cartFragment = graphql(/* GraphQL */ `
  fragment cart on Cart {
    id
    checkoutUrl
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
    lines(first: 64) {
      edges {
        node {
          cost {
            amountPerQuantity {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
            totalAmount {
              amount
              currencyCode
            }
          }
          id
          merchandise {
            ... on ProductVariant {
              id
              product {
                ...productBasic
              }
              title
              selectedOptions {
                name
                value
              }
            }
          }
          quantity
        }
      }
    }
    totalQuantity
  }
`);
