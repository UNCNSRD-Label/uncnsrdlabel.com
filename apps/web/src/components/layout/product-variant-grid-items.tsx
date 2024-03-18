import { Grid } from "@/components/grid";
import { Tile } from "@/components/grid/tile";
import { transitionDelays } from "@/lib/tailwind";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  getFragmentData,
  imageFragment,
  productBasicFragment,
  productVariantConnectionFragment,
  productVariantFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";

export function ProductVariantGridItems({
  lang,
  productFragments,
}: {
  lang: Intl.BCP47LanguageTag;
  productFragments: FragmentType<typeof productBasicFragment>[];
}) {
  return (
    <>
      {productFragments.map((productBasicFragmentRef, productIndex) => {
        const product = getFragmentData(
          productBasicFragment,
          productBasicFragmentRef,
        );

        const variantsConnection = getFragmentData(
          productVariantConnectionFragment,
          product.variants,
        );

        const variants = variantsConnection.edges.map(({node}) => getFragmentData(productVariantFragment, node));

        const colorVariants = variants.map((variant) => {
          const key = variant.selectedOptions?.find(
            (selectedOption) => selectedOption.name === "Color",
          )?.value;

          return { ...variant, fullTitle: `${product.title} in ${key}`, key };
        });

        const colorVariantsMap = new Map(
          colorVariants.map((variant) => [variant.key, variant]),
        );

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
                {image?.url && (
                  <Tile
                    className={transitionDelays[productIndex]}
                    lang={lang}
                    priority={productIndex <= 1}
                    productBasicFragmentRef={productBasicFragmentRef}
                  />
                )}
              </Link>
            </Grid.Item>
          );
        });
      })}
    </>
  );
}
