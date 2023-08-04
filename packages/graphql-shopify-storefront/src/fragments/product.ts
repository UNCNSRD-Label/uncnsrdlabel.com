import { imageFragment } from "@uncnsrdlabel/graphql-shopify-storefront/fragments/image.js";
import { seoFragment } from "@uncnsrdlabel/graphql-shopify-storefront/fragments/seo.js";

export const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    availableForSale
    title
    collections(first: 250) {
      edges {
        node {
          id
          handle
          title
        }
      }
    }
    description
    descriptionHtml
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
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
    vendor
  }
  ${imageFragment}
  ${seoFragment}
`;