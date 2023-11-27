import { Tile } from "@/components/grid/tile";
import { state$ } from "@/lib/store";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  FragmentType,
  getCollectionProductsHandler,
  getFragmentData,
  productBasicFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { cn } from "@uncnsrdlabel/lib";

function ThreeItemGridItem({
  className,
  productBasicFragmentRef,
  size,
  background,
}: {
  className?: string;
  productBasicFragmentRef: FragmentType<typeof productBasicFragment>;
  size: "full" | "half";
  background: "white" | "pink" | "purple" | "black";
}) {
  const product = getFragmentData(productBasicFragment, productBasicFragmentRef);

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
          productBasicFragmentRef={productBasicFragmentRef}
          priority={true}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid({ className }: { className?: string }) {
  const lang = state$.lang.get();

  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProductsHandler(
    {
      handle: "hidden-homepage-featured-items",
    },
    lang,
  );

  const products = homepageItems.edges.map((edge) => edge?.node);

  const [firstProduct, secondProduct, thirdProduct] = products;

  return (
    <section
      className={cn(className, "lg:grid lg:grid-cols-6 lg:grid-rows-2")}
      data-testid="homepage-products"
    >
      <ThreeItemGridItem
        size="full"
        productBasicFragmentRef={firstProduct}
        background="purple"
      />
      <ThreeItemGridItem
        size="half"
        productBasicFragmentRef={secondProduct}
        background="black"
      />
      <ThreeItemGridItem
        size="half"
        productBasicFragmentRef={thirdProduct}
        background="pink"
      />
    </section>
  );
}
