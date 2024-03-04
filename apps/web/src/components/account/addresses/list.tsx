"use client";

import { AddressSummary } from "@/components/account/addresses/summary";
import { createIntl } from "@formatjs/intl";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  customerFragment,
  customerQuery,
  getFragmentData,
  getShopifyGraphQL,
  mailingAddressFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getQueryKey } from "@uncnsrdlabel/lib";
import { getCookie } from "cookies-next";
import { Usable, use } from "react";
import { type ResolvedIntlConfig } from "react-intl";

export function Addresses({
  dictionary,
  lang,
}: {
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

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
      {customer?.addresses?.nodes.map((address) => {
        const mailingAddress = getFragmentData(mailingAddressFragment, address);

        return (
          <AddressSummary
            className="p-4 sm:p-8 border"
            customer={customer}
            dictionary={dictionary}
            key={mailingAddress.id}
            lang={lang}
            mailingAddress={mailingAddress}
            queryKey={queryKey}
          />
        );
      })}
      <footer className="grid grid-flow-col justify-start gap-4 text-sm">
        <Link
          className="btn btn-bg btn-primary btn-base"
          href="/account/addresses/add"
        >
          {intl.formatMessage({
            id: "component.Addresses.actions.add",
          })}
        </Link>
      </footer>
    </>
  );
}
