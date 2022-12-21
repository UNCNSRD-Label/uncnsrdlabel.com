"use client";

import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, ReactNode, RefObject } from "react";
import type { PartialDeep } from "type-fest";

import { ProductProvider } from "@shopify/hydrogen-react";
import { clsx } from "clsx";
import Script from "next/script";
import { Product as ProductSchema } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";

import ProductMediaGallery from "#/components/ProductMediaGallery";
import ProductVariantMediaGallery from "#/components/ProductVariantMediaGallery";
import ProductSidebar from "#/components/ProductSidebar";

import {
  mapProductGraphQLtoSchemaOrg,
  mapProductVariantGraphQLtoSchemaOrg,
} from "#/lib/util/schema.org";

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
      {product.variantBySelectedOptions && (
        <Script
          {...jsonLdScriptProps<ProductSchema>(
            mapProductVariantGraphQLtoSchemaOrg(
              product,
              product.variantBySelectedOptions
            )
          )}
        />
      )}
      <Script
        {...jsonLdScriptProps<ProductSchema>(
          mapProductGraphQLtoSchemaOrg(product)
        )}
      />
      <article className={clsx(styles.article, className)}>
        <ProductVariantMediaGallery
          className={clsx(styles.productVariantMediaGallery)}
          product={product}
          scrollingElement={scrollingElement}
        />
        <ProductSidebar path={path} product={product} />
        <ProductMediaGallery
          className={clsx(styles.productVariantMediaGallery)}
          product={product}
          scrollingElement={scrollingElement}
        />
      </article>
    </ProductProvider>
  );
};

export default Component;
