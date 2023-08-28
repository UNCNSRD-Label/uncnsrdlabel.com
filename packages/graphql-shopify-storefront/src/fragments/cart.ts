import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen";

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
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
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
        }
      }
    }
    totalQuantity
  }
`);
