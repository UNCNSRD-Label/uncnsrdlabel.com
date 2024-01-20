import { Grid } from "@/components/grid";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { getDictionary } from "@/lib/dictionary";
import { getAlternativeLanguages } from "@/lib/i18n";
import { getCanonical } from "@/lib/metadata";
import {
  collectionFragment,
  getCollectionHandler,
  getCollectionProductsHandler,
  getFragmentData,
  getLocalizationDetailsHandler,
  productCollectionDefaultSort,
  productCollectionSorting,
  seoFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createIntl, type ResolvedIntlConfig } from "react-intl";

export async function generateMetadata({
  params: { collection: handle, lang },
}: {
  params: { collection: string; lang: Intl.BCP47LanguageTag; };
}): Promise<Metadata> {
  const localization = await getLocalizationDetailsHandler({ lang });

  const collectionFragmentRef = await getCollectionHandler({
    variables: { handle },
    lang,
  });

  const collection = getFragmentData(collectionFragment, collectionFragmentRef);

  if (!collection) return notFound();

  const seo = getFragmentData(seoFragment, collection.seo);

  const path = `/search/${collection.handle}`;

  return {
    alternates: {
      canonical: getCanonical(path),
      languages: getAlternativeLanguages({ localization, path }),
    },
    title: seo?.title || collection.title,
    description:
      seo?.description ||
      collection.description ||
      `${collection.title} products`,
  };
}

export default async function CategoryPage({
  params: { collection: handle, lang },
  searchParams,
}: {
  params: { collection: string; lang: Intl.BCP47LanguageTag; };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const messages: ResolvedIntlConfig["messages"] = await getDictionary({ lang });

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    productCollectionSorting.find((item) => item.slug === sort) ||
    productCollectionDefaultSort;

  const collectionConnection = await getCollectionProductsHandler({
    variables: {
      handle,
      sortKey,
      reverse,
    },
    lang,
  });

  const productFragmentRefs = collectionConnection.edges.map((edge) => edge?.node);

  const results = collectionConnection.edges.length;

  return (
    <>
      {results === 0 ? (
        <p className="py-3 text-lg">
          {intl.formatMessage({ id: "page.collection.no-products-found" })}
        </p>
      ) : (
        <Grid className="grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
          <ProductGridItems lang={lang} productFragmentRefs={productFragmentRefs} />
        </Grid>
      )}
    </>
  );
}
