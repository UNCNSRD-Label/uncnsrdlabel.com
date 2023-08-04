import { getCollectionProducts } from "@uncnsrdlabel/graphql-shopify-storefront";
import type { Product } from "@uncnsrdlabel/graphql-shopify-storefront/types";
import { GridTileImage } from "@uncnsrdlabel/ui/components/grid/tile";
import { clsx } from "clsx";
import Link from "next/link";

function ThreeItemGridItem({
  className,
  item,
  size,
  background,
}: {
  className?: string;
  item: Product;
  size: "full" | "half";
  background: "white" | "pink" | "purple" | "black";
}) {
  return (
    <div
      className={clsx(
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
    collection: "hidden-homepage-featured-items",
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section
      className={clsx(className, "lg:grid lg:grid-cols-6 lg:grid-rows-2")}
      data-testid="homepage-products"
    >
      <ThreeItemGridItem size="full" item={firstProduct} background="purple" />
      <ThreeItemGridItem size="half" item={secondProduct} background="black" />
      <ThreeItemGridItem size="half" item={thirdProduct} background="pink" />
    </section>
  );
}
