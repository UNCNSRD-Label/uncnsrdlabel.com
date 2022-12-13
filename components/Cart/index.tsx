"use client";

import type { CartLine } from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, HTMLAttributes } from "react";

import { useCart } from "@shopify/hydrogen-react";
import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

import CartLineCard from "#/components/CartLineCard";

import styles from "./index.module.css";

type Props = {} & HTMLAttributes<HTMLElement>;

export const Component: FC<Props> = ({ className }) => {
  const { locale } = useRouter();
  const { checkoutUrl, cost, id, lines, totalQuantity } = useCart();

  return (
    <section
      className={clsx(
        styles.root,
        className,
        "grid",
        "gap-4",
        "prose",
        "prose-xs"
      )}
      data-id={id}
    >
      <section className={clsx("divide-y")}>
        <h2>Bag ({totalQuantity})</h2>
        <dl
          className={clsx("grid", "gap-2", "grid-cols-2", "pt-4", styles.cost)}
        >
          {cost?.subtotalAmount?.amount && (
            <>
              <dt>Sub-total</dt>
              <dd>
                {new Intl.NumberFormat(locale, {
                  style: "currency",
                  currency: cost.subtotalAmount.currencyCode,
                }).format(Number.parseInt(cost.subtotalAmount.amount, 10))}
              </dd>
            </>
          )}
          {cost?.totalDutyAmount?.amount && (
            <>
              <dt>Total duty</dt>
              <dd>
                {new Intl.NumberFormat(locale, {
                  style: "currency",
                  currency: cost.totalDutyAmount.currencyCode,
                }).format(Number.parseInt(cost.totalDutyAmount.amount, 10))}
              </dd>
            </>
          )}
          {cost?.totalTaxAmount?.amount && (
            <>
              <dt>Total tax</dt>
              <dd>
                {new Intl.NumberFormat(locale, {
                  style: "currency",
                  currency: cost.totalTaxAmount.currencyCode,
                }).format(Number.parseInt(cost.totalTaxAmount.amount, 10))}
              </dd>
            </>
          )}
          {cost?.totalAmount?.amount && (
            <>
              <dt>Total</dt>
              <dd>
                {new Intl.NumberFormat(locale, {
                  style: "currency",
                  currency: cost.totalAmount.currencyCode,
                }).format(Number.parseInt(cost.totalAmount.amount, 10))}
              </dd>
            </>
          )}
        </dl>
        {checkoutUrl && (
          <Link
            className={clsx(
              styles.action,
              "btn",
              "btn-primary",
              "btn-block",
              "mt-12",
              "mb-8"
            )}
            href={checkoutUrl}
          >
            Checkout
          </Link>
        )}
      </section>
      <section className={clsx("divide-y")}>
        <h3>Products</h3>
        <menu className={clsx("menu", "items-start", "py-4")}>
          {lines?.filter(Boolean)?.map((line, index) => (
            <li key={line?.id ?? index}>
              <CartLineCard line={line as CartLine} />
            </li>
          ))}
        </menu>
      </section>
    </section>
  );
};

export default Component;
