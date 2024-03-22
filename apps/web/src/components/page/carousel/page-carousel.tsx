import { Image } from "@/components/media/image";
import { getDictionary } from "@/lib/dictionary";
import { breakpoints } from "@/lib/tailwind";
import { createIntl } from "@formatjs/intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@uncnsrdlabel/components/atoms/carousel";
import {
  getFragmentData,
  imageFragment,
  pageFragment,
  type FragmentType
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { type ResolvedIntlConfig } from "react-intl";

export async function PageCarousel({
  className,
  lang,
  pageFragmentRef,
}: {
  className?: string;
  lang: Navigator['language'];
  pageFragmentRef: FragmentType<typeof pageFragment>;
}) {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const page = getFragmentData(pageFragment, pageFragmentRef);

  if (!page) return null;

  const title = page.title;

  const mediaImages = page.mediaImages?.references?.edges.map(
    (edge) => edge?.node,
  );

  const opts = {
    dragFree: true,
    loop: true,
  };

  return (
    <Carousel className={cn("[&_>_div]:h-full", className)} opts={opts}>
      <CarouselContent className="h-full items-stretch">
        {mediaImages?.map((mediaImage, index) => {
          if (mediaImage.__typename !== "MediaImage") {
            return null;
          }

          const image = getFragmentData(imageFragment, mediaImage.image);

          if (!image) {
            return null;
          }

          return (
            <CarouselItem
              className="relative sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              key={image.url ?? index}
            >
              <Image
                alt={image.altText ?? page.title}
                blurDataURL={image.blurDataURL}
                className="h-full object-cover"
                fill
                revealEffect={false}
                sizes={`(max-width: ${breakpoints.sm.max.toString()}) 100vw, (max-width: ${breakpoints.md.max.toString()}) 50vw, (max-width: ${breakpoints.lg.max.toString()}) 33vw, 25vw`}
                src={image.url}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious
        className={cn("left-4", {
          "md:hidden": mediaImages?.length && mediaImages.length >= 2,
          "lg:hidden": mediaImages?.length && mediaImages.length >= 3,
          "xl:hidden": mediaImages?.length && mediaImages.length >= 4,
        })}
        title={intl.formatMessage(
          { id: "component.MediaViewer.CarouselPrevious" },
          { title },
        )}
      />
      <CarouselNext
        className={cn("right-4", {
          "md:hidden": mediaImages?.length && mediaImages.length >= 2,
          "lg:hidden": mediaImages?.length && mediaImages.length >= 3,
          "xl:hidden": mediaImages?.length && mediaImages.length >= 4,
        })}
        title={intl.formatMessage(
          { id: "component.MediaViewer.CarouselNext" },
          { title },
        )}
      />
    </Carousel>
  );
}
