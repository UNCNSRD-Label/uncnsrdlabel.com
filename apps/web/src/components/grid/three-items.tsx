import { Tile } from "@/components/grid/tile";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  getCollectionProductsHandler,
  getFragmentData,
  productBasicFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";

function ThreeItemGridItem({
  background,
  className,
  lang,
  productBasicFragmentRef,
  size,
}: {
  background: "white" | "pink" | "purple" | "black";
  className?: string;
  lang: Intl.BCP47LanguageTag;
  productBasicFragmentRef: FragmentType<typeof productBasicFragment>;
  size: "full" | "half";
}) {
  const product = getFragmentData(
    productBasicFragment,
    productBasicFragmentRef,
  );

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
          lang={lang}
          productBasicFragmentRef={productBasicFragmentRef}
          priority={true}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid({ className, lang }: { className?: string; lang: Intl.BCP47LanguageTag; }) {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProductsHandler({
    variables: {
      handle: "hidden-homepage-featured-items",
    },
    lang,
  });

  const products = homepageItems.edges.map((edge) => edge?.node);

  const [firstProduct, secondProduct, thirdProduct] = products;

  return (
    <section
      className={cn(className, "lg:grid lg:grid-cols-6 lg:grid-rows-2")}
      data-testid="homepage-products"
    >
      <ThreeItemGridItem
        background="purple"
        lang={lang}
        productBasicFragmentRef={firstProduct}
        size="full"
      />
      <ThreeItemGridItem
        background="black"
        lang={lang}
        productBasicFragmentRef={secondProduct}
        size="half"
      />
      <ThreeItemGridItem
        background="pink"
        lang={lang}
        productBasicFragmentRef={thirdProduct}
        size="half"
      />
    </section>
  );
}
