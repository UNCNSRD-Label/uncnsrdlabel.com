import { Grid } from "@/components/grid/index";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { type PageProps } from "@/types/next";
import {
  getProductsHandler,
  productDefaultSort,
  productSorting,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import {
  getLocaleObjectFromIETFLanguageTag
} from "@uncnsrdlabel/lib";
import { PropsWithChildren } from "react";

// export const runtime = "edge";

// export const metadata = {
//   title: "Search",
//   description: "Search for products in the store.",
// };

export default async function SearchPage({
  params: { lang },
  searchParams
}: PropsWithChildren<PageProps>) {
  // const lang = state$.lang.get();
  // const locale = state$.locale.get();
  const locale = getLocaleObjectFromIETFLanguageTag(lang);

  console.log('search', {lang, locale});

  const { sort, q: query } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    productSorting.find((item) => item.slug === sort) || productDefaultSort;

  const productConnection = await getProductsHandler(
    {
      sortKey,
      reverse,
      query,
    },
    lang,
  );

  const productFragmentRefs = productConnection.edges.map((edge) => edge?.node);
  // console.log('productFragmentRefs[0]', productFragmentRefs[0])
  const resultsText = productFragmentRefs.length > 1 ? "results" : "result";

  return (
    <>
      {query ? (
        <p>
          {productFragmentRefs.length === 0
            ? "There are no products that match "
            : `Showing ${productFragmentRefs.length} ${resultsText} for `}
          <span className="font-bold">&quot;{query}&quot;</span>
        </p>
      ) : null}
      {productFragmentRefs.length > 0 ? (
        <Grid className="grid-cols-2 lg:grid-cols-3">
          <ProductGridItems productFragmentRefs={productFragmentRefs} />
        </Grid>
      ) : null}
    </>
  );
}
