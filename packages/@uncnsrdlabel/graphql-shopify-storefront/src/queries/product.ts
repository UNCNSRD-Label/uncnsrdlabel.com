import { graphql } from "../codegen/index";

export const productBasicQuery = graphql(/* GraphQL */ `
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

export const productDetailsByHandleQuery = graphql(/* GraphQL */ `
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

export const productDetailsByIdQuery = graphql(/* GraphQL */ `
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

export const productVariantBySelectedOptionsQuery = graphql(/* GraphQL */ `
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

export const productsQuery = graphql(/* GraphQL */ `
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

export const productsWithVariantsQuery = graphql(/* GraphQL */ `
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
