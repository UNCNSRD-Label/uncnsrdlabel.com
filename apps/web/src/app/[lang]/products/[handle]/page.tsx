import { server } from "@/clients/shopify";
import { Grid } from "@/components/grid";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { ProductAdditionalDetails } from "@/components/product/additional-details";
import { ProductDetails } from "@/components/product/details";
import { getIntl } from "@/lib/i18n/server";
import { type PageProps } from "@/types/next";
import {
  FragmentType,
  getFragmentData,
  imageFragment,
  productDetailsFragment,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { HIDDEN_PRODUCT_TAG, cn } from "@uncnsrdlabel/lib";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Breadcrumb } from "./breadcrumb";

// export const runtime = "edge";

export async function generateMetadata({
  params: { handle },
}: PageProps): Promise<Metadata> {
  const productDetailsFragmentRef = await server.getProductDetailsByHandle({ handle });

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

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
  // TODO: Remove getFragmentData from all server.<method> calls
  const productDetailsFragmentRef = await server.getProductDetailsByHandle({ handle });

  if (!productDetailsFragmentRef) return notFound();

  return (
    <>
      <Breadcrumb className="hidden my-6 lg:grid lg:grid-cols-12 [&>*]:lg:col-start-2 [&>*]:lg:col-end-10 relative z-20" productDetailsFragmentRef={productDetailsFragmentRef} />
      <main className="min-h-[100dvh] mb-48 [&:has(+_aside)]:mb-0">
        <ProductDetails productDetailsFragmentRef={productDetailsFragmentRef} />
        <ProductAdditionalDetails productDetailsFragmentRef={productDetailsFragmentRef} />
      </main>
      <Suspense>
        <RelatedProducts
          className="text-dark dark:text-light relative bg-gray-300 pb-48 pt-12 dark:bg-gray-800 [contain:paint]"
          productDetailsFragmentRef={productDetailsFragmentRef}
          lang={lang}
        />
      </Suspense>
    </>
  );
}

async function RelatedProducts({
  className,
  lang,
  productDetailsFragmentRef,
}: {
  className?: string;
  lang: Intl.BCP47LanguageTag;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const intl = await getIntl(lang, `component.RelatedProducts`);

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  if (!product) return null;

  const { id } = product;

  const productRecommendationRefs = await server.getProductRecommendations({
    productId: id,
  });

  if (!productRecommendationRefs.length) return null;

  return (
    <aside className={cn("px-4 pb-48 pt-12", className)}>
      <div className="mb-8 text-center text-xl font-bold uppercase">
        {intl.formatMessage({ id: "title" })}
      </div>
      <Grid className="grid-cols-2 lg:grid-cols-5 [&>*:last-child:nth-child(odd)]:hidden [&>*:last-child:nth-child(odd)]:lg:list-item">
        <ProductGridItems limit={5} productFragmentRefs={productRecommendationRefs} />
      </Grid>
    </aside>
  );
}
