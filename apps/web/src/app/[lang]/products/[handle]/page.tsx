import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Product as ProductSchema, WithContext } from "schema-dts";

import { Grid } from "@/components/grid";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { ProductDetails } from "@/components/product/details";
import {
  getFragmentData,
  getProduct,
  getProductRecommendations,
  imageFragment,
  productFragment,
  seoFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { HIDDEN_PRODUCT_TAG, cn } from "@uncnsrdlabel/lib";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = useGetProduct(params);

  const featuredImage = getFragmentData(imageFragment, product.featuredImage);
  const seo = getFragmentData(seoFragment, product.seo);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = featuredImage || {};
  const hide = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: seo.title || product.title,
    description: seo.description || product.description,
    robots: {
      index: hide,
      follow: hide,
      googleBot: {
        index: hide,
        follow: hide,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { handle: string };
}) {
  const productFragmentRef = useGetProduct(params);

  if (!product) return notFound();

  const featuredImage = getFragmentData(imageFragment, product.featuredImage);

  const jsonLd: WithContext<ProductSchema> = {
    "@context": "https://schema.org",
    "@type": "Product",
    identifier: productFragmentRef.id,
    name: productFragmentRef.title,
    image: {
      "@type": "ImageObject",
      about: featuredImage?.altText,
      height: featuredImage?.height.toString(),
      url: featuredImage?.url,
      width: featuredImage?.width.toString(),
    },
    description: productFragmentRef.description,
  };

  return (
    <>
      <ProductDetails productFragmentRef={productFragmentRef} />
      <Suspense>
        <RelatedProducts
          className="relative bg-gray-300 pb-48 pt-12 text-dark dark:bg-gray-800 dark:text-light"
          id={productFragmentRef.id}
        />
      </Suspense>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

async function RelatedProducts({
  className,
  id,
}: {
  className?: string;
  id: string;
}) {
  const relatedProducts = useGetProductRecommendations({
    productId: id
  });

  if (!relatedProducts.length) return null;

  return (
    <aside className={cn("px-4 pb-48 pt-12", className)}>
      <div className="mb-8 text-center text-xl font-bold uppercase">
        Related Products
      </div>
      <Grid className="grid-cols-2 lg:grid-cols-5">
        <ProductGridItems products={relatedProducts} />
      </Grid>
    </aside>
  );
}
