"use client";

import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, HTMLAttributes } from "react";
import type { PartialDeep } from "type-fest";

import { ProductPrice } from "@shopify/hydrogen-react";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

import {
  IMAGE_ALT_TEXT_FALLBACK,
  IMAGE_TITLE_FALLBACK,
} from "#/lib/constants/messages";
import { theme } from "#/lib/constants/style";

import styles from "./index.module.css";

type Props = {
  product: PartialDeep<Product, { recurseIntoArrays: true }>;
} & HTMLAttributes<HTMLElement>;

export const Component: FC<Props> = ({ className, product }) => {
  const { featuredImage, handle, id, publishedAt, title, variants } = product;

  const image = featuredImage;

  return (
    <article
      className={clsx(styles.root, className, "card")}
      itemScope
      itemType="https://schema.org/Product"
    >
      <meta itemProp="datePublished" content={publishedAt} />
      <meta itemProp="identifier" content={id} />
      <Link href={`products/${handle}`} className={styles.link} title={title}>
        {image?.url && (
          <figure className={clsx(styles.figure)}>
            <Image
              alt={image?.altText ?? IMAGE_ALT_TEXT_FALLBACK}
              className={clsx(styles.image)}
              fill
              itemProp="image"
              priority
              sizes={`(max-width: ${theme.screens.xs.max}) 100vw,
                      (max-width: ${theme.screens.md.max}) 50vw,
                      25vw`}
              src={image?.url}
              title={title ?? IMAGE_TITLE_FALLBACK}
            />
            <figcaption className={clsx(styles.figcaption)}>
              Featured image for {title}
            </figcaption>
          </figure>
        )}
      </Link>
      <div className="card-body">
        <header className={clsx(styles.header)}>
          <h2 className={clsx(styles.heading, "card-title")} itemProp="name">
            {title}
          </h2>
          <ProductPrice className={clsx(styles.price)} data={product} />
        </header>
        <menu className={clsx(styles.menu, "card-actions", "justify-end")}>
          <Link
            href={`products/${handle}`}
            className={(styles.link, "link", "link-hover")}
            title={title}
          >
            View
          </Link>
        </menu>
      </div>
    </article>
  );
};

export default Component;
