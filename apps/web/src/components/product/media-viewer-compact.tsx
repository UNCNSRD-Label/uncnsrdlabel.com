import { Image } from "@/components/media/image";
import { Video } from "@/components/media/video";
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
  imageFragment,
  productDetailsFragment,
  videoFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";

export function MediaViewerCompact({
  className,
  productDetailsFragmentRef,
}: {
  className?: string;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  const imagesNodes = product.images.edges.map((edge) => edge?.node);

  const images = imagesNodes.map((imageFragmentRef) =>
    getFragmentData(imageFragment, imageFragmentRef),
  );

  const media = product.media.edges.map((edge) => edge?.node);

  const videoNodes = media.filter((node) => node.__typename === "Video");

  const videos = videoNodes.map((videoFragmentRef) =>
    getFragmentData(videoFragment, videoFragmentRef),
  );

  return (
    <Carousel className={cn("items-stretch", className)}>
      <CarouselContent className="items-stretch">
        {images?.map((image, index) => {
          return (
            <CarouselItem
              className="relative sm:basis-1/2 lg:basis-1/3"
              key={image.url || index}
            >
              <Image
                alt={image.altText ?? product.title}
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
        {videos?.map((video, index) => {
          if (video.__typename !== "Video") {
            return null;
          }

          const previewImage = getFragmentData(
            imageFragment,
            video.previewImage,
          );

          return (
            <CarouselItem
              className="relative sm:basis-1/2 lg:basis-1/3"
              key={video.id || index}
            >
              <Video
                alt={video?.alt ?? product.title}
                autoPlay={index === 0 ? true : false}
                className={className}
                loop={true}
                key={video.id}
                poster={previewImage}
                url={video.sources
                  .filter((source) => source.format !== "m3u8")
                  .map((source) => ({
                    src: source.url,
                    type: `video/${source.format}`,
                  }))}
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
