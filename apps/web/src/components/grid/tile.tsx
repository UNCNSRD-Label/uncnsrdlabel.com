import { LinkedDataProductGroup } from "@/components/linked-data/product-group";
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

export function Tile({
  active = true,
  background,
  className,
  delay = 0,
  image,
  lang,
  priority,
  productBasicFragmentRef,
  productDetailsFragmentRef,
  sizes,
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
  lang: Intl.BCP47LanguageTag;
  priority?: boolean;
  productBasicFragmentRef?: FragmentType<typeof productBasicFragment>;
  productDetailsFragmentRef?: FragmentType<typeof productDetailsFragment>;
  sizes?: string;
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
      <figure
        className={cn(
          "mb-0 mt-0 overflow-hidden [contain:inline-size_layout_style]",
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
        {tileImage?.url ? (
          <Image
            className={cn("relative h-full w-full object-cover", className)}
            alt={tileImage.altText ?? product?.title ?? ""}
            blurDataURL={tileImage.blurDataURL}
            delay={delay}
            fill
            height={undefined}
            placeholder="blur"
            priority={priority}
            revealEffect={false}
            sizes={sizes}
            src={tileImage.url}
            width={undefined}
          />
        ) : null}
      </figure>
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
            lang={lang}
            productBasicFragmentRef={productBasicFragmentRef}
          />
        </footer>
      ) : null}
      <LinkedDataProductGroup lang={lang} product={product} />
    </>
  );
}
