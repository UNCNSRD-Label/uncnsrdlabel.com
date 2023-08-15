import { Grid } from "@/components/grid/index";
import { ProductVariantGridItems } from "@/components/layout/product-variant-grid-items";
import { useGetPage } from "@uncnsrdlabel/graphql-shopify-storefront/utilities";
import { defaultSort, sorting } from "@uncnsrdlabel/lib/constants";

export const runtime = "edge";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const products = useGetPage({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? "results" : "result";

  return (
    <>
      {searchValue ? (
        <p>
          {products.length === 0
            ? "There are no products that match "
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-2 lg:grid-cols-3">
          <ProductVariantGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
