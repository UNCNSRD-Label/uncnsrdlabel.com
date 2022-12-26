"use client";

import type {
  Page,
  Product,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, ReactNode } from "react";
import type { PartialDeep } from "type-fest";

import { useProduct, ProductPrice, Metafield } from "@shopify/hydrogen-react";
import { clsx } from "clsx";
import Error from "next/error";
import Image from "next/image";
import Link from "next/link";
import getDataURL from "placeholder-image-data-url";
import { useEffect, useState } from "react";
import slugify from "slugify";

import ProductForm from "#/components/ProductForm";

import { getColorHexCodeByName } from "#/lib/util/GraphQL";

import styles from "./index.module.css";

type Props = {
  className?: ReactNode;
  path: string;
  product: PartialDeep<Product, { recurseIntoArrays: true }>;
};

export const Component: FC<Props> = ({ className, path, product }) => {
  const { selectedOptions, variants } = useProduct();

  const [blurDataURL, setBlurDataURL] = useState<string>();
  const [colorImageUrl, setColorImageUrl] = useState<string>();
  const [showFallbackTexture, setShowFallbackTexture] =
    useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const hexCode =
        selectedOptions?.Color &&
        variants &&
        getColorHexCodeByName(selectedOptions?.Color, variants);

      if (hexCode == null) {
        return null;
      }

      const colorDataURL = await getDataURL(500, 500, "", hexCode);

      setBlurDataURL(colorDataURL);
      setColorImageUrl(colorDataURL);
      setShowFallbackTexture(true);
    })();

    (async () => {
      if (selectedOptions?.Color) {
        const imageTextureURL = `https://cdn.shopify.com/s/files/1/0691/0305/9266/files/${selectedOptions?.Color?.replaceAll(
          " ",
          "_"
        )}.png?v=1670885992`;

        const request = new Request(imageTextureURL);

        const response = await fetch(request);

        if (response.status === 200) {
          setColorImageUrl(imageTextureURL);
          setShowFallbackTexture(false);
        }
      }
    })();
  }, [selectedOptions?.Color, variants]);

  if (!product) {
    return <Error statusCode={404} />;
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
          {product.productType && (
            <Link
              href={`/categories/${slugify(product.productType, {
                lower: true,
              })}`}
              className={styles.categoryLink}
              title="Go to category page"
            >
              {product.productType}
            </Link>
          )}
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
          <div className={clsx("collapse-content")}>
            <div
              className={clsx(
                styles.effectFabricSample,
                "effectFabricSample",
                showFallbackTexture && "effectFabricTexture"
              )}
            >
              {colorImageUrl && (
                <Image
                  alt="Color swatch as used for the product"
                  blurDataURL={blurDataURL}
                  className={clsx()}
                  height={500}
                  src={colorImageUrl}
                  // unoptimized={showFallbackTexture}
                  width={500}
                />
              )}
            </div>
          </div>
        </section>
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
