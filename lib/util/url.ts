import type {
  Product,
  ProductVariant,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { PartialDeep } from "type-fest";

export const getProductURL = (
  product: PartialDeep<Product, { recurseIntoArrays: true }>
) => `${process.env.NEXT_PUBLIC_VERCEL_URL}/product/${product.handle}`;

export const getProductVariantURL = (
  product: PartialDeep<Product, { recurseIntoArrays: true }>,
  productVariant: PartialDeep<ProductVariant, { recurseIntoArrays: true }>
) => `${process.env.NEXT_PUBLIC_VERCEL_URL}/product/${product.handle}`;
