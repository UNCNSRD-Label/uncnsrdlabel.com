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
