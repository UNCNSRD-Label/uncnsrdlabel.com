import { Grid } from "@/components/grid";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { getAlternativeLanguages } from "@/lib/i18n";
import { getIntl } from "@/lib/i18n/server";
import { state$ } from "@/lib/store";
import { type PageProps } from "@/types/next";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  getProductsHandler,
  productDefaultSort,
  productSorting,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { type Metadata } from "next";

const handle = "search";

const path = `/search`;

export async function generateMetadata(): Promise<Metadata> {
  const intl = getIntl();

  const localization = state$.localization.get();

  return {
    alternates: {
      canonical: `${localization.language.isoCode.toLocaleLowerCase()}-${
        localization.country.isoCode
      }/${path}`,
      languages: await getAlternativeLanguages({ localization, path }),
    },
    title: intl.formatMessage({ id: `page.${handle}.title` }),
    description: intl.formatMessage({ id: `page.${handle}.description` }),
  };
}

export default async function SearchPage({
  params: { lang },
  searchParams,
}: PageProps) {
  const intl = getIntl();

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
        <header className="mb-8">
          <span>
            {intl.formatMessage({ id: `page.${handle}.results` }, { query, results })}
          </span>
        </header>
      ) : null}
      {productFragmentRefs.length > 0 ? (
        <Grid className="w-full max-w-7xl grid-cols-2 lg:grid-cols-3">
          <ProductGridItems productFragmentRefs={productFragmentRefs} />
        </Grid>
      ) : (
        <Link className="btn" href="/search">
          {intl.formatMessage({ id: `page.${handle}.results` })}
        </Link>
      )}
    </>
  );
}
