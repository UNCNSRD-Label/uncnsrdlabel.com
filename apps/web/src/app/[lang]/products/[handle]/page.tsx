import { server } from "@/clients/shopify";
import { Grid } from "@/components/grid";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { ProductDetails } from "@/components/product/details";
import { getIntl } from "@/lib/i18n/server";
import { type PageProps } from "@/types/next";
import {
    getFragmentData,
    imageFragment,
    seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { HIDDEN_PRODUCT_TAG, cn } from "@uncnsrdlabel/lib";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Product as ProductSchema, WithContext } from "schema-dts";

// export const runtime = "edge";

export async function generateMetadata({
  params: { handle },
}: PageProps): Promise<Metadata> {
  const product = await server.getProductDetails({ handle });

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
              alt: alt || product.title,
              height: height ?? undefined,
              url,
              width: width ?? undefined,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage({
  params: { handle, lang },
}: PageProps) {
  const product = await server.getProductDetails({ handle });

  if (!product) return notFound();

  const featuredImage = getFragmentData(imageFragment, product.featuredImage);

  const jsonLd: WithContext<ProductSchema> = {
    "@context": "https://schema.org",
    "@type": "Product",
    identifier: product.id,
    name: product.title,
    image: {
      "@type": "ImageObject",
      about: featuredImage?.altText || product.title,
      height: featuredImage?.height?.toString() ?? undefined,
      url: featuredImage?.url,
      width: featuredImage?.width?.toString() ?? undefined,
    },
    description: product.description,
  };

  return (
    <>
      <main className="min-h-[100dvh]">
        <ProductDetails product={product} />
      </main>
      <Suspense>
        <RelatedProducts
          className="text-dark dark:text-light relative bg-gray-300 pb-48 pt-12 dark:bg-gray-800"
          id={product.id}
          lang={lang}
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
  lang,
}: {
  className?: string;
  id: string;
  lang: Intl.BCP47LanguageTag;
}) {
  const intl = await getIntl(lang, `component.RelatedProducts`);

  const relatedProducts = await server.getProductRecommendations({
    productId: id,
  });

  if (!relatedProducts.length) return null;

  return (
    <aside className={cn("px-4 pb-48 pt-12", className)}>
      <div className="mb-8 text-center text-xl font-bold uppercase">
        {intl.formatMessage({ id: "title" })}
      </div>
      <Grid className="grid-cols-2 lg:grid-cols-5">
        <ProductGridItems products={relatedProducts} />
      </Grid>
    </aside>
  );
}
