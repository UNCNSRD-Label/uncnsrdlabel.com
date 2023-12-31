import { Image } from "@/components/media/image";
import { Video } from "@/components/media/video";
import { PriceAndCompareAtPrice } from "@/components/price-and-compare-at-price";
import {
  getFragmentData,
  imageFragment,
  productBasicFragment,
  productDetailsFragment,
  videoFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";

export async function Tile({
  active = true,
  background = "black",
  className,
  delay,
  image,
  isInteractive = true,
  priority,
  productBasicFragmentRef,
  productDetailsFragmentRef,
  video,
}: {
  active?: boolean;
  background?:
    | "hotPink"
    | "white"
    | "pink"
    | "purple"
    | "black"
    | "purple-dark"
    | "blue"
    | "cyan"
    | "gray";
  className?: string;
  delay?: number;
  image?: FragmentType<typeof imageFragment> | null;
  isInteractive?: boolean;
  priority?: boolean;
  productBasicFragmentRef?: FragmentType<typeof productBasicFragment>;
  productDetailsFragmentRef?: FragmentType<typeof productDetailsFragment>;
  video?: FragmentType<typeof videoFragment>;
}) {
  if (!active) {
    return null;
  }

  let product;

  if (productBasicFragmentRef) {
    product = getFragmentData(productBasicFragment, productBasicFragmentRef);
  }

  if (productDetailsFragmentRef) {
    product = getFragmentData(
      productDetailsFragment,
      productDetailsFragmentRef,
    );
  }

  if (!product) {
    return null;
  }

  let tileImage = null;
  let tileVideo = null;

  if (image) {
    tileImage = getFragmentData(imageFragment, image);
  }

  if (video) {
    tileVideo = getFragmentData(videoFragment, video);
  }

  return (
    <>
      <div
        className={cn(
          "aspect-2/3 relative mb-4 w-full overflow-hidden",
          "[&:has(.video)_.image]:hover:opacity-0 [&:has(.video)_.image]:focus:opacity-0",
          {
            "bg-hotPink dark:bg-hotPink": background === "hotPink",
            "bg-white dark:bg-white": background === "white",
            "bg-[#ff0080] dark:bg-[#ff0080]": background === "pink",
            "bg-[#7928ca] dark:bg-[#7928ca]": background === "purple",
            "bg-gray-900 dark:bg-gray-900": background === "black",
            "bg-violetDark dark:bg-violetDark": background === "purple-dark",
            "bg-blue-500 dark:bg-blue-500": background === "blue",
            "bg-cyan-500 dark:bg-cyan-500": background === "cyan",
            "bg-gray-100 dark:bg-gray-100": background === "gray",
            "bg-gray-100 dark:bg-gray-900": !background,
          },
        )}
      >
        {/* TODO: Only play video on hover */}
        {tileVideo?.__typename === "Video" && (
          <Video
            {...tileVideo}
            className="video absolute inset-0"
            autoPlay
            loop
            muted
            playsInline
            url={tileVideo?.sources
              ?.filter((source) => source.format !== "m3u8")
              .map((source) => ({
                src: source.url,
                type: `video/${source.format}`,
              }))}
          />
        )}
        <figure className="image absolute inset-0 mb-0 mt-0 [contain:inline-size_layout_style]">
          {tileImage?.url ? (
            <Image
              className={cn(
                "relative h-full w-full object-cover",
                {
                  "transition hover:scale-105": isInteractive,
                  "animation-delay-[0ms]": delay === 0,
                  "animation-delay-[300ms]": delay === 1,
                  "animation-delay-[600ms]": delay === 2,
                  "animation-delay-[900ms]": delay === 3,
                  "animation-delay-[1200ms]": delay === 4,
                  "animation-delay-[1500ms]": delay === 5,
                  "animation-delay-[1800ms]": delay === 6,
                  "animation-delay-[2100ms]": delay === 7,
                  "animation-delay-[2400ms]": delay === 8,
                  "animation-delay-[2700ms]": delay === 9,
                  "animation-delay-[3000ms]": delay === 10,
                  "animation-delay-[3300ms]": delay === 11,
                  "animation-delay-[3600ms]": delay === 12,
                  "animation-delay-[3900ms]": delay === 13,
                  "animation-delay-[4200ms]": delay === 14,
                  "animation-delay-[4500ms]": delay === 15,
                  "animation-delay-[4800ms]": delay === 16,
                },
                className,
              )}
              alt={tileImage.altText ?? product?.title ?? ""}
              fill
              height={undefined}
              priority={priority}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              src={tileImage.url}
              width={undefined}
            />
          ) : null}
        </figure>
      </div>
      {product?.priceRange.minVariantPrice ? (
        <footer>
          <h3
            data-testid="product-name"
            className={cn("mb-2 box-decoration-clone text-xs")}
          >
            {product.title}
          </h3>
          <PriceAndCompareAtPrice
            className="text-xs md:grid-flow-col"
            productBasicFragmentRef={productBasicFragmentRef}
          />
        </footer>
      ) : null}
    </>
  );
}
