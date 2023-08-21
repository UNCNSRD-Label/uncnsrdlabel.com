import { Grid } from "@/components/grid/index";
import { ProductVariantGridItems } from "@/components/layout/product-variant-grid-items";
import { defaultSort, sorting } from "@uncnsrdlabel/graphql-shopify-storefront/constants";
import { getProducts } from "@uncnsrdlabel/graphql-shopify-storefront/utilities";

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

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.edges.length > 1 ? "results" : "result";

  return (
    <>
      {searchValue ? (
        <p>
          {products.edges.length === 0
            ? "There are no products that match "
            : `Showing ${products.edges.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.edges.length > 0 ? (
        <Grid className="grid-cols-2 lg:grid-cols-3">
          <ProductVariantGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
