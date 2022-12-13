"use client";

import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, HTMLAttributes, RefObject } from "react";
import type { PartialDeep } from "type-fest";

import { clsx } from "clsx";
import Image from "next/image";

import {
  IMAGE_ALT_TEXT_FALLBACK,
  IMAGE_TITLE_FALLBACK,
} from "#/lib/constants/messages";
import { theme } from "#/lib/constants/style";

import styles from "./index.module.css";

type Props = {
  // TODO: Pass images and titles properties only so component can be used for other content types
  product: PartialDeep<Product, { recurseIntoArrays: true }>;
  scrollingElement: RefObject<HTMLElement>;
} & HTMLAttributes<HTMLElement>;

export const Component: FC<Props> = ({ className, product }) => {
  return (
    <section className={clsx(styles.root)}>
      {product.images?.nodes
        ?.slice(2)
        ?.filter(Boolean)
        .map((image, index) => {
          if (!image?.url) {
            return;
          }
          return (
            <figure key={index} className={clsx(styles.figure)}>
              <Image
                alt={image?.altText ?? IMAGE_ALT_TEXT_FALLBACK}
                className={clsx(styles.image)}
                fill
                priority
                sizes={`(max-width: ${theme.screens.xs.max}) 100vw,
                  25vw`}
                src={image.url}
                title={product.title ?? IMAGE_TITLE_FALLBACK}
              />
              <figcaption className={clsx(styles.figcaption)}>
                Additional image for {product.title}
              </figcaption>
            </figure>
          );
        })}
    </section>
  );
};

export default Component;
