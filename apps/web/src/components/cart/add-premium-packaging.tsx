'use client';

import { ProductCard } from "@/components/product-card/card";
import {
    getInContextVariables,
    getProductDetailsByHandleQuery,
    useGetShopifyGraphQL,
} from "@uncnsrdlabel/graphql-shopify-storefront";

export function AddPremiumPackaging({
  className,
  lang,
}: {
  className?: string;
  lang: Intl.BCP47LanguageTag;
}) {
  const handle = "premium-packaging";

  const inContextVariables = getInContextVariables(lang);

  const variables = { handle };

  const { data, error, isError, isLoading } = useGetShopifyGraphQL(
    getProductDetailsByHandleQuery,
    { ...inContextVariables, ...variables },
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  if (!data) {
    return null;
  }

  const { product: productDetailsFragmentRef } = data ?? {};

  if (!productDetailsFragmentRef) {
    console.error(`Product not found for handle \`${handle}\``);
    return null;
  }

  return (
    <ProductCard
      className={className}
      lang={lang}
      productDetailsFragmentRef={productDetailsFragmentRef}
    />
  );
}
