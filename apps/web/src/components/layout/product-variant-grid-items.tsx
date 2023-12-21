import { Grid } from "@/components/grid";
import { Tile } from "@/components/grid/tile";
import { transitionDelays } from "@/lib/tailwind";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  FragmentType,
  getFragmentData,
  imageFragment,
  productBasicFragment,
  productVariantConnectionFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";

export function ProductVariantGridItems({
  productFragments,
}: {
  // productFragments: ResultOf<typeof productFragment>[]
  productFragments: FragmentType<typeof productBasicFragment>[];
}) {
  return (
    <>
      {productFragments.map((productBasicFragmentRef, productIndex) => {
        const product = getFragmentData(
          productBasicFragment,
          productBasicFragmentRef,
        );

        const media = product.media.edges.map((edge) => edge?.node);

        const videos = media.filter((node) => node.__typename === "Video");

        const video = videos?.[0];

        const variantsConnection = getFragmentData(
          productVariantConnectionFragment,
          product.variants,
        );

        const variants = variantsConnection.edges.map((edge) => edge?.node);

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
                    image={product.featuredImage}
                    priority={productIndex <= 1}
                    productBasicFragmentRef={productBasicFragmentRef}
                    video={video}
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
