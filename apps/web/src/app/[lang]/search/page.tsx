import { Grid } from "@/components/grid/index";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { state$ } from "@/lib/store";
import {
  getProductsHandler,
  productDefaultSort,
  productSorting,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";

// export const runtime = "edge";

// export const metadata = {
//   title: "Search",
//   description: "Search for products in the store.",
// };

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const lang = state$.lang.get();

  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    productSorting.find((item) => item.slug === sort) || productDefaultSort;

  const productConnection = await getProductsHandler(
    {
      sortKey,
      reverse,
      query: searchValue,
    },
    lang,
  );

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
          <ProductGridItems productFragmentRefs={productFragments} />
        </Grid>
      ) : null}
    </>
  );
}
