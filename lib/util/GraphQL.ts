import type { ParsedMetafields } from "@shopify/hydrogen-react";

import type {
  Product,
  ProductMetafieldArgs,
  ProductVariant,
  ProductVariantMetafieldArgs,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { PartialDeep } from "type-fest";

import { metafieldParser } from "@shopify/hydrogen-react";

export const getColorHexCodeByName = (
  colorName: string,
  variants:
    | (
        | PartialDeep<
            ProductVariant,
            {
              recurseIntoArrays: true;
            }
          >
        | undefined
      )[]
    | undefined
) => {
  const variant = variants?.find((variant) =>
    variant?.selectedOptions?.find(
      (selectedOption) => selectedOption?.value === colorName
    )
  );
  // .title?.includes(colorName)
  // .selectedOptions?.find((selectedOption) => selectedOption?.value === colorName)

  if (!variant) {
    return undefined;
  }

  const metafield = getMetafield<ParsedMetafields["color"]>(variant, {
    namespace: "custom",
    key: "color",
  });

  if (metafield == null) {
    return undefined;
  }

  // TODO: Implement better solution than this coercion
  return metafield?.value;
};

export const getMetafield = <T>(
  productOrProductVariant: PartialDeep<
    Product | ProductVariant,
    { recurseIntoArrays: true }
  >,
  { key, namespace }: ProductMetafieldArgs | ProductVariantMetafieldArgs
) => {
  const metafield = productOrProductVariant.metafields?.find(
    (metafield) => metafield?.namespace === namespace && metafield?.key === key
  );

  if (metafield == null) {
    return undefined;
  }

  try {
    const parsedMetafield = metafieldParser<T>(metafield);

    return parsedMetafield;
  } catch (error) {
    console.error(error);
  }
};

export const getMetafieldForSchemaOrg = <T>(
  productOrProductVariant: PartialDeep<
    Product | ProductVariant,
    { recurseIntoArrays: true }
  >,
  { key, namespace }: ProductMetafieldArgs | ProductVariantMetafieldArgs
) => {
  const parsedMetafield = getMetafield<T>(productOrProductVariant, {
    key,
    namespace,
  });

  let value;

  // if (parsedMetafield?.boolean) {
  //   value = Boolean(parsedMetafield.boolean);
  // }

  // let value = {
  //   ...(parsedMetafield?.boolean && { boolean: Boolean(parsedMetafield.boolean) }),
  //   ...(parsedMetafield?.color && { color: parsedMetafield.color }),
  // }

  // TODO: Investigate use of coercion to any
  return value as any as string;
};
