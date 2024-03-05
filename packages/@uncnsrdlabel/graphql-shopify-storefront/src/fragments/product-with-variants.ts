import { graphql } from "../codegen/index";

export const productWithVariantsFragment = graphql(/* GraphQL */ `
  fragment productWithVariants on Product {
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
    description
    descriptionHtml
    featuredImage {
      ...image
    }
    handle
    id
    images(first: 20) {
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
    seo {
      ...seo
    }
    tags
    title
    updatedAt
    variants(first: 250) {
      ...productVariantConnection
    }
    vendor
  }
`);
