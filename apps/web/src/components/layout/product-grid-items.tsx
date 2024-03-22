import { Grid } from "@/components/grid";
import { Tile } from "@/components/grid/tile";
import {
    breakpoints,
    transitionDelays
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
  lang: Navigator['language'];
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

          return (
            <Grid.Item key={product.id}>
              <Link
                className="block h-full w-full"
                href={`/products/${product.handle}`}
              >
                <Tile
                  className={transitionDelays[index]}
                  delay={(index + 0.1) * 100}
                  lang={lang}
                  priority={index <= 4}
                  productBasicFragmentRef={productBasicFragmentRef}
                  sizes={`(max-width: ${breakpoints.sm.max.toString()}) 100vw, (max-width: ${breakpoints.md.max.toString()}) 50vw, (max-width: ${breakpoints.lg.max.toString()}) 33vw, 25vw`}
                />
              </Link>
            </Grid.Item>
          );
        })}
    </>
  );
}
