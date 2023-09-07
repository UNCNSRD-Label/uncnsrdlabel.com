import { Grid } from "@/components/grid";
import { GridTileImage } from "@/components/grid/tile";
import { transitionDelays } from "@/lib/tailwind";
import { Product } from "@shopify/hydrogen/storefront-api-types";
import Link from "next/link";
import { PartialDeep } from "type-fest";

export function ProductGridItems({
  products,
}: {
  products: PartialDeep<
    Product,
    {
      recurseIntoArrays: true;
    }
  >[];
}) {
  return (
    <>
      {products.map((product, index) => {
        return (
          <Grid.Item key={product.id || index} className="animate-fadeIn">
            <Link
              className="block h-full w-full"
              href={`/products/${product.handle}`}
            >
              {product.featuredImage?.url && <GridTileImage
                alt={product.title ?? "Product"}
                className={transitionDelays[index]}
                labels={{
                  title: product.title ?? "Product",
                  amount: product.priceRange?.maxVariantPrice?.amount,
                  currencyCode: product.priceRange?.maxVariantPrice?.currencyCode,
                }}
                priority={index < 4}
                src={product.featuredImage.url}
                width={600}
                height={600}
              />}
            </Link>
          </Grid.Item>
        );
      })}
    </>
  );
}
