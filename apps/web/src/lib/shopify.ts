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

export const getProductVariantBySelectedOptionsUtility = ({
    handle,
    lang,
    options,
  }: {
    handle: string;
    lang: Intl.BCP47LanguageTag;
    options: ProductOption[];
  }) => {
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
  
    return data;
  }