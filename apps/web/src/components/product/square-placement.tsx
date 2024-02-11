"use client";

import { useQuery } from "@tanstack/react-query";
import {
    getProductVariantBySelectedOptionsQuery,
    getQueryKey,
    getShopifyGraphQL,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { useSearchParams } from "next/navigation";

export function SquarePlacement({ handle, lang }: { handle: string; lang: Intl.BCP47LanguageTag }) {
//   const { handle } = useParams();

  const searchParams = useSearchParams();

  const colour = searchParams.get("colour") ?? "";

  const size = searchParams.get("size") ?? "";

  const selectedOptions = [];

  if (colour) {
    selectedOptions.push({ name: "colour", value: colour });
  }

  if (size) {
    selectedOptions.push({ name: "size", value: size });
  }

  if (!handle || Array.isArray(handle)) {
    throw new Error("Invalid handle");
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
    enabled: !!colour || !!size,
    queryKey,
    queryFn: () =>
      getShopifyGraphQL(getProductVariantBySelectedOptionsQuery, variables),
    staleTime: 5 * 1000,
  });

  const product = data.product;

  if (!product) {
    throw new Error("Product not found");
  }

  const { variantBySelectedOptions } = product;

  if (!variantBySelectedOptions?.sku) {
    throw new Error("Variant SKU not found");
  }

  return (
    <square-placement
      data-mpid="431290fa-f5e4-4ef9-af3f-544f94344bf7"
      data-placement-id="7faaa495-136c-429e-9afe-28dfdaeee4b3"
      data-page-type="product"
      data-amount={variantBySelectedOptions?.price.amount.toString()}
      data-currency={variantBySelectedOptions?.price.currencyCode}
      data-consumer-locale={lang}
      data-item-skus={variantBySelectedOptions?.sku}
      data-item-categories={product.productType}
      data-is-eligible="true"
    ></square-placement>
  );
}
