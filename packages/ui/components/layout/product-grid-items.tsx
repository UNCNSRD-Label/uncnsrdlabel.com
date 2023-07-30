import { Product } from "@uncnsrdlabel/lib/shopify/types";
import Grid from "@uncnsrdlabel/ui/components/grid";
import { GridTileImage } from "@uncnsrdlabel/ui/components/grid/tile";
import Link from "next/link";

import { transitionDelays } from "@uncnsrdlabel/lib/effects";

export function ProductGridItems({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.map((product, index) => (
        <Grid.Item key={product.id || index} className="animate-fadeIn">
          <Link
            className="block h-full w-full"
            href={`/products/${product.handle}`}
          >
            <GridTileImage
              alt={product.title}
              className={transitionDelays[index]}
              labels={{
                isSmall: true,
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode,
              }}
              priority={index < 4}
              src={product.featuredImage?.url}
              width={600}
              height={600}
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
