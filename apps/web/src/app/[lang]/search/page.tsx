import { Grid } from "@/components/grid/index";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { getAlternativeLanguages } from "@/lib/i18n";
import { getIntl } from "@/lib/i18n/server";
import { state$ } from "@/lib/store";
import { type PageProps } from "@/types/next";
import {
  getProductsHandler,
  productDefaultSort,
  productSorting,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { getLocaleObjectFromIETFLanguageTag } from "@uncnsrdlabel/lib";
import { type Metadata } from "next";

// export const runtime = "edge";

export async function generateMetadata(): Promise<Metadata> {
  const lang = state$.lang.get();

  const handle = "search";

  const intl = await getIntl(lang, `page.${handle}`);

  const path = `/search`;

  return {
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DEFAULT_LOCALE}/${path}`,
      languages: await getAlternativeLanguages({ lang, path }),
    },
    title: intl.formatMessage({ id: "title" }),
    description: intl.formatMessage({ id: "description" }),
  };
}

export default async function SearchPage({
  params: { lang },
  searchParams,
}: PageProps) {
  // const lang = state$.lang.get();
  // const locale = state$.locale.get();
  const locale = getLocaleObjectFromIETFLanguageTag(lang);

  console.log("search", { lang, locale });

  const { sort, q: query } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    productSorting.find((item) => item.slug === sort) || productDefaultSort;

  const productConnection = await getProductsHandler({
    variables: {
      sortKey,
      reverse,
      query,
    },
    lang,
  });

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
