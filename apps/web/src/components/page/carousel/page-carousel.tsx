import { Image } from "@/components/media/image";
import { breakpoints } from "@/lib/tailwind";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@uncnsrdlabel/components/atoms/carousel";
import {
  getFragmentData,
  getShopifyGraphQL,
  imageFragment,
  pageFragment,
  pageQuery,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";

export async function PageCarousel({
  className,
  handle,
}: {
  className?: string;
  handle: string;
}) {
  const variables = { handle };

  const { page: pageFragmentRef } = await getShopifyGraphQL(
    pageQuery,
    variables,
  );

  const page = getFragmentData(pageFragment, pageFragmentRef);

  if (!page) return null;

  const mediaImages = page.mediaImages?.references?.edges.map(
    (edge) => edge?.node,
  );

  const opts = {
    dragFree: true,
    loop: true,
  };

  return (
    <Carousel className={cn("items-stretch", className)} opts={opts}>
      <CarouselContent className="items-stretch">
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
        className={cn({
          "md:hidden": mediaImages?.length && mediaImages.length >= 2,
          "lg:hidden": mediaImages?.length && mediaImages.length >= 3,
          "xl:hidden": mediaImages?.length && mediaImages.length >= 4,
        })}
      />
      <CarouselNext
        className={cn({
          "md:hidden": mediaImages?.length && mediaImages.length >= 2,
          "lg:hidden": mediaImages?.length && mediaImages.length >= 3,
          "xl:hidden": mediaImages?.length && mediaImages.length >= 4,
        })}
      />
    </Carousel>
  );
}
