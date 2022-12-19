import type { ParsedMetafields } from "@shopify/hydrogen-react";

import type {
  Product,
  ProductVariant,
  ProductVariantMetafieldArgs,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { PartialDeep } from "type-fest";

import { metafieldParser } from "@shopify/hydrogen-react";

export const getMetafield = <T>(
  product: PartialDeep<Product | ProductVariant, { recurseIntoArrays: true }>,
  { key, namespace }: ProductVariantMetafieldArgs
) => {
  const metafield = product.metafields?.find(
    (metafield) => metafield?.namespace === namespace && metafield?.key === key
  );

  if (!metafield) {
    return undefined;
  }

  return metafieldParser<ParsedMetafields<T>>(metafield);
};

export const getMetafieldForSchemaOrg = <T>(
  product: PartialDeep<Product | ProductVariant, { recurseIntoArrays: true }>,
  { key, namespace }: ProductVariantMetafieldArgs
) => {
  const parsedMetafield = getMetafield<T>(product, { key, namespace });

  let value;

  if (parsedMetafield?.boolean) {
    value = Boolean(parsedMetafield.boolean);
  }

  // let value = {
  //   ...(parsedMetafield?.boolean && { boolean: Boolean(parsedMetafield.boolean) }),
  //   ...(parsedMetafield?.color && { color: parsedMetafield.color }),
  // }

  return value as any as string;
};
