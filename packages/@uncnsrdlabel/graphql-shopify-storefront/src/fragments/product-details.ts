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
    images(first: 16) {
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
    media(first: 8) {
      edges {
        node {
          __typename
          ...video
        }
      }
    }
    metafields(
      identifiers: [
        { namespace: "custom", key: "details" }
        { namespace: "custom", key: "inspiration" }
        { namespace: "custom", key: "sizing" }
        { namespace: "custom", key: "line" }
        { namespace: "custom", key: "component" }
        { namespace: "custom", key: "fabric" }
        { namespace: "custom", key: "model" }
        { namespace: "custom", key: "shape" }
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
      ...productMetafield
    }
    openGraphImage: metafield(namespace: "custom", key: "open_graph_image") {
      __typename
      reference {
        ... on MediaImage {
          __typename
          id
          image {
            ...image
          }
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
    release_date: metafield(namespace: "custom", key: "release_date") {
      ...productMetafield
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
