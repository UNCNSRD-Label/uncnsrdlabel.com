"use client";

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
  const { checkoutUrl, cost, id, lines } = useCart();

  console.log({ checkoutUrl, cost, id, lines });

  return (
    <section className={clsx(styles.root, className, "grid")}>
      <h2 className={clsx("pb-4")}>Bag</h2>
      <menu className={clsx("menu", "items-start", "pb-4")}>
        {lines?.map((line, index) => (
          <li key={line?.id ?? index}>
            <CartLineCard line={line} />
          </li>
        ))}
      </menu>
      <dl className={clsx("px-4", "pb-4", "grid", "gap-2", styles.cost)}>
        {cost?.subtotalAmount?.amount && (
          <>
            <dt>Sub-total amount</dt>
            <dd>
              {new Intl.NumberFormat(locale, {
                style: "currency",
                currency: cost.subtotalAmount.currencyCode,
              }).format(Number.parseInt(cost.subtotalAmount.amount, 10))}
            </dd>
          </>
        )}
        {cost?.totalAmount?.amount && (
          <>
            <dt>Sub-total amount</dt>
            <dd>
              {new Intl.NumberFormat(locale, {
                style: "currency",
                currency: cost.totalAmount.currencyCode,
              }).format(Number.parseInt(cost.totalAmount.amount, 10))}
            </dd>
          </>
        )}
        {cost?.totalDutyAmount?.amount && (
          <>
            <dt>Sub-total amount</dt>
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
            <dt>Sub-total amount</dt>
            <dd>
              {new Intl.NumberFormat(locale, {
                style: "currency",
                currency: cost.totalTaxAmount.currencyCode,
              }).format(Number.parseInt(cost.totalTaxAmount.amount, 10))}
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
            "justify-self-end"
          )}
          href={checkoutUrl}
        >
          Checkout
        </Link>
      )}
    </section>
  );
};

export default Component;
