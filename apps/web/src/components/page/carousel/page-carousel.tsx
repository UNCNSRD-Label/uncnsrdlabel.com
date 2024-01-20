import { Image } from "@/components/media/image";
import { minWidthLg, minWidthSm } from "@/lib/tailwind";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@uncnsrdlabel/components/ui/carousel";
import {
    getFragmentData,
    getPageQuery,
    getShopifyGraphQL,
    imageFragment,
    pageFragment,
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
    getPageQuery,
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
              className="sm:basis-1/2 lg:basis-1/3 relative"
              key={image.url || index}
            >
              <Image
                alt={image.altText || page.title}
                blurDataURL={image.blurDataURL}
                className="h-full object-cover"
                fill
                placeholder="blur"
                revealEffect={false}
                sizes={`100vw, (min-width: ${minWidthSm}) 50vw, (min-width: ${minWidthLg}) 33vw`}
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
