import clsx from "clsx";
import { NukaCarousel, type NukaCarouselProps } from "components/nuka-carousel";
import { getPage } from "lib/shopify";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function HomepageCarousel(props: NukaCarouselProps) {
  const page = await getPage("home");

  if (!page) return notFound();

  const images = page.images;

  const slidesToShow = 3;

  const buttonClassName =
    "!px-6 text-6xl drop-shadow focus-visible:!text-hotPink hover:!text-hotPink";

  const buttonStyle = {
    backgroundColor: "unset",
    color: "unset",
    opacity: "unset",
    padding: "unset",
  };

  return (
    <Suspense>
      <NukaCarousel
        adaptiveHeight
        autoplay
        autoplayInterval={5000}
        className={clsx(
          `cursor-grab [&.dragging]:cursor-grabbing h-[calc(100dvw_/_${slidesToShow})_*_4)] w-full`,
          props.className
        )}
        defaultControlsConfig={{
          nextButtonClassName: buttonClassName,
          nextButtonText: "›",
          nextButtonStyle: buttonStyle,
          prevButtonClassName: buttonClassName,
          prevButtonStyle: buttonStyle,
          prevButtonText: "‹",
        }}
        enableKeyboardControls
        pauseOnHover
        slidesToShow={slidesToShow}
        speed={1500}
        wrapAround
      >
        {[...images].map((image) => (
          <figure className="item relative aspect-3/4 w-full" key={image.id}>
            <Image
              alt={image.altText}
              className="h-full object-cover"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              src={image.url}
            />
          </figure>
        ))}
      </NukaCarousel>
    </Suspense>
  );
}
