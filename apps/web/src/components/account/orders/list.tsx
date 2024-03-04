"use client";

import { OrderSummary } from "@/components/account/orders/summary";
import { useQuery } from "@tanstack/react-query";
import {
  customerFragment,
  customerQuery,
  getFragmentData,
  getShopifyGraphQL,
  orderFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getQueryKey } from "@uncnsrdlabel/lib";
import { getCookie } from "cookies-next";
import { Usable } from "react";
import { type ResolvedIntlConfig } from "react-intl";

export function Orders({
  dictionary,
  lang,
}: {
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
}) {
  let customerAccessToken = undefined;

  if (typeof window !== "undefined") {
    customerAccessToken = getCookie("customerAccessToken");
  }

  const variables = {
    customerAccessToken,
  } as { customerAccessToken: string };

  const queryKey = getQueryKey(customerQuery, variables);

  const { data } = useQuery({
    enabled: !!customerAccessToken,
    queryKey,
    queryFn: () => getShopifyGraphQL(customerQuery, variables),
  });

  const customer = getFragmentData(customerFragment, data?.customer);

  return (
    <>
      {customer?.orders?.nodes.map((order) => {
        const customerOrder = getFragmentData(orderFragment, order);

        return (
          <OrderSummary
            className="border p-4 sm:p-8"
            dictionary={dictionary}
            customerOrder={customerOrder}
            key={customerOrder.id}
            lang={lang}
          />
        );
      })}
    </>
  );
}
