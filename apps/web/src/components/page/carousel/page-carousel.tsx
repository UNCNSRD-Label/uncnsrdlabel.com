"use client";

import { LoadingDots } from "@/components/loading/dots";
import { Image } from "@/components/media/image";
import {
  NukaCarousel,
  type NukaCarouselProps,
} from "@/components/nuka-carousel";
import { minWidthLg, minWidthSm } from "@/lib/tailwind";
import {
  getFragmentData,
  getPageQuery,
  imageFragment,
  pageFragment,
  useGetShopifyGraphQL,
} from "@uncnsrdlabel/graphql-shopify-storefront/client";
import { Suspense } from "react";

export function PageCarousel({
  handle,
  ...props
}: NukaCarouselProps & { handle: string }) {
  const variables = { handle };

  const { data } = useGetShopifyGraphQL(getPageQuery, variables);

  if (!data) return null;

  const { page: pageFragmentRef } = data;

  const page = getFragmentData(pageFragment, pageFragmentRef);

  if (!page) return null;

  const mediaImages = page.mediaImages?.references?.edges.map(
    (edge) => edge?.node,
  );

  const buttonClassName =
    "!px-6 text-6xl drop-shadow focus-visible:!text-stateFocus hover:!text-stateHover";

  const buttonStyle = {
    backgroundColor: "unset",
    color: "unset",
    opacity: "unset",
    padding: "unset",
  };

  const pagingDotsClassName =
    "[&_.paging-dot]:h-4 [&_.paging-dot]:w-4 !fill-inherit stroke-none mix-blend-difference";
  const pagingDotsContainerClassName = "gap-8 [&_.active]:!fill-stateFocus";
  const pagingDotsStyle = {
    display: "none",
    opacity: "!opacity-100",
  };

  return (
    <Suspense fallback={<LoadingDots />}>
      <NukaCarousel
        adaptiveHeight
        autoplay
        autoplayInterval={5000}
        className="cursor-grab [&.dragging]:cursor-grabbing"
        defaultControlsConfig={{
          nextButtonClassName: buttonClassName,
          nextButtonText: "›",
          nextButtonStyle: buttonStyle,
          prevButtonClassName: buttonClassName,
          prevButtonStyle: buttonStyle,
          prevButtonText: "‹",
          pagingDotsClassName,
          pagingDotsContainerClassName,
          pagingDotsStyle,
        }}
        enableKeyboardControls
        pauseOnHover
        speed={1500}
        wrapAround
        {...props}
      >
        {mediaImages?.map((mediaImage, index) => {
          if (mediaImage.__typename !== "MediaImage") {
            return null;
          }

          const image = getFragmentData(imageFragment, mediaImage.image);

          if (!image) {
            return null;
          }

          return (
            <figure
              className="item aspect-3/4 relative"
              key={image.url || index}
            >
              <Image
                alt={image.altText || page.title}
                className="h-full object-cover"
                fill
                revealEffect={false}
                sizes={`100vw, (min-width: ${minWidthSm}) 50vw, (min-width: ${minWidthLg}) 33vw`}
                src={image.url}
              />
            </figure>
          );
        })}
      </NukaCarousel>
    </Suspense>
  );
}
