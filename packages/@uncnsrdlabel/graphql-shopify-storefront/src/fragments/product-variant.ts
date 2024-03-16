import { graphql } from "../codegen/index";

export const productVariantFragment = graphql(/* GraphQL */ `
  fragment productVariant on ProductVariant {
    availableForSale
    barcode
    currentlyNotInStock
    id
    image {
      ...image
    }
    price {
      amount
      currencyCode
    }
    requiresShipping
    taxable
    title
    selectedOptions {
      name
      value
    }
  }
`);
