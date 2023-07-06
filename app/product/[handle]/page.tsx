import { clsx } from "clsx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Product, WithContext } from "schema-dts";

import Grid from "components/grid";
import ProductGridItems from "components/layout/product-grid-items";
import { ProductDetails } from "components/product/details";
import { HIDDEN_PRODUCT_TAG } from "lib/constants";
import { getProduct, getProductRecommendations } from "lib/shopify";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const hide = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
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
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const jsonLd: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: {
      "@type": "ImageObject",
      about: product.featuredImage?.altText,
      height: product.featuredImage?.height.toString(),
      url: product.featuredImage?.url,
      width: product.featuredImage?.width.toString(),
    },
    description: product.description,
  };

  return (
    <>
      <ProductDetails product={product} />
      <Suspense>
        <RelatedProducts
          className="relative bg-gray-300 pb-48 pt-12 text-dark dark:bg-gray-800 dark:text-light"
          id={product.id}
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
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className={clsx("px-4 py-8", className)}>
      <div className="mb-4 text-center text-xl font-bold uppercase">
        Related Products
      </div>
      <Grid className="grid-cols-2 lg:grid-cols-5">
        <ProductGridItems products={relatedProducts} />
      </Grid>
    </div>
  );
}
