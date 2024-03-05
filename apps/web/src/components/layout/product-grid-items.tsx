import { Grid } from "@/components/grid";
import { Tile } from "@/components/grid/tile";
import {
  minWidthLg,
  minWidthSm,
  minWidthXl,
  transitionDelays,
} from "@/lib/tailwind";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  getFragmentData,
  productBasicFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { HIDDEN_PRODUCT_TAG } from "@uncnsrdlabel/lib";

export function ProductGridItems({
  lang,
  limit = 128,
  productFragmentRefs,
}: {
  lang: Intl.BCP47LanguageTag;
  limit?: number;
  productFragmentRefs: FragmentType<typeof productBasicFragment>[];
}) {
  return (
    <>
      {productFragmentRefs
        .slice(0, limit)
        .map((productBasicFragmentRef, index) => {
          const product = getFragmentData(
            productBasicFragment,
            productBasicFragmentRef,
          );

          if (!product) return null;

          const hide = product.tags.includes(HIDDEN_PRODUCT_TAG);

          if (hide) return null;

          const media = product.media.edges.map((edge) => edge?.node);

          const videos = media.filter((node) => node.__typename === "Video");

          const video = videos?.[0];

          return (
            <Grid.Item key={product.id || index} className="animate-fadeIn">
              <Link
                className="block h-full w-full"
                href={`/products/${product.handle}`}
              >
                <Tile
                  className={transitionDelays[index]}
                  delay={index * 100}
                  image={product.featuredImage}
                  lang={lang}
                  priority={index <= 4}
                  productBasicFragmentRef={productBasicFragmentRef}
                  sizes={`100vw, (min-width: ${minWidthSm}) 50vw, (min-width: ${minWidthLg}) 33vw, (min-width: ${minWidthXl}) 25vw`}
                  video={video}
                />
              </Link>
            </Grid.Item>
          );
        })}
    </>
  );
}
