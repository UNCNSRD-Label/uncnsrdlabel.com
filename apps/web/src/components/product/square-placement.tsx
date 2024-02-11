"use client";

import {
  type ProductOption
} from "@shopify/hydrogen/storefront-api-types";
import { useQuery } from "@tanstack/react-query";
import {
  getProductVariantBySelectedOptionsQuery,
  getQueryKey,
  getShopifyGraphQL,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { startCase } from "lodash";
import { useSearchParams } from "next/navigation";

export function SquarePlacement({ handle, lang, options }: { handle: string; lang: Intl.BCP47LanguageTag; options: ProductOption[]; }) {
    const searchParams = useSearchParams();

  const color = searchParams.get("color") ?? "";

  const size = searchParams.get("size") ?? "";

  const selectedOptions = options.map((option) => ({ name: option.name, value: option.values[0] }));

  if (color) {
    const name = "Color";
    const value = startCase(color);

    const existing = selectedOptions.find((option) => option.name === name)

    if (existing) {
      existing.value = value;
    } else {
      selectedOptions.push({ name, value });
    }
  }

  if (size) {
    const name = "Size";
    const value = size.toUpperCase();

    const existing = selectedOptions.find((option) => option.name === name)

    if (existing) {
      existing.value = value;
    } else {
      selectedOptions.push({ name, value });
    }
  }

  const variables = { handle, selectedOptions };

  const queryKey = getQueryKey(
    getProductVariantBySelectedOptionsQuery,
    variables,
  );

  const {
    data = {
      product: null,
    },
  } = useQuery({
    queryKey,
    queryFn: () =>
      getShopifyGraphQL(getProductVariantBySelectedOptionsQuery, variables),
  });

  const product = data.product;

  const variantBySelectedOptions = product?.variantBySelectedOptions;

  return (
    <square-placement
      data-mpid="431290fa-f5e4-4ef9-af3f-544f94344bf7"
      data-placement-id="7faaa495-136c-429e-9afe-28dfdaeee4b3"
      data-page-type="product"
      data-amount={variantBySelectedOptions?.price.amount.toString()}
      data-currency={variantBySelectedOptions?.price.currencyCode}
      data-consumer-locale={lang}
      data-item-skus={variantBySelectedOptions?.sku}
      data-item-categories={product?.productType}
      data-is-eligible="true"
    ></square-placement>
  );
}
