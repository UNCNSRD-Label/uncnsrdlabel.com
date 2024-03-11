import { graphql } from "../codegen/index";

export const productBasicFragment = graphql(/* GraphQL */ `
  fragment productBasic on Product {
    __typename
    availableForSale
    collections(first: 128) {
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
    handle
    id
    images(first: 2) {
      edges {
        node {
          ...image
        }
      }
    }
    media(first: 1) {
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
    productType
    releaseDate: metafield(namespace: "custom", key: "release_date") {
      value
    }
    requiresSellingPlan
    sellingPlanGroups(first:1) {
      edges {
        node {
          name
          options {
            name
            values
          }
          sellingPlans(first: 4) {
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
    updatedAt
    variants(first: 64) {
      ...productVariantConnection
    }
  }
`);
