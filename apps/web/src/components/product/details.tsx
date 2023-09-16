"use client";

import { HandleTrackProduct } from "@/components/analytics/handle-track-product";
import { Images } from "@/components/product/images";
import { MetaFields } from "@/components/product/metafields";
import { NavigationMenu } from "@/components/product/navigation-menu";
import { PurchaseOptions } from "@/components/product/purchase-options";
import { Videos } from "@/components/product/videos";
import { WithVideo } from "@/types/shopify";
import { ResultOf } from "@graphql-typed-document-node/core";
import { ProductProvider } from "@shopify/hydrogen-react";
import {
  getFragmentData,
  imageFragment,
  mediaFragment,
  productDetailsFragment,
  productMetafieldFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { useRef } from "react";

export function ProductDetails({
  product,
}: {
  product: ResultOf<typeof productDetailsFragment>;
}) {
  const sectionElementRefs = [useRef(null), useRef(null), useRef(null)];

  const images = product.images.edges.map((edge) => edge?.node);

  const media = product.media.edges.map((edge) => edge?.node);

  const videos = media
    .map((mediaFragmentRef) => getFragmentData(mediaFragment, mediaFragmentRef))
    .filter((node): node is WithVideo => node?.__typename === "Video");

  const metafieldsFragmentRefs = product.metafields;

  const metafieldFragments = getFragmentData(
    productMetafieldFragment,
    metafieldsFragmentRefs.filter(Boolean),
  );

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
              images={images
                .map((imageFragmentRef) =>
                  getFragmentData(imageFragment, imageFragmentRef),
                )
                .map((image, index) => ({
                  altText: image.altText ?? product.title,
                  id: image.id ?? `image-${index}`,
                  src: image.url,
                }))}
              sizes="(max-width: 639px) 100vw, 66vw"
            />
            <Videos videos={videos} />
          </div>

          <div className="p-6 lg:col-span-2">
            <div className="sticky sm:top-24">
              <PurchaseOptions
                id="purchase-options"
                ref={sectionElementRefs[1]}
                product={product}
              />

              <MetaFields
                metafieldFragments={metafieldFragments}
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
