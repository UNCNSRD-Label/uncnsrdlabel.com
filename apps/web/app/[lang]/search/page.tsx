import { defaultSort, sorting } from "@uncnsrdlabel/lib/constants";
import { getProducts } from "@uncnsrdlabel/lib/shopify";
import Grid from "@uncnsrdlabel/ui/components/grid";
import ProductGridItems from "@uncnsrdlabel/ui/components/layout/product-grid-items";

export const runtime = "edge";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
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
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
