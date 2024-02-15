"use client";

import { getProductVariantBySelectedOptionsUtility } from "@/lib/shopify";
import { type ProductOption } from "@shopify/hydrogen/storefront-api-types";
import { useMemo } from 'react';

export function SquarePlacement({
  handle,
  lang,
  options,
}: {
  handle: string;
  lang: Intl.BCP47LanguageTag;
  options: ProductOption[];
}) {
  const data = getProductVariantBySelectedOptionsUtility({
    handle,
    lang,
    options,
  });

  const product = data.product;

  const placement = useMemo(
    () => ({
      amount: product?.variantBySelectedOptions?.price.amount,
      currency: product?.variantBySelectedOptions?.price.currencyCode,
      skus: product?.variantBySelectedOptions?.sku,
      categories: product?.productType,
    }),
    [product?.variantBySelectedOptions]
  );

  if (!lang || !placement || !placement.currency || !["AUD", "USD", "CAD", "GBP", "NZD"].includes(placement.currency)) {
    return null;
  }

  return (
    <square-placement
      class="stroke-none"
      data-mpid={process.env.NEXT_PUBLIC_SQUARE_PLACEMENT_MPID}
      data-placement-id={process.env.NEXT_PUBLIC_SQUARE_PLACEMENT_ID}
      data-page-type="product"
      data-amount={placement.amount}
      data-currency={placement.currency}
      data-consumer-locale={lang}
      data-item-skus={placement.skus}
      data-item-categories={placement.categories}
      data-is-eligible="true"
    ></square-placement>
  );
}
