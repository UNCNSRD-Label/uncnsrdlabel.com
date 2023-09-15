import { server } from "@/clients/shopify";
import { Grid } from "@/components/grid/index";
import { ProductGridItems } from "@/components/layout/product-variant-grid-items";
import {
  productDefaultSort,
  productSorting
} from "@uncnsrdlabel/graphql-shopify-storefront";

// export const runtime = "edge";

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
    productSorting.find((item) => item.slug === sort) || productDefaultSort;

  const productConnection = await server.getProductsWithVariants({
    sortKey,
    reverse,
    query: searchValue,
  });

  const productFragments = productConnection.edges.map((edge) => edge?.node);

  const resultsText = productFragments.length > 1 ? "results" : "result";

  return (
    <>
      {searchValue ? (
        <p>
          {productFragments.length === 0
            ? "There are no products that match "
            : `Showing ${productFragments.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {productFragments.length > 0 ? (
        <Grid className="grid-cols-2 lg:grid-cols-3">
          <ProductGridItems productFragments={productFragments} />
        </Grid>
      ) : null}
    </>
  );
}
