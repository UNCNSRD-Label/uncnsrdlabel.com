import { Grid } from "@/components/grid";
import { Tile } from "@/components/grid/tile";
import { transitionDelays } from "@/lib/tailwind";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  FragmentType,
  getFragmentData,
  productBasicFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { HIDDEN_PRODUCT_TAG } from "@uncnsrdlabel/lib";

export function ProductGridItems({
  limit = 128,
  productFragmentRefs,
}: {
  limit?: number;
  productFragmentRefs: FragmentType<typeof productBasicFragment>[];
}) {
  return (
    <>
      {productFragmentRefs.slice(0, limit).map((productBasicFragmentRef, index) => {
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
                image={product.featuredImage}
                labels={{
                  title: product.title ?? "Product",
                  amount: product.priceRange?.maxVariantPrice?.amount,
                  currencyCode:
                    product.priceRange?.maxVariantPrice?.currencyCode,
                }}
                priority={index < 4}
                productBasicFragmentRef={productBasicFragmentRef}
                video={video}
              />
            </Link>
          </Grid.Item>
        );
      })}
    </>
  );
}
