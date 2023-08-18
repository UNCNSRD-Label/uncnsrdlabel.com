import { Image } from "@/components/image";
import { getFragmentData, imageFragment, productFragment, useGetCollectionProducts, useGetPage } from "@uncnsrdlabel/graphql-shopify-storefront";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function Carousel() {
  const page = useGetPage({
    handle: "home"
  });

  if (!page) return notFound();

  // Collections that start with `hidden-*` are hidden from the search page.
  const products = useGetCollectionProducts({
    handle: "hidden-homepage-carousel",
  });

  if (!products?.edges.length) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-carousel">
        {products.edges.map(({ node }, index) => {
          const product = getFragmentData(productFragment, node);
          const featuredImage = getFragmentData(imageFragment, product.featuredImage);

          return (
            <Link
              key={product.id || index}
              href={`/products/${product.handle}`}
              className="relative h-[30vh] w-1/2 flex-none md:w-1/3"
            >
              {product.featuredImage ? (
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
