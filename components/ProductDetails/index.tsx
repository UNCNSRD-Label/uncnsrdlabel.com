"use client";

import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, ReactNode, RefObject } from "react";
import type { PartialDeep } from "type-fest";

import { ProductProvider } from "@shopify/hydrogen-react";
import { clsx } from "clsx";

import AdditionalMediaGallery from "#/components/AdditionalMediaGallery";
import FeaturedMediaGallery from "#/components/FeaturedMediaGallery";
import ProductSidebar from "#/components/ProductSidebar";

import styles from "./index.module.css";

type Props = {
  className?: ReactNode;
  path: string;
  product: PartialDeep<Product, { recurseIntoArrays: true }>;
  scrollingElement: RefObject<HTMLDivElement>;
};

export const Component: FC<Props> = ({
  className,
  path,
  product,
  scrollingElement,
}) => {
  if (!product) {
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

  return (
    <ProductProvider data={product}>
      <article className={clsx(styles.article, className)}>
        <FeaturedMediaGallery
          className={clsx(styles.featuredMediaGallery)}
          product={product}
          scrollingElement={scrollingElement}
        />
        <ProductSidebar path={path} product={product} />
        <AdditionalMediaGallery
          className={clsx(styles.featuredMediaGallery)}
          product={product}
          scrollingElement={scrollingElement}
        />
      </article>
    </ProductProvider>
  );
};

export default Component;
