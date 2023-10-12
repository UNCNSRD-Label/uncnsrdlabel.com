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
  videoFragment,
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
  const sectionElementRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const imageElementRefs: MutableRefObject<HTMLButtonElement | null>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const videoElementRefs: MutableRefObject<HTMLElement | null>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
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

  const thumbnailClassName =
    "bg-black pointer-events-auto relative my-auto aspect-square w-full overflow-hidden rounded-full shadow";

  return (
    <ProductProvider data={product}>
      <NavigationMenu
        className="fixed inset-x-0 bottom-0 z-50 w-full sm:hidden"
        sectionElementRefs={sectionElementRefs}
      />

      <section className="grid min-h-[100dvh] grid-cols-12 content-center lg:h-[100dvh]">
        <div
          className="relative z-0 col-span-full grid w-full snap-both snap-mandatory grid-flow-col overflow-x-scroll scroll-smooth lg:fixed lg:inset-0"
          id="images"
          ref={sectionElementRefs[0]}
        >
          <Images
            className={mediaClassName}
            idPrefix="image"
            images={images}
            imageElementRefs={imageElementRefs}
            sizes="(max-width: 639px) 100vw, 50vw"
          />

          <Videos
            className={mediaClassName}
            idPrefix="video"
            videoElementRefs={videoElementRefs}
            videos={videos}
          />

          <Images
            className={cn(mediaClassName, "hidden lg:grid")}
            idPrefix="suffix"
            images={images}
            sizes="(max-width: 639px) 100vw, 50vw"
          />

          <nav className="pointer-events-none fixed left-8 top-0 z-30 hidden h-full w-16 grid-flow-row content-center gap-4 lg:grid">
            {images.map((image, index) => (
              <Link
                className={thumbnailClassName}
                href={`#image-${index}`}
                key={image.id}
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
            {videos.map((videoFragmentRef, index) => {
              const video = getFragmentData(videoFragment, videoFragmentRef);

              return video.__typename === "Video" ? (
                <Link
                  className={thumbnailClassName}
                  href={`#video-${index}`}
                  key={video.id}
                  onClick={(event) => {
                    event.preventDefault();
                    console.log(videoElementRefs?.[index].current, video.id);
                    videoElementRefs?.[index].current?.scrollIntoView({
                      block: "start",
                      inline: "start",
                    });
                  }}
                >
                  {video.previewImage?.url && (
                    <Image
                      alt={video?.previewImage?.altText ?? product.title}
                      fill
                      sizes="5vw"
                      src={video.previewImage?.url}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  )}
                </Link>
              ) : null;
            })}
          </nav>
        </div>

        <div
          className="relative z-10 col-span-full grid h-fit p-6 pt-20 sm:pt-6 sm:col-start-3 sm:col-end-11 lg:-top-12 lg:col-start-7 lg:col-end-12 lg:rounded-xl lg:bg-white/90 lg:shadow lg:backdrop-blur lg:backdrop-saturate-50 xl:col-start-9"
          id="purchase-options"
        >
          <PurchaseOptions ref={sectionElementRefs[1]} product={product} />
        </div>
      </section>

      <section className="gap-4 lg:gap-32 grid h-fit bg-white/90 lg:backdrop-blur grid-cols-12 pb-4 pt-12 sm:pb-12">
        <MetaFields
          className="col-start-2 col-end-12 lg:col-end-7"
          excludedKeys={["complementary_products"]}
          metafieldFragments={metafieldFragments}
          ref={sectionElementRefs[2]}
        />
        <MetaFields
          className="col-start-2 lg:col-start-7 col-end-12"
          includedKeys={["complementary_products"]}
          metafieldFragments={metafieldFragments}
          ref={sectionElementRefs[2]}
        />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="product-jsonld"
      />

      <HandleTrackProduct />
    </ProductProvider>
  );
}
