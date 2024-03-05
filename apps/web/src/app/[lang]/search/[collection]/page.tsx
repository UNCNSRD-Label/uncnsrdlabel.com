import { Grid } from "@/components/grid";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { getDictionary } from "@/lib/dictionary";
import { getAlternativeLanguages } from "@/lib/i18n";
import { getCanonical } from "@/lib/metadata";
import {
  collectionFragment,
  getCollectionHandler,
  getCollectionWithProductsHandler,
  getFragmentData,
  getLocalizationDetailsHandler,
  productCollectionSortItemDefault,
  productCollectionSortItems,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createIntl, type ResolvedIntlConfig } from "react-intl";

export async function generateMetadata({
  params: { collection: handle, lang },
}: {
  params: { collection: string; lang: Intl.BCP47LanguageTag };
}): Promise<Metadata> {
  const localization = await getLocalizationDetailsHandler({ lang });

  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

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
    title:
      seo?.title ||
      intl.formatMessage(
        { id: "page.collection.title" },
        { title: collection.title },
      ),
    description: seo?.description || collection.description,
  };
}

export default async function SearchCollectionPage({
  params: { collection: handle, lang },
  searchParams,
}: {
  params: { collection: string; lang: Intl.BCP47LanguageTag };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const { sort } = searchParams as { [key: string]: string };

  const { sortKey, reverse } =
    productCollectionSortItems.find((item) => item.slug === sort) ||
    productCollectionSortItemDefault;

  const collectionFragmentRef = await getCollectionHandler({
    variables: { handle },
    lang,
  });

  const collection = getFragmentData(collectionFragment, collectionFragmentRef);

  if (!collection) return notFound();

  const collectionWithProducts = await getCollectionWithProductsHandler({
    variables: {
      handle,
      sortKey,
      reverse,
    },
    lang,
  });

  if (!collectionWithProducts) return notFound();

  const productFragmentRefs = collectionWithProducts?.products.edges.map(
    (edge) => edge?.node,
  );

  const results = collectionWithProducts?.products.edges.length;

  return (
    <>
      <h1 className="sr-only">
        {intl.formatMessage(
          { id: "page.collection.title" },
          { title: collection.title },
        )}
      </h1>
      <h2 className="sr-only">
        {intl.formatMessage(
          { id: "page.search.results" },
          { query: collection.title, results },
        )}
      </h2>
      {collection.description && (
        <div className="sr-only">{collection.description}</div>
      )}
      {results === 0 ? (
        <p className="py-3 text-lg">
          {intl.formatMessage({ id: "page.collection.no-products-found" })}
        </p>
      ) : (
        <Grid className="order-2">
          <ProductGridItems
            lang={lang}
            productFragmentRefs={productFragmentRefs}
          />
        </Grid>
      )}
    </>
  );
}
