import { Image } from "@/components/image";
import {
  NukaCarousel,
  type NukaCarouselProps,
} from "@/components/nuka-carousel";
import { minWidthLg, minWidthSm } from "@/lib/tailwind";
import { getPage } from "@uncnsrdlabel/graphql-shopify-storefront/utilities";
import { clsx } from "clsx";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function HomepageCarousel(props: NukaCarouselProps) {
  const page = await getPage("home");

  if (!page) return notFound();

  const images = page.images;

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
    <Suspense>
      <NukaCarousel
        adaptiveHeight
        autoplay
        autoplayInterval={5000}
        className={clsx(
          `cursor-grab [&.dragging]:cursor-grabbing`,
          props.className,
        )}
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
      >
        {[...images].map((image, index) => (
          <figure className="item relative aspect-3/4" key={image.id || index}>
            <Image
              alt={image.altText}
              className="h-full object-cover"
              fill
              revealEffect={false}
              sizes={`100vw, (min-width: ${minWidthSm}) 50vw, (min-width: ${minWidthLg}) 33vw`}
              src={image.url}
            />
          </figure>
        ))}
      </NukaCarousel>
    </Suspense>
  );
}