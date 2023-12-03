import { Grid } from "@/components/grid/index";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { getIntl } from "@/lib/i18n";
import { state$ } from "@/lib/store";
import { type PageProps } from "@/types/next";
import {
  getLocalizationHandler,
  getProductsHandler,
  productDefaultSort,
  productSorting,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { type Metadata } from "next";

// export const runtime = "edge";

const handle = "search";

const path = `/search`;

export async function generateMetadata(): Promise<Metadata> {

  const lang = state$.lang.get();

  const intl = await getIntl(lang, `page.${handle}`);

  const localization = await getLocalizationHandler({ lang });


  return {
    alternates: {
      canonical: `${localization.language.isoCode.toLocaleLowerCase()}-${localization.country.isoCode}/${path}`,
      // languages: await getAlternativeLanguages({ lang, path }),
    },
    title: intl.formatMessage({ id: "title" }),
    description: intl.formatMessage({ id: "description" }),
  };
}

export default async function SearchPage({
  params: { lang },
  searchParams,
}: PageProps) {
  const intl = await getIntl(lang, `page.${handle}`);

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

  const results = productConnection.edges.length;

  return (
    <>
      {query ? (
        <p>{intl.formatMessage({ id: "results" }, { query, results })}</p>
      ) : null}
      {productFragmentRefs.length > 0 ? (
        <Grid className="grid-cols-2 lg:grid-cols-3">
          <ProductGridItems productFragmentRefs={productFragmentRefs} />
        </Grid>
      ) : null}
    </>
  );
}
