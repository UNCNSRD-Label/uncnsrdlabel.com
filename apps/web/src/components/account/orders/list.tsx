"use client";

import { Price } from "@/components/price";
import { createIntl } from "@formatjs/intl";
import { parseGid } from "@shopify/hydrogen";
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
  customerFragment,
  customerQuery,
  getFragmentData,
  getShopifyGraphQL,
  mailingAddressFragment,
  orderFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getQueryKey } from "@uncnsrdlabel/lib";
import { getCookie } from "cookies-next";
import { Usable, use } from "react";
import { type ResolvedIntlConfig } from "react-intl";

export function Orders({
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

  const queryKey = getQueryKey(customerQuery, variables);

  const { data } = useQuery({
    enabled: !!customerAccessToken,
    queryKey,
    queryFn: () => getShopifyGraphQL(customerQuery, variables),
  });

  const customer = getFragmentData(customerFragment, data?.customer);

  return (
    <Card className={className}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          {intl.formatMessage({
            id: "component.Orders.card.title",
          })}
        </CardTitle>
        <CardDescription>
          {intl.formatMessage({
            id: "component.Orders.card.description",
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <menu>
          {customer?.orders?.nodes.map((order) => {
            const customerOrder = getFragmentData(orderFragment, order);

            const customerOrderId = customerOrder.id.split("?").shift();

            const { id } = parseGid(customerOrderId);

            const shippingAddress = getFragmentData(
              mailingAddressFragment,
              customerOrder.shippingAddress,
            );

            return (
              <li className="grid gap-4 border-b py-8" key={id}>
                <h2>Order {customerOrder.name}</h2>
                <address className="text-sm">
                  <ul>
                    {shippingAddress?.formatted.map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                  </ul>
                </address>
                {customerOrder.subtotalPrice && (
                  <Price
                    amount={customerOrder.subtotalPrice.amount}
                    currencyCode={customerOrder.subtotalPrice.currencyCode}
                    lang={lang}
                  />
                )}
                <Price
                  amount={customerOrder.currentTotalPrice.amount}
                  currencyCode={customerOrder.currentTotalPrice.currencyCode}
                  lang={lang}
                />
                <span>Status: {customerOrder.financialStatus}</span>
                <a href={customerOrder.statusUrl}>
                  {customerOrder.fulfillmentStatus}
                </a>
                {/* {customerOrder.totalRefunded.amount && (
                  <Price
                    amount={customerOrder.totalRefunded.amount}
                    currencyCode={customerOrder.totalRefunded.currencyCode}
                    lang={lang}
                  />
                )} */}
                {/* {customerOrder.successfulFulfillments?.map(
                  (fulfillment) => fulfillment.trackingCompany,
                )} */}
                <div className="mt-8 grid grid-flow-col justify-end gap-4">
                  <Link
                    aria-description={`Update ${customerOrder}`}
                    className="text-sm"
                    href={`/account/orders/${id}/update`}
                  >
                    {intl.formatMessage({
                      id: "component.Orders.actions.updateOrder",
                    })}
                  </Link>
                </div>
              </li>
            );
          })}
        </menu>
      </CardContent>
      <CardFooter className="grid grid-flow-col justify-start gap-4 text-sm"></CardFooter>
    </Card>
  );
}
