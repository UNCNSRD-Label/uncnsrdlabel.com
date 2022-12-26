"use client";

import type { CartLine } from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, HTMLAttributes } from "react";
import type { PartialDeep } from "type-fest";

import { Money } from "@shopify/hydrogen-react";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

import {
  IMAGE_ALT_TEXT_FALLBACK,
  IMAGE_TITLE_FALLBACK,
} from "#/lib/constants/messages";
import { theme } from "#/lib/constants/style";

import { getProductURL } from "#/lib/util/url";

import styles from "./index.module.css";

type Props = {
  line: PartialDeep<CartLine, { recurseIntoArrays: true }>;
} & HTMLAttributes<HTMLElement>;

export const Component: FC<Props> = ({ className, line }) => {
  const { id, cost, merchandise, quantity } = line;

  if (!merchandise?.product) {
    return null;
  }

  console.log({ merchandise, quantity });

  const href = getProductURL(merchandise.product);

  return (
    <article
      className={clsx(
        styles.root,
        className,
        "card",
        "card-compact",
        "card-side",
        "p-0"
      )}
      id={id}
    >
      <meta itemProp="identifier" content={id} />
      {merchandise?.image?.url && (
        <Link
          href={href}
          className={clsx(styles.link, "w-2/5")}
          title={merchandise?.product?.title}
        >
          <figure className={clsx(styles.figure, "my-0")}>
            <Image
              alt={merchandise?.image?.altText ?? IMAGE_ALT_TEXT_FALLBACK}
              className={clsx(styles.image)}
              fill
              itemProp="image"
              priority
              sizes={`(max-width: ${theme.screens.xs.max}) 100vw,
                      (max-width: ${theme.screens.md.max}) 50vw,
                      25vw`}
              src={merchandise?.image?.url}
              title={merchandise?.product?.title ?? IMAGE_TITLE_FALLBACK}
            />
            <figcaption className={clsx(styles.figcaption)}>
              Featured image for {merchandise?.product?.title}
            </figcaption>
          </figure>
        </Link>
      )}
      <div
        className={clsx(
          styles.cardBody,
          "grid",
          "gap-2",
          "py-0",
          "content-start"
        )}
      >
        <Link
          href={href}
          className={(styles.link, "link", "link-hover")}
          title={merchandise?.product?.title}
        >
          <h2
            className={clsx(styles.cardTitle, "card-title", "text-xs")}
            itemProp="name"
          >
            {merchandise?.product?.title}
          </h2>
        </Link>
        {merchandise?.title && (
          <span className={clsx(styles.title, "text-xs")}>
            {merchandise.title}
          </span>
        )}
        {quantity && (
          <span className={clsx(styles.quantity, "text-xs")}>
            Quantity: {quantity}
          </span>
        )}
        {cost?.totalAmount && (
          <Money
            className={clsx(styles.price, "text-base")}
            data={cost.totalAmount}
          />
        )}
      </div>
    </article>
  );
};

export default Component;
