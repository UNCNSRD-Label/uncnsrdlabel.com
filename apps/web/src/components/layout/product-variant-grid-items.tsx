import { Grid } from "@/components/grid";
import { GridTileImage } from "@/components/grid/tile";
import {
  getFragmentData,
  imageFragment,
  productFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { GetProductsQuery } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/graphql";
import { transitionDelays } from "@uncnsrdlabel/lib/effects";
import Link from "next/link";

export function ProductVariantGridItems({
  products,
}: {
  products: GetProductsQuery["products"];
}) {
  return (
    <>
      {products.edges
        .map(({ node: productFragmentDef }) =>
          getFragmentData(productFragment, productFragmentDef),
        )
        .map((product, productIndex) => {
          const variantsMap = new Map(
            product.variants.edges.map((edge) => {
              const variant = edge.node;

              const key = variant.selectedOptions?.find(
                (selectedOption) => selectedOption.name === "Color",
              )?.value;

              return [
                key,
                { ...variant, fullTitle: `${product.title} in ${key}` },
              ];
            }),
          );

          const variantsMapArray = Array.from(variantsMap.values());

          return variantsMapArray.map((variant, variantIndex) => {
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
