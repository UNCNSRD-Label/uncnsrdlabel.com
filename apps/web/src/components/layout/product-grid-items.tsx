import { Grid } from "@/components/grid";
import { Tile } from "@/components/grid/tile";
import { transitionDelays } from "@/lib/tailwind";
import {
  FragmentType,
  getFragmentData,
  productBasicFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";
import Link from "next/link";

export function ProductGridItems({
  productFragmentRefs,
}: {
  productFragmentRefs: FragmentType<typeof productBasicFragment>[];
}) {
  return (
    <>
      {productFragmentRefs.map((productFragmentRef, index) => {
          const product = getFragmentData(productBasicFragment, productFragmentRef);
          
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
