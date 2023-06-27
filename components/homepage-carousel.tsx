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

  const slidesToShow = 4;

  return (
    <Suspense>
      <NukaCarousel
        adaptiveHeight
        autoplay
        autoplayInterval={5000}
        className={clsx(
          `h-[calc(100dvw_/_${slidesToShow})_*_4)] w-full`,
          props.className
        )}
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
