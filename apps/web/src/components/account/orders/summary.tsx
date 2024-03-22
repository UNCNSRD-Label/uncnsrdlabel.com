"use client";

import { Price } from "@/components/price";
import { createIntl } from "@formatjs/intl";
import { type ResultOf } from "@graphql-typed-document-node/core";
import {
    getFragmentData,
    mailingAddressFragment,
    orderFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { Usable, use } from "react";
import { type ResolvedIntlConfig } from "react-intl";

export function OrderSummary({
  className,
  dictionary,
  lang,
  customerOrder,
}: {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Navigator['language'];
  customerOrder: ResultOf<typeof orderFragment>;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const shippingAddress = getFragmentData(
    mailingAddressFragment,
    customerOrder.shippingAddress,
  );

  return (
    <article className={cn("grid gap-4", className)}>
      <header className="flex justify-between gap-4 border-b pb-8">
        <h2 className="mb-4 text-xl text-gray-500">
          Order ID: <span className="text-dark">{customerOrder.name}</span>
        </h2>
        <div>
          <span className="text-base text-gray-500">
            Order date:{" "}
            <span className="text-dark">
              {new Date(customerOrder.processedAt).toLocaleDateString()}
            </span>
          </span>
        </div>
      </header>
      <section className="grid justify-between gap-x-4 border-b pb-8 sm:grid-cols-[2fr_3fr]">
        <h3 className="mb-2 mt-4 text-lg sm:col-span-full">
          {intl.formatMessage({
            id: "component.OrderSummary.delivery",
          })}
        </h3>
        <section>
          <h4 className="mb-2 mt-4 capitalize">
            {intl.formatMessage({
              id: "component.OrderSummary.status",
            })}
          </h4>
          <span className="text-sm">{customerOrder.fulfillmentStatus}</span>
        </section>
        <section>
          <h4 className="mb-2 mt-4 capitalize">
            {intl.formatMessage({
              id: "component.OrderSummary.address",
            })}
          </h4>
          <address className="text-sm">
            <ul>
              {shippingAddress?.formatted.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </address>
        </section>
      </section>
      <section className="grid justify-between gap-x-4 border-b pb-8 sm:grid-cols-[2fr_3fr]">
        <h3 className="mb-2 mt-4 text-lg sm:col-span-full">
          {intl.formatMessage({
            id: "component.OrderSummary.payment",
          })}
        </h3>
        <section>
          <h4 className="mb-2 mt-4 capitalize">
            {intl.formatMessage({
              id: "component.OrderSummary.status",
            })}
          </h4>
          <span className="text-sm">{customerOrder.financialStatus}</span>
        </section>
        <section>
          <h4 className="mb-2 mt-4 capitalize">
            {intl.formatMessage({
              id: "component.OrderSummary.summary",
            })}
          </h4>
          <table className="w-full text-start text-sm">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Subtotal Price</th>
                <td>
                  {customerOrder.subtotalPrice && (
                    <Price
                      amount={customerOrder.subtotalPrice.amount}
                      currencyCode={customerOrder.subtotalPrice.currencyCode}
                      lang={lang}
                    />
                  )}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Total Price</th>
                <td>
                  {customerOrder.currentTotalPrice && (
                    <Price
                      amount={customerOrder.currentTotalPrice.amount}
                      currencyCode={
                        customerOrder.currentTotalPrice.currencyCode
                      }
                      lang={lang}
                    />
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </section>
      </section>

      <footer className="grid grid-flow-col justify-end gap-4">
        {!!customerOrder.customerUrl && (
          <a className="text-sm" href={customerOrder.customerUrl}>
            {intl.formatMessage({
              id: "component.OrderSummary.actions.viewOrder",
            })}
          </a>
        )}
        {!!customerOrder.statusUrl && (
          <a className="text-sm" href={customerOrder.statusUrl}>
            {intl.formatMessage(
              {
                id: "component.OrderSummary.actions.trackOrderStatus",
              },
              { status: customerOrder.fulfillmentStatus },
            )}
          </a>
        )}
      </footer>
    </article>
  );
}
