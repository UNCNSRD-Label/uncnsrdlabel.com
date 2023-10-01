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
import { cn } from "@uncnsrdlabel/lib";
import Image from "next/image";
import Link from "next/link";
import { useRef, type MutableRefObject } from "react";
import { Product as ProductSchema, WithContext } from "schema-dts";

export function ProductDetails({
  productDetailsFragmentRef,
}: {
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const sectionElementRefs = [useRef(null), useRef(null), useRef(null)];

  const imageElementRefs: MutableRefObject<HTMLButtonElement | null>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  const imagesNodes = product.images.edges.map((edge) => edge?.node);

  const images = imagesNodes
    .map((imageFragmentRef) => getFragmentData(imageFragment, imageFragmentRef))
    .map((image, index) => ({
      altText: image.altText ?? product.title,
      id: image.id ?? `image-${index}`,
      src: image.url,
    }));

  const media = product.media.edges.map((edge) => edge?.node);

  const videos = media.filter((node) => node.__typename === "Video");

  const metafieldsFragmentRefs = product.metafields;

  const metafieldFragments = getFragmentData(
    productMetafieldFragment,
    metafieldsFragmentRefs.filter(Boolean),
  );

  const featuredImage = getFragmentData(imageFragment, product.featuredImage);

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

  const mediaClassName =
    "lg:aspect-3/4 min-h-[100dvh] lg:h-[100dvh] overflow-y-clip relative snap-start w-[100dvw] lg:w-auto";

  return (
    <ProductProvider data={product}>
      <NavigationMenu
        className="fixed inset-x-0 bottom-0 z-10 w-full sm:hidden"
        sectionElementRefs={sectionElementRefs}
      />

      <div className="grid min-h-[100dvh] grid-cols-12 content-center lg:h-[100dvh]">
        <div
          className="z-0 col-span-full grid w-full snap-both grid-flow-col overflow-x-scroll scroll-smooth lg:fixed lg:inset-0 relative"
          id="images"
          ref={sectionElementRefs[0]}
        >          
          {/* <Images
            className={cn(mediaClassName, "hidden lg:grid")}
            idPrefix="prefix"
            images={images}
            sizes="(max-width: 639px) 100vw, 50vw"
          />
          <Videos className={cn(mediaClassName, "hidden lg:grid")} videos={videos} /> */}

          <Images
            className={mediaClassName}
            idPrefix="main"
            images={images}
            imageElementRefs={imageElementRefs}
            sizes="(max-width: 639px) 100vw, 50vw"
          />
          <Videos className={mediaClassName} videos={videos} />

          <Images
            className={cn(mediaClassName, "hidden lg:grid")}
            idPrefix="suffix"
            images={images}
            sizes="(max-width: 639px) 100vw, 50vw"
          />
          <Videos className={cn(mediaClassName, "hidden lg:grid")} videos={videos} />

          <nav className="fixed left-8 z-30 hidden lg:grid w-16 grid-flow-row gap-4 top-0 h-full content-center pointer-events-none">
            {images.map((image, index) => (
              <Link
                className="relative aspect-square w-full overflow-hidden rounded-full pointer-events-auto my-auto"
                href={`#main-${index}`}
                onClick={(event) => {
                  event.preventDefault();
                  imageElementRefs?.[index].current?.scrollIntoView({
                    block: "start",
                    inline: "start",
                  });
                }}
              >
                <Image
                  alt={image?.altText}
                  fill
                  sizes="5vw"
                  src={image.src}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Link>
            ))}
          </nav>
        </div>

        <div className="col-span-full relative lg:-top-12 z-10 sm:col-start-3 sm:col-end-11 grid h-fit sm:bg-white/90 p-6 shadow backdrop-blur lg:col-start-8 lg:col-end-12 sm:rounded-xl">
          <PurchaseOptions
            id="purchase-options"
            ref={sectionElementRefs[1]}
            product={product}
          />
        </div>
      </div>

      <div className="relative z-10 h-fit bg-white/90 p-6 backdrop-blur lg:col-span-full">
        <MetaFields
          metafieldFragments={metafieldFragments}
          className="min-h-[100dvh] pt-24 sm:pt-0"
          id="details"
          ref={sectionElementRefs[2]}
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="product-jsonld"
      />

      <HandleTrackProduct />
    </ProductProvider>
  );
}
