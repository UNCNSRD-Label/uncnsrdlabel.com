import { graphql } from "../codegen/index";

export const productBasicFragment = graphql(/* GraphQL */ `
  fragment productBasic on Product {
    __typename
    availableForSale
    collections(first: 250) {
      edges {
        node {
          id
          handle
          title
        }
      }
    }
    compareAtPriceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      ...image
    }
    description
    descriptionHtml
    handle
    id
    images(first: 1) {
      edges {
        node {
          ...image
        }
      }
    }
    media(first: 10) {
      edges {
        node {
          __typename
          ...video
        }
      }
    }
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    requiresSellingPlan
    sellingPlanGroups(first: 1) {
      edges {
        node {
          name
          options {
            name
            values
          }
          sellingPlans(first: 3) {
            edges {
              node {
                id
                name
                description
                recurringDeliveries
                options {
                  name
                  value
                }
              }
            }
          }
        }
      }
    }
    tags
    title
    seo {
      ...seo
    }
    updatedAt
    variants(first: 250) {
      ...productVariantConnection
    }
    vendor
  }
`);
