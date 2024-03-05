import { Image } from "@/components/media/image";
import { minWidthLg, minWidthSm, minWidthXl } from "@/lib/tailwind";
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

  return (
    <Carousel className={cn("items-stretch", className)}>
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
                placeholder="blur"
                revealEffect={false}
                sizes={`100vw, (min-width: ${minWidthSm}) 50vw, (min-width: ${minWidthLg}) 33vw, (min-width: ${minWidthXl}) 25vw`}
                src={image.url}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
