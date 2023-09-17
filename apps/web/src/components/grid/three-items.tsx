import { server } from "@/clients/shopify";
import { Tile } from "@/components/grid/tile";
import {
  FragmentType,
  getFragmentData,
  productBasicFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import Link from "next/link";

function ThreeItemGridItem({
  className,
  productFragmentRef,
  size,
  background,
}: {
  className?: string;
  productFragmentRef: FragmentType<typeof productBasicFragment>;
  size: "full" | "half";
  background: "white" | "pink" | "purple" | "black";
}) {
  const product = getFragmentData(productBasicFragment, productFragmentRef);

  if (!product.featuredImage) {
    return null;
  }
  
  return (
    <div
      className={cn(
        className,
        size === "full"
          ? "lg:col-span-4 lg:row-span-2"
          : "lg:col-span-2 lg:row-span-1",
      )}
    >
      <Link className="block h-full" href={`/products/${product.handle}`}>
        <Tile
          background={background}
          image={product.featuredImage}
          labels={{
            title: product.title as string,
            amount: product.priceRange?.maxVariantPrice?.amount,
            currencyCode: product.priceRange?.maxVariantPrice?.currencyCode,
          }}
          priority={true}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid({ className }: { className?: string }) {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await server.getCollectionProducts({
    handle: "hidden-homepage-featured-items",
  });

  const products = homepageItems.edges.map((edge) => edge?.node);

  const [firstProduct, secondProduct, thirdProduct] = products;

  return (
    <section
      className={cn(className, "lg:grid lg:grid-cols-6 lg:grid-rows-2")}
      data-testid="homepage-products"
    >
      <ThreeItemGridItem size="full" productFragmentRef={firstProduct} background="purple" />
      <ThreeItemGridItem size="half" productFragmentRef={secondProduct} background="black" />
      <ThreeItemGridItem size="half" productFragmentRef={thirdProduct} background="pink" />
    </section>
  );
}
