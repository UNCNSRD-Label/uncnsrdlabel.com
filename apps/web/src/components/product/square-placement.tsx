"use client";

import { type ProductOption } from "@shopify/hydrogen/storefront-api-types";
import { useQuery } from "@tanstack/react-query";
import {
  getInContextVariables,
  getProductVariantBySelectedOptionsQuery,
  getQueryKey,
  getShopifyGraphQL,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { startCase } from "lodash";
import { useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();

  const color = searchParams.get("color") ?? "";

  const size = searchParams.get("size") ?? "";

  const selectedOptions = options.map((option) => ({
    name: option.name,
    value: option.values[0],
  }));

  if (color) {
    const name = "Color";
    const value = startCase(color);

    const existing = selectedOptions.find((option) => option.name === name);

    if (existing) {
      existing.value = value;
    } else {
      selectedOptions.push({ name, value });
    }
  }

  if (size) {
    const name = "Size";
    const value = size.toUpperCase();

    const existing = selectedOptions.find((option) => option.name === name);

    if (existing) {
      existing.value = value;
    } else {
      selectedOptions.push({ name, value });
    }
  }

  const variables = { handle, selectedOptions };

  const inContextVariables = getInContextVariables(lang);

  const queryKey = getQueryKey(getProductVariantBySelectedOptionsQuery, {
    ...inContextVariables,
    ...variables,
  });

  const {
    data = {
      product: null,
    },
  } = useQuery({
    queryKey,
    queryFn: () =>
      getShopifyGraphQL(getProductVariantBySelectedOptionsQuery, {
        ...inContextVariables,
        ...variables,
      }),
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

  console.log({placement});

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
