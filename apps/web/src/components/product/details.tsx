"use client";

import { HandleTrackProduct } from "@/components/analytics/handle-track-product";
import { Images } from "@/components/product/images";
import { MetaFields } from "@/components/product/metafields";
import { NavigationMenu } from "@/components/product/navigation-menu";
import { PurchaseOptions } from "@/components/product/purchase-options";
import { ProductProvider } from "@shopify/hydrogen-react";
import { Product } from "@shopify/hydrogen/storefront-api-types";
import { useRef } from "react";


export function ProductDetails({ product }: { product: Product }) {
  const sectionElementRefs = [useRef(null), useRef(null), useRef(null)];

  const images = product.images.edges.map((edge) => edge?.node);

  return (
    <ProductProvider data={product}>
      <NavigationMenu
        className="fixed inset-x-0 bottom-0 z-10 w-full sm:hidden"
        sectionElementRefs={sectionElementRefs}
      />
      <div className="mb-48 [&:has(+_aside)]:mb-24">
        <div className="lg:grid lg:grid-cols-6">
          <div
            className="grid justify-items-center lg:col-span-4"
            id="images"
            ref={sectionElementRefs[0]}
          >
            <Images
              images={images.map((image) => ({
                altText: image.altText,
                id: image.id,
                src: image.url,
              }))}
              sizes="(max-width: 639px) 100vw, 66vw"
            />
          </div>

          <div className="p-6 lg:col-span-2">
            <div className="sticky sm:top-24">
              <PurchaseOptions
                id="purchase-options"
                ref={sectionElementRefs[1]}
                product={product}
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
      <HandleTrackProduct />
    </ProductProvider>
  );
}
