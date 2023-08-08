import { clsx } from "clsx";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Product as ProductSchema, WithContext } from "schema-dts";

import { Grid } from "@/components/grid";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { ProductDetails } from "@/components/product/details";
import { getProduct, getProductRecommendations } from "@uncnsrdlabel/graphql-shopify-storefront/utilities";
import { HIDDEN_PRODUCT_TAG } from "@uncnsrdlabel/lib/constants";

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

  const jsonLd: WithContext<ProductSchema> = {
    "@context": "https://schema.org",
    "@type": "Product",
    identifier: product.id,
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
    <aside className={clsx("px-4 pb-48 pt-12", className)}>
      <div className="mb-8 text-center text-xl font-bold uppercase">
        Related Products
      </div>
      <Grid className="grid-cols-2 lg:grid-cols-5">
        <ProductGridItems products={relatedProducts} />
      </Grid>
    </aside>
  );
}
