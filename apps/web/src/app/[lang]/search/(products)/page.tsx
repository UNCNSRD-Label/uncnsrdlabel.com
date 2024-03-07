import { Grid } from "@/components/grid";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { getDictionary } from "@/lib/dictionary";
import { getAlternativeLanguages } from "@/lib/i18n";
import { getCanonical } from "@/lib/metadata";
import { type PageProps } from "@/types/next";
import { createIntl } from "@formatjs/intl";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  getLocalizationDetailsHandler,
  getProductsHandler,
  productSortItemDefault,
  productSortItems,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { type Metadata } from "next";
import { type ResolvedIntlConfig } from "react-intl";

const handle = "search";

const path = `/search`;

export async function generateMetadata({
  params: { lang },
}: PageProps): Promise<Metadata> {
  const localization = await getLocalizationDetailsHandler({ lang });

  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return {
    alternates: {
      canonical: getCanonical(path),
      languages: getAlternativeLanguages({ localization, path }),
    },
    title: intl.formatMessage({ id: `page.${handle}.title` }),
    description: intl.formatMessage({ id: `page.${handle}.description` }),
  };
}

export default async function SearchProductsPage({
  params: { lang },
  searchParams,
}: PageProps) {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const { sort, q: query } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    productSortItems.find((item) => item.slug === sort) ||
    productSortItemDefault;

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
          <h1>
            {intl.formatMessage(
              { id: `page.${handle}.results` },
              { query, results },
            )}
          </h1>
        </header>
      ) : null}
      {productFragmentRefs.length > 0 ? (
        <Grid className="order-2">
          <ProductGridItems
            lang={lang}
            productFragmentRefs={productFragmentRefs}
          />
        </Grid>
      ) : (
        <Link className="btn" href="/search">
          {intl.formatMessage({ id: `page.${handle}.results` })}
        </Link>
      )}
    </>
  );
}
