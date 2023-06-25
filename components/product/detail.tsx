"use client";

import { useRef } from "react";

import Price from "components/price";
import { AddToCart } from "components/product/add-to-cart";
import { Images } from "components/product/images";
import { MetaFields } from "components/product/metafields";
import { NavigationMenu } from "components/product/navigation-menu";
import { VariantSelector } from "components/product/variant-selector";
import Prose from "components/prose";
import { Image, Product } from "lib/shopify/types";

export function ProductDetail({
  className,
  product,
}: {
  className?: string;
  product: Product;
}) {
  // const sectionElements = ["Images", "Purchase Options", "Details"];
  const sectionElementRefs = [useRef(null), useRef(null), useRef(null)];

  return (
    <>
      <NavigationMenu
        className="fixed inset-x-0 bottom-0 z-10 w-full"
        // sectionElements={sectionElements}
        sectionElementRefs={sectionElementRefs}
      />
      <div className="dark:bg-black dark:text-white">
        <div className="lg:grid lg:grid-cols-6">
          <div
            className="grid lg:col-span-4"
            id="images"
            ref={sectionElementRefs[0]}
          >
            <Images
              images={product.images.map((image: Image) => ({
                src: image.url,
                altText: image.altText,
              }))}
              sizes="(max-width: 639px) 100vw, 66vw"
            />
          </div>

          <div className="p-6 lg:col-span-2">
            <div
              className="sticky pt-24 sm:top-24 sm:pt-0"
              id="purchase-options"
              ref={sectionElementRefs[1]}
            >
              <div className="mb-16">
                <h3
                  data-testid="product-name"
                  className="box-decoration-clone text-lg uppercase"
                >
                  {product.title}
                </h3>
                <Price
                  className="text-sm font-semibold"
                  amount={product.priceRange.maxVariantPrice.amount}
                  currencyCode={product.priceRange.maxVariantPrice.currencyCode}
                />
              </div>

              <VariantSelector
                options={product.options}
                variants={product.variants}
              />

              {product.descriptionHtml ? (
                <Prose
                  className="mb-6 text-sm leading-tight"
                  html={product.descriptionHtml}
                />
              ) : null}

              <AddToCart
                variants={product.variants}
                availableForSale={product.availableForSale}
              />

              <MetaFields
                metafields={product.metafields}
                className="min-h-[100dvh] pt-24 sm:pt-0"
                id="details"
                ref={sectionElementRefs[2]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
