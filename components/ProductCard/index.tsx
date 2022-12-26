"use client";

import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, HTMLAttributes } from "react";
import type { PartialDeep } from "type-fest";

import { ProductPrice } from "@shopify/hydrogen-react";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "react-schemaorg";

import {
  IMAGE_ALT_TEXT_FALLBACK,
  IMAGE_TITLE_FALLBACK,
} from "#/lib/constants/messages";
import { theme } from "#/lib/constants/style";

import { mapProductGraphQLtoSchemaOrg } from "#/lib/util/schema.org";
import { getProductURL } from "#/lib/util/url";

import styles from "./index.module.css";

type Props = {
  className?: string;
  product: PartialDeep<Product, { recurseIntoArrays: true }>;
} & HTMLAttributes<HTMLElement>;

export const Component: FC<Props> = ({ className, product }) => {
  const productModel = mapProductGraphQLtoSchemaOrg(product);

  return (
    <article
      className={clsx(styles.article, className, "card", "card-compact")}
    >
      {/* <JsonLd<typeof productModel>
        item={mapProductGraphQLtoSchemaOrg(product)}
      /> */}
      <Link
        href={getProductURL(product)}
        className={clsx(styles.link, "imageLink")}
        title={product.title}
      >
        {product.featuredImage?.url && (
          <figure className={clsx(styles.figure)}>
            <Image
              alt={product.featuredImage?.altText ?? IMAGE_ALT_TEXT_FALLBACK}
              className={clsx(styles.image)}
              fill
              priority
              sizes={`(max-width: ${theme.screens.xs.max}) 100vw,
                      (max-width: ${theme.screens.md.max}) 50vw,
                      25vw`}
              src={product.featuredImage?.url}
              title={product.title ?? IMAGE_TITLE_FALLBACK}
            />
            <figcaption className={clsx(styles.figcaption)}>
              Featured image for {product.title}
            </figcaption>
          </figure>
        )}
      </Link>
      <div className="card-body">
        <header className={clsx(styles.header)}>
          <h2 className={clsx(styles.heading, "card-title")}>
            {product.title}
          </h2>
          <ProductPrice className={clsx(styles.price)} data={product} />
        </header>
        {/* <menu className={clsx(styles.menu, "card-actions", "justify-end")}>
          <Link
            href={`products/${handle}`}
            className={(styles.link, "link", "link-hover")}
            title={title}
          >
            Shop Now
          </Link>
        </menu> */}
      </div>
    </article>
  );
};

export default Component;
