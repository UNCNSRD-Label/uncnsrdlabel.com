import { Grid } from "@/components/grid";
import { GridTileImage } from "@/components/grid/tile";
import {
  FragmentType, getFragmentData, imageFragment, productFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { transitionDelays } from "@uncnsrdlabel/lib/effects";
import Link from "next/link";

export function ProductGridItems({
  products,
}: {
  products: FragmentType<typeof productFragment>[];
}) {
  return (
    <>
      {products.map((productFragmentRef, index) => {
        const product = getFragmentData(productFragment, productFragmentRef);
        const featuredImage = getFragmentData(imageFragment, product.featuredImage);

        return (
          <Grid.Item key={product.id || index} className="animate-fadeIn">
            <Link
              className="block h-full w-full"
              href={`/products/${product.handle}`}
            >
              <GridTileImage
                alt={product.title}
                className={transitionDelays[index]}
                labels={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                }}
                priority={index < 4}
                src={featuredImage?.url}
                width={600}
                height={600}
              />
            </Link>
          </Grid.Item>
        );
      })}
    </>
  );
}
