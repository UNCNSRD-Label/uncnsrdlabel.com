import { Grid } from "@/components/grid";
import { GridTileImage } from "@/components/grid/tile";
import { flattenConnection } from "@shopify/hydrogen-react";
import {
  FragmentType,
  getFragmentData,
  imageFragment,
  productFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { transitionDelays } from "@uncnsrdlabel/lib/effects";
import Link from "next/link";

export function ProductVariantGridItems({
  productFragments,
}: {
  productFragments: FragmentType<typeof productFragment>[]
}) {
  return (
    <>
      {productFragments
        .map(({ node: productFragmentRef }, productIndex) => {
          const product = getFragmentData(productFragment, productFragmentRef);

          const variants = flattenConnection(product.variants);

          const colorVariants = variants.map((variant) => {
            const key = variant.selectedOptions?.find(
              (selectedOption) => selectedOption.name === "Color",
            )?.value;

            // const image = getFragmentData(imageFragment, variant.image);

            return { ...variant, fullTitle: `${product.title} in ${key}`, key }
          });

          const colorVariantsMap = new Map<string, FragmentType<typeof productFragment>>(colorVariants.map((variant) => [variant.key, variant]));

          const colorVariantsMapArray = Array.from(colorVariantsMap.values());

          return colorVariantsMapArray.map((variant, variantIndex) => {
            const image = getFragmentData(imageFragment, variant.image);

            return (
              <Grid.Item
                key={`${product.id || productIndex}-${
                  variant.id || variantIndex
                }`}
                className="animate-fadeIn"
              >
                <Link
                  className="block h-full w-full"
                  href={`/products/${product.handle}?variant=${variant.id}`}
                >
                  <GridTileImage
                    alt={variant.fullTitle}
                    className={transitionDelays[productIndex]}
                    labels={{
                      title: variant.fullTitle,
                      amount: variant.price.amount,
                      currencyCode: variant.price.currencyCode,
                    }}
                    priority={productIndex < 4}
                    src={image?.url}
                    width={600}
                    height={600}
                  />
                </Link>
              </Grid.Item>
            );
          });
        })}
    </>
  );
}
