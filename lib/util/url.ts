import type {
  Product,
  ProductVariant,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { PartialDeep } from "type-fest";

export const getProductURL = (
  product: PartialDeep<Product, { recurseIntoArrays: true }>
) => `/products/${product.handle}`;

export const getProductVariantURL = (
  product: PartialDeep<Product, { recurseIntoArrays: true }>,
  productVariant: PartialDeep<ProductVariant, { recurseIntoArrays: true }>
) => `/products/${product.handle}`;
