import { Grid } from "@/components/grid";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import {
  getCollection,
  getCollectionProducts,
  getFragmentData,
  productCollectionDefaultSort,
  productCollectionSorting,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getCollection({ handle: params.collection });

  if (!collection) return notFound();

  const seo = getFragmentData(seoFragment, collection.seo);

  return {
    title: seo?.title || collection.title,
    description:
      seo?.description ||
      collection.description ||
      `${collection.title} products`,
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(collection.title)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
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
    productCollectionSorting.find((item) => item.handle === sort) || productCollectionDefaultSort;

  const collectionProducts = await getCollectionProducts({
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
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
  );
}
