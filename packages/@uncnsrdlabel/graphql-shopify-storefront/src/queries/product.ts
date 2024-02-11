import { graphql } from "../codegen/index";

export const getProductBasicQuery = graphql(/* GraphQL */ `
  query getProductBasic(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...productBasic
    }
  }
`);

export const getProductDetailsByHandleQuery = graphql(/* GraphQL */ `
  query getProductDetailsByHandle(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...productDetails
    }
  }
`);

export const getProductDetailsByIdQuery = graphql(/* GraphQL */ `
  query getProductDetailsById(
    $country: CountryCode
    $id: ID!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    product(id: $id) {
      ...productDetails
    }
  }
`);

export const getProductVariantBySelectedOptionsQuery = graphql(/* GraphQL */ `
query getProductVariantBySelectedOptions(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      productType
      variantBySelectedOptions(selectedOptions: $selectedOptions) {
        availableForSale
        id
        image {
          ...image
        }
        price {
          amount
          currencyCode
        }
        title
        selectedOptions {
          name
          value
        }
        sku
      }
    }
  }
`);

export const getProductsQuery = graphql(/* GraphQL */ `
  query getProducts(
    $country: CountryCode
    $language: LanguageCode
    $query: String
    $reverse: Boolean
    $sortKey: ProductSortKeys
  ) @inContext(country: $country, language: $language) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 96) {
      edges {
        node {
          ...productBasic
        }
      }
    }
  }
`);

export const getProductsWithVariantsQuery = graphql(/* GraphQL */ `
  query getProductsWithVariants(
    $country: CountryCode
    $language: LanguageCode
    $query: String
    $reverse: Boolean
    $sortKey: ProductSortKeys
  ) @inContext(country: $country, language: $language) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 96) {
      edges {
        node {
          ...productWithVariants
        }
      }
    }
  }
`);
