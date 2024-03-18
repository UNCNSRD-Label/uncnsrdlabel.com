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
import { cn, getMediaQueryForURL } from "@uncnsrdlabel/lib";

export async function Tile({
  active = true,
  className,
  delay = 0,
  lang,
  priority,
  productBasicFragmentRef,
  productDetailsFragmentRef,
  sizes,
}: {
  active?: boolean;
  className?: string;
  delay?: number;
  isInteractive?: boolean;
  lang: Intl.BCP47LanguageTag;
  priority?: boolean;
  productBasicFragmentRef?: FragmentType<typeof productBasicFragment>;
  productDetailsFragmentRef?: FragmentType<typeof productDetailsFragment>;
  sizes?: string;
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

  const images = product.images.edges.map((edge) => edge?.node);

  const videos = product.media.edges.map((edge) => edge?.node).filter((node) => node.__typename === "Video");

  // const primaryImage = getFragmentData(imageFragment, product.featuredImage);

  const primaryImage = getFragmentData(imageFragment, images?.[0]);

  const secondaryImage = getFragmentData(imageFragment, images?.[1]);

  const video = getFragmentData(videoFragment, videos?.[0]);

  return (
    <>
      <figure
        className={cn(
          "mb-0 mt-0 overflow-hidden [contain:inline-size_layout_style]",
          "aspect-2/3 relative mb-4 w-full overflow-hidden",
          "[&:has(.video)_.image]:hover:opacity-0 [&:has(.video)_.image]:focus:opacity-0",
          "[&:has(.secondary)_.primary]:hover:opacity-0 [&:has(.secondary)_.primary]:focus:opacity-0",
        )}
      >
        {/* TODO: Only play video on hover */}
        {video?.__typename === "Video" && (
          <Video
            {...video}
            className="video absolute inset-0"
            autoPlay
            loop
            muted
            playsInline
            url={video?.sources
              ?.filter((source) => source.format !== "m3u8")
              .map((source) => ({
                media: getMediaQueryForURL(source.url),
                src: source.url,
                type: `video/${source.format}`,
              }))}
          />
        )}
        {!!secondaryImage?.url && (
          <Image
            className={cn("absolute h-full w-full object-cover secondary", className)}
            alt={secondaryImage.altText ?? product?.title ?? ""}
            blurDataURL={secondaryImage.blurDataURL}
            delay={delay}
            fill
            height={undefined}
            loading="lazy"
            revealEffect={false}
            sizes={sizes}
            src={secondaryImage.url}
            width={undefined}
          />
        )}
        {!!primaryImage?.url && (
          <Image
            className={cn("absolute h-full w-full object-cover primary", className)}
            alt={primaryImage.altText ?? product?.title ?? ""}
            blurDataURL={primaryImage.blurDataURL}
            delay={delay}
            fill
            height={undefined}
            priority={priority}
            revealEffect={false}
            sizes={sizes}
            src={primaryImage.url}
            width={undefined}
          />
        )}
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
