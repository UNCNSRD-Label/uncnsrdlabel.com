'use server';

import { Image } from "@/components/media/image";
import { state$ } from "@/lib/store";
import { getCollectionProductsHandler, getFragmentData, getPageHandler, imageFragment, pageFragment, productBasicFragment } from "@uncnsrdlabel/graphql-shopify-storefront/server";
import Link from "next/link";
import { notFound } from "next/navigation";


export async function Carousel({
  handle,
}: {
  handle: string;
}) {
  const lang = state$.lang.get();

  const pageFragmentRef = await getPageHandler(
    { handle }, lang
  );

  const page = getFragmentData(
    pageFragment,
    pageFragmentRef,
  );

  if (!page) return notFound();

  // Collections that start with `hidden-*` are hidden from the search page.
  const collectionProducts = await getCollectionProductsHandler({
    handle: "hidden-homepage-carousel",
  }, lang);

  const products = collectionProducts.edges.map((edge) => edge?.node);

  if (!products?.length) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-carousel">
        {products.map((productFragmentRef, index) => {
          const product = getFragmentData(productBasicFragment, productFragmentRef);

          const featuredImage = getFragmentData(imageFragment, product.featuredImage);

          return (
            <Link
              key={product.id || index}
              href={`/products/${product.handle}`}
              className="relative h-[30vh] w-1/2 flex-none md:w-1/3"
            >
              {featuredImage ? (
                <Image
                  alt={product.title}
                  className="h-full object-contain"
                  fill
                  sizes="33vw"
                  src={featuredImage.url}
                />
              ) : null}
              <div className="absolute inset-y-0 right-0 flex items-center justify-center">
                <div className="inline-flex p-4 text-xl font-semibold uppercase">
                  {product.title}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
