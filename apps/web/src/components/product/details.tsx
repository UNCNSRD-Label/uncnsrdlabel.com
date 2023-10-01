"use client";

import { HandleTrackProduct } from "@/components/analytics/handle-track-product";
import { Images } from "@/components/media/images";
import { Videos } from "@/components/media/videos";
import { MetaFields } from "@/components/product/metafields";
import { NavigationMenu } from "@/components/product/navigation-menu";
import { PurchaseOptions } from "@/components/product/purchase-options";
// import { WithVideo } from "@/types/shopify";
import { ProductProvider } from "@shopify/hydrogen-react";
import {
  FragmentType,
  getFragmentData,
  imageFragment,
  productDetailsFragment,
  productMetafieldFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { useRef } from "react";
import { Product as ProductSchema, WithContext } from "schema-dts";

export function ProductDetails({
  productDetailsFragmentRef,
}: {
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const sectionElementRefs = [useRef(null), useRef(null), useRef(null)];

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  const images = product.images.edges.map((edge) => edge?.node);

  const media = product.media.edges.map((edge) => edge?.node);

  const videos = media.filter((node) => node.__typename === "Video");

  const metafieldsFragmentRefs = product.metafields;

  const metafieldFragments = getFragmentData(
    productMetafieldFragment,
    metafieldsFragmentRefs.filter(Boolean),
  );

  const featuredImage = getFragmentData(
    imageFragment,
    product.featuredImage,
  );

  const jsonLd: WithContext<ProductSchema> = {
    "@context": "https://schema.org",
    "@type": "Product",
    identifier: product.id,
    name: product.title,
    image: {
      "@type": "ImageObject",
      about: featuredImage?.altText || product.title,
      height: featuredImage?.height?.toString() ?? undefined,
      url: featuredImage?.url,
      width: featuredImage?.width?.toString() ?? undefined,
    },
    description: product.description,
  };

  return (
    <ProductProvider data={product}>
      <NavigationMenu
        className="fixed inset-x-0 bottom-0 z-10 w-full sm:hidden"
        sectionElementRefs={sectionElementRefs}
      />

      <div className="lg:grid lg:grid-cols-12">
        <div
          className="grid gap-8 lg:col-start-2 lg:col-end-7"
          id="images"
          ref={sectionElementRefs[0]}
        >
          <Images
            className="aspect-2/3 relative w-full overflow-hidden"
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
          <Videos
            className="aspect-2/3 relative w-full lg:w-4/6"
            videos={videos}
          />
        </div>

        <div className="p-6 lg:col-start-8 lg:col-end-12 bg-white h-fit">
          <PurchaseOptions
            id="purchase-options"
            ref={sectionElementRefs[1]}
            product={product}
          />
        </div>

      </div>

      <MetaFields
        metafieldFragments={metafieldFragments}
        className="min-h-[100dvh] pt-24 sm:pt-0"
        id="details"
        ref={sectionElementRefs[2]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="product-jsonld"
      />
      <HandleTrackProduct />
    </ProductProvider>
  );
}
