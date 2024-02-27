"use client";

import { createIntl } from "@formatjs/intl";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@uncnsrdlabel/components/atoms/card";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  customerAddressFragment,
  customerFragment,
  getCustomerQuery,
  getFragmentData,
  getShopifyGraphQL,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getQueryKey } from "@uncnsrdlabel/lib";
import { getCookie } from "cookies-next";
import { Usable, use } from "react";
import { type ResolvedIntlConfig } from "react-intl";

export function Addresses({
  className,
  dictionary,
  lang,
}: {
  className?: string;
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

  const queryKey = getQueryKey(getCustomerQuery, variables);

  const { data } = useQuery({
    enabled: !!customerAccessToken,
    queryKey,
    queryFn: () => getShopifyGraphQL(getCustomerQuery, variables),
  });

  const customer = getFragmentData(customerFragment, data?.customer);

  return (
    <Card className={className}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          {intl.formatMessage({
            id: "component.Addresses.card.title",
          })}
        </CardTitle>
        <CardDescription>
          {intl.formatMessage({
            id: "component.Addresses.card.description",
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <menu>
          {customer?.addresses?.nodes.map((address) => {
            const customerAddress = getFragmentData(
              customerAddressFragment,
              address,
            );
            return (
              <li>
                <Link href={`/account/address/${customerAddress.id}`}>
                  {customerAddress.formatted}
                </Link>
              </li>
            );
          })}
        </menu>
      </CardContent>
      <CardFooter className="grid grid-flow-col justify-start gap-4 text-sm">
        <Link className="btn btn-bg btn-primary btn-base" href="/account/address/new">
          {intl.formatMessage({
            id: "component.Addresses.actions.add",
          })}
        </Link>
      </CardFooter>
    </Card>
  );
}
