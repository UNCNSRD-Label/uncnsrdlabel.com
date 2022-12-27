"use client";

import type {
  Page,
  Product,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, ReactNode } from "react";
import type { PartialDeep } from "type-fest";

import { useProduct, Metafield, Money } from "@shopify/hydrogen-react";
import { clsx } from "clsx";
import Error from "next/error";
import Image from "next/image";
import Link from "next/link";
import getDataURL from "placeholder-image-data-url";
import { useEffect, useState } from "react";
import slugify from "slugify";

import ProductCard from "#/components/ProductCard";
import ProductForm from "#/components/ProductForm";

import {
  getColorHexCodeByName,
  getComplementaryProducts,
  getMaterialImage,
} from "#/lib/util/GraphQL";

import styles from "./index.module.css";

type Props = {
  className?: ReactNode;
  path: string;
  product: PartialDeep<Product, { recurseIntoArrays: true }>;
};

export const Component: FC<Props> = ({ className, path, product }) => {
  const { selectedOptions, selectedVariant, variants } = useProduct();

  const [materialImageUrl, setMaterialImageUrl] = useState<string>();
  const [showFallbackTexture, setShowFallbackTexture] =
    useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const materialImage = getMaterialImage(selectedVariant);

      if (materialImage?.url) {
        setMaterialImageUrl(materialImage?.url);
      }
      //  else {
      //   const hexCode =
      //     selectedOptions?.Color &&
      //     variants &&
      //     getColorHexCodeByName(selectedOptions?.Color, variants);

      //   if (hexCode) {
      //     // TODO: Fix dependency of placeholder-image-data-url on canvas@2.10.2 which is huge
      //     // TODO: See https://github.com/zhongdeliu/placeholder-image/blob/master/js/main.js
      //     const colorDataURL = await getDataURL(500, 500, "", hexCode);

      //     setMaterialImageUrl(colorDataURL);
      //     setShowFallbackTexture(true);
      //   }
      // }
    })();
  }, [product.metafields, selectedOptions?.Color, selectedVariant, variants]);

  if (!product) {
    return <Error statusCode={404} />;
  }

  const isOnSale =
    Number.parseFloat(selectedVariant?.price?.amount ?? "0") <
    Number.parseFloat(selectedVariant?.compareAtPrice?.amount ?? "0");

  const complementaryProducts = getComplementaryProducts(selectedVariant);

  const composition = product.metafields?.find(
    (metafield) => metafield?.key === "composition"
  );

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
          <span className="flex items-center justify-center gap-2">
            {selectedVariant?.price && (
              <Money
                as="span"
                className={clsx("text-lg")}
                data={selectedVariant.price}
                withoutTrailingZeros
              />
            )}
            {selectedVariant?.compareAtPrice && isOnSale && (
              <Money
                as="span"
                className={clsx("bg-base-300", "line-through")}
                data={selectedVariant.compareAtPrice}
                withoutTrailingZeros
              />
            )}
          </span>
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
            styles.sectionColorAndComposition,
            "collapse",
            "collapse-plus"
          )}
        >
          <input type="checkbox" defaultChecked />
          <div className={clsx("collapse-title", "text-base")}>
            Material, Color & Composition
          </div>
          <div className={clsx("collapse-content")}>
            <div
              className={clsx(
                styles.effectFabricSample,
                "effectFabricSample",
                showFallbackTexture && "effectFabricTexture"
              )}
              id="effectFabricSample"
            >
              {materialImageUrl && (
                <Image
                  alt="Color swatch as used for the product"
                  className={clsx()}
                  height={500}
                  src={materialImageUrl}
                  width={500}
                />
              )}
            </div>
            {composition && (
              <div className={clsx(styles.composition)}>
                <Metafield data={composition} />
              </div>
            )}
          </div>
        </section>
        {product.metafields
          ?.filter(Boolean)
          ?.filter((metafield) => typeof metafield?.key === "string")
          ?.filter(
            (metafield) =>
              ![
                "composition",
                "complementary_products",
                "material_image",
              ].includes(metafield?.key!)
          )
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
            >
              <input type="checkbox" />
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
        <section
          className={clsx(
            styles.section,
            styles.sectionComplementaryProducts,
            "collapse",
            "collapse-plus"
          )}
        >
          <input type="checkbox" defaultChecked />
          <div className={clsx("collapse-title", "text-base")}>
            Complementary Products
          </div>
          <div className={clsx("collapse-content", "not-prose")}>
            {complementaryProducts?.map((node, index) => (
              <ProductCard
                className={clsx(styles.productCard)}
                key={index}
                product={node}
              />
            ))}
          </div>
        </section>
        <footer></footer>
      </section>
    </div>
  );
};

export default Component;
