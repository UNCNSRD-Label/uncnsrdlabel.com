import { Grid } from "@/components/grid";
import { ProductGridItems } from "@/components/layout/product-grid-items";
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
  const collectionFragmentRef = await getCollectionHandler({ handle });

  const collection = getFragmentData(collectionFragment, collectionFragmentRef);

  if (!collection) return notFound();

  const seo = getFragmentData(seoFragment, collection.seo);

  return {
    title: seo?.title || collection.title,
    description:
      seo?.description ||
      collection.description ||
      `${collection.title} products`,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    productCollectionSorting.find((item) => item.slug === sort) ||
    productCollectionDefaultSort;

  const collectionProducts = await getCollectionProductsHandler({
    handle: params.collection,
    sortKey,
    reverse,
  });

  const products = collectionProducts.edges.map((edge) => edge?.node);

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-2 lg:grid-cols-3">
          <ProductGridItems productFragmentRefs={products} />
        </Grid>
      )}
    </section>
  );
}
