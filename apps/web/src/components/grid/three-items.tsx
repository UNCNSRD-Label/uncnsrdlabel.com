import { GridTileImage } from "@/components/grid/tile";
import type { Product } from "@shopify/hydrogen/storefront-api-types";
import {
  getCollectionProducts
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import Link from "next/link";
import { PartialDeep } from "type-fest";

function ThreeItemGridItem({
  className,
  item,
  size,
  background,
}: {
  className?: string;
  item: PartialDeep<
    Product,
    {
      recurseIntoArrays: true;
    }
  >;
  size: "full" | "half";
  background: "white" | "pink" | "purple" | "black";
}) {
  return (
    <div
      className={cn(
        className,
        size === "full"
          ? "lg:col-span-4 lg:row-span-2"
          : "lg:col-span-2 lg:row-span-1",
      )}
    >
      <Link className="block h-full" href={`/products/${item.handle}`}>
        <GridTileImage
          src={item.featuredImage.url}
          width={size === "full" ? 1080 : 540}
          height={size === "full" ? 1080 : 540}
          priority={true}
          background={background}
          alt={item.title}
          labels={{
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode,
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid({ className }: { className?: string }) {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    handle: "hidden-homepage-featured-items",
  });

  const products = homepageItems.edges.map((edge) => edge?.node);

  const [firstProduct, secondProduct, thirdProduct] = products;

  return (
    <section
      className={cn(className, "lg:grid lg:grid-cols-6 lg:grid-rows-2")}
      data-testid="homepage-products"
    >
      <ThreeItemGridItem size="full" item={firstProduct} background="purple" />
      <ThreeItemGridItem size="half" item={secondProduct} background="black" />
      <ThreeItemGridItem size="half" item={thirdProduct} background="pink" />
    </section>
  );
}
