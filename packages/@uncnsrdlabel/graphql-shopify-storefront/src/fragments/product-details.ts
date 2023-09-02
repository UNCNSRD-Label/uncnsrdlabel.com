import { graphql } from "../codegen/index";

export const productDetailsFragment = graphql(/* GraphQL */ `
  fragment productDetails on Product {
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
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    description
    descriptionHtml
    handle
    id
    metafields(
      identifiers: [
        { namespace: "custom", key: "line" }
        { namespace: "custom", key: "shape" }
        { namespace: "custom", key: "component" }
        { namespace: "custom", key: "returns" }
        { namespace: "custom", key: "shipping" }
        { namespace: "custom", key: "sizing" }
        { namespace: "custom", key: "model" }
        { namespace: "descriptors", key: "care_guide" }
        {
          namespace: "shopify--discovery--product_recommendation"
          key: "complementary_products"
        }
        {
          namespace: "shopify--discovery--product_recommendation"
          key: "related_products"
        }
      ]
    ) {
      ...productMetafields
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
