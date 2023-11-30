import { Grid } from "@/components/grid";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { getAlternativeLanguages } from "@/lib/i18n";
import { getIntl } from "@/lib/i18n/server";
import { state$ } from "@/lib/store";
import {
  collectionFragment,
  getCollectionHandler,
  getCollectionProductsHandler,
  getFragmentData,
  productCollectionDefaultSort,
  productCollectionSorting,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// export const runtime = "edge";

export async function generateMetadata({
  params: { collection: handle },
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const lang = state$.lang.get();

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
      canonical: `${process.env.NEXT_PUBLIC_DEFAULT_LOCALE}/${path}`,
      languages: await getAlternativeLanguages({ lang, path }),
    },
    title: seo?.title || collection.title,
    description:
      seo?.description ||
      collection.description ||
      `${collection.title} products`,
  };
}

export default async function CategoryPage({
  params: { collection: handle },
  searchParams,
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const lang = state$.lang.get();

  const intl = await getIntl(lang, `page.collection`);

  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    productCollectionSorting.find((item) => item.slug === sort) ||
    productCollectionDefaultSort;

  const collectionProducts = await getCollectionProductsHandler({
    variables: {
      handle,
      sortKey,
      reverse,
    },
    lang,
  });

  const products = collectionProducts.edges.map((edge) => edge?.node);

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">
          {intl.formatMessage({ id: "no-products-found" })}
        </p>
      ) : (
        <Grid className="grid-cols-2 lg:grid-cols-3">
          <ProductGridItems productFragmentRefs={products} />
        </Grid>
      )}
    </section>
  );
}
