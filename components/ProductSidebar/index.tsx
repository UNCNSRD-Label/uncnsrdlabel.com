"use client";

import type {
  Page,
  Product,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, ReactNode } from "react";
import type { PartialDeep } from "type-fest";

import { useProduct, ProductPrice, Metafield } from "@shopify/hydrogen-react";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

import ProductForm from "#/components/ProductForm";

import styles from "./index.module.css";

type Props = {
  className?: ReactNode;
  path: string;
  product: PartialDeep<Product, { recurseIntoArrays: true }>;
};

const imageColorLoader = ({ src }: { src: string }) => {
  return `https://cdn.shopify.com/s/files/1/0691/0305/9266/files/${src}.png?v=1670885992`;
};

export const Component: FC<Props> = ({ className, path, product }) => {
  const { selectedOptions, selectedVariant } = useProduct();

  console.log({ selectedVariant });

  if (!product) {
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

  return (
    <div className={clsx(styles.root)}>
      <section className={clsx(styles.details)}>
        <header
          className={clsx(
            styles.header,
            "prose",
            "prose-xs",
            "prose-h1:mb-0",
            "max-w-none"
          )}
        >
          <Link
            href={`/categories/${product.productType}`}
            className={styles.categoryLink}
            title="Go to category page"
          >
            {product.productType}
          </Link>
          <h1 className={clsx(styles.title)}>{product.title}</h1>
          <ProductPrice className={clsx(styles.price)} data={product} />
        </header>
        <ProductForm path={path} product={product} />
        {product.descriptionHtml && (
          <section
            className={clsx(
              styles.section,
              styles.sectionDescription,
              "prose",
              "prose-xs",
              "max-w-none"
            )}
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />
        )}
        {selectedOptions?.Color && (
          <section
            className={clsx(
              styles.section,
              styles.sectionColor,
              "collapse",
              "collapse-plus"
            )}
            tabIndex={0}
          >
            <div className="collapse-title text-base">Color</div>
            <div className="collapse-content">
              <Image
                loader={imageColorLoader}
                src={selectedOptions?.Color?.replaceAll(" ", "_")}
                alt="Color swatch as used for the product"
                width={500}
                height={500}
              />
            </div>
          </section>
        )}
        {product.metafields
          ?.filter(Boolean)
          ?.filter((metafield) => typeof metafield?.key === "string")
          ?.sort((a, b) => a!.key!.localeCompare(b!.key!))
          .map((metafield, index) => (
            <section
              className={clsx(
                styles.section,
                styles.sectionSizing,
                "collapse",
                "collapse-plus"
              )}
              key={index}
              tabIndex={0}
            >
              <div className="collapse-title text-base">
                {metafield?.key
                  ?.split("_")
                  .map(
                    (word: string) =>
                      word.charAt(0).toUpperCase() + word.slice(1)
                  )
                  .join(" ")}
              </div>
              <div className={clsx("collapse-content", "prose", "prose-xs")}>
                {metafield?.type === "page_reference" ? (
                  <>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: (metafield?.reference as Page)?.body,
                      }}
                    />
                    {/* <br />
                        <Link
                          href={`/${(metafield?.reference as Page)?.handle}`}
                        >
                          View page
                        </Link> */}
                  </>
                ) : (
                  <Metafield data={metafield!} />
                )}
              </div>
            </section>
          ))}
        <footer></footer>
      </section>
    </div>
  );
};

export default Component;
