"use client";

import type {
  StorefrontImage,
  StorefrontProduct,
  StorefrontProductVariant,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { PartialDeep } from "type-fest";

import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import {
  IMAGE_ALT_TEXT_FALLBACK,
  IMAGE_TITLE_FALLBACK,
} from "#/lib/constants/messages";
import { theme } from "#/lib/constants/style";

import styles from "./index.module.css";

type Props = {
  // data: Pick<StorefrontProduct, "handle" | "id" | "publishedAt" | "title"> & {
  //   variants: {
  //     nodes: Array<
  //       Pick<StorefrontProductVariant, "id"> & {
  //         image?: Partial<StorefrontImage> | null;
  //       }
  //     >;
  //   };
  // };
  data: PartialDeep<StorefrontProduct>;
} & React.HTMLAttributes<HTMLElement>;

export const Component: FC<Props> = ({ className, data }) => {
  const { handle, id, publishedAt, title, variants } = data;

  const image = variants.nodes?.[0].image;

  return (
    <article
      className={clsx(styles.root, className)}
      itemScope
      itemType="https://schema.org/Product"
    >
      <meta itemProp="datePublished" content={publishedAt} />
      <meta itemProp="identifier" content={id} />
      <Link href={`products/${handle}`} className={styles.link} title={title}>
        <header className={clsx(styles.header)}>
          <h2 className={clsx(styles.heading)} itemProp="name">
            {title}
          </h2>
        </header>
        {image && (
          <figure className={clsx(styles.figure)}>
            <Image
              alt={image.altText ?? IMAGE_ALT_TEXT_FALLBACK}
              className={clsx(styles.image)}
              fill
              itemProp="image"
              priority
              sizes={`(max-inline-size: ${theme.screens.xs.max}) 100vw,
                      (max-inline-size: ${theme.screens.md.max}) 50vw,
                      25vw`}
              src={image.url}
              title={title ?? IMAGE_TITLE_FALLBACK}
            />
            <figcaption className={clsx(styles.figcaption)}>
              Featured image for {title}
            </figcaption>
          </figure>
        )}
      </Link>
      <footer>
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <span itemProp="priceCurrency" content="USD">
            $
          </span>
          <span itemProp="price" content="1000.00">
            1,000.00
          </span>
          <link itemProp="availability" href="https://schema.org/InStock" />
          In stock
        </div>
      </footer>
    </article>
  );
};

export default Component;
