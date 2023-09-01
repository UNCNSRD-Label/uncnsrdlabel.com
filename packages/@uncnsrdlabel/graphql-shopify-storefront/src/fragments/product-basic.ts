import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/index.js";

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
    images(first: 20) {
      edges {
        node {
          ...image
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
    tags
    title
    seo {
      ...seo
    }
    updatedAt
    vendor
  }
`);