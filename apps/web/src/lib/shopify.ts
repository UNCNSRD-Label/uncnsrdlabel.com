"use client";

import { type ProductOption } from "@shopify/hydrogen/storefront-api-types";
import { useQuery } from "@tanstack/react-query";
import {
  getInContextVariables,
  getShopifyGraphQL,
  productVariantBySelectedOptionsQuery,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getQueryKey } from "@uncnsrdlabel/lib";
import { deleteCookie } from "cookies-next";
import { startCase } from "lodash";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export const signOutOfUserAccount = ({
  router,
  successMessage,
}: {
  router: AppRouterInstance;
  successMessage: string;
}) => {
  router.push("/account");

  deleteCookie("customerAccessToken");

  toast.success(successMessage);
};

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
  
    const queryKey = getQueryKey(productVariantBySelectedOptionsQuery, {
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
        getShopifyGraphQL(productVariantBySelectedOptionsQuery, {
          ...inContextVariables,
          ...variables,
        }),
    });
  
    return data;
  }