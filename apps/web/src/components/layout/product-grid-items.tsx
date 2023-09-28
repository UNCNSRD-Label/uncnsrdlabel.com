import { Grid } from "@/components/grid";
import { Tile } from "@/components/grid/tile";
import { transitionDelays } from "@/lib/tailwind";
import {
  FragmentType,
  getFragmentData,
  productBasicFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { HIDDEN_PRODUCT_TAG } from "@uncnsrdlabel/lib";
import Link from "next/link";

export function ProductGridItems({
  limit = 128,
  productFragmentRefs,
}: {
  limit?: number;
  productFragmentRefs: FragmentType<typeof productBasicFragment>[];
}) {
  return (
    <>
      {productFragmentRefs.slice(0, limit).map((productFragmentRef, index) => {
          const product = getFragmentData(productBasicFragment, productFragmentRef);

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
                video={video}
              />
            </Link>
          </Grid.Item>
        );
      })}
    </>
  );
}
