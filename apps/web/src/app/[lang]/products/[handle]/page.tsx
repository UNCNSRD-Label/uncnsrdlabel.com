'use server';

import { state$ } from "@/lib/store";
// import { ProductAdditionalDetails } from "@/components/product/additional-details";
import { Details } from "@/components/product/details";
import { type PageProps } from "@/types/next";
import {
  getFragmentData,
  getProductDetailsByHandleHandler,
  imageFragment,
  productDetailsFragment,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { HIDDEN_PRODUCT_TAG } from "@uncnsrdlabel/lib";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Breadcrumb } from "./breadcrumb";
import { RelatedProducts } from "./related-products";

// export const runtime = "edge";

export async function generateMetadata({
  params: { handle },
}: PageProps): Promise<Metadata> {
  const lang = state$.lang.get();

  const productDetailsFragmentRef = await getProductDetailsByHandleHandler({ handle }, lang);

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
  params: { handle },
}: PageProps) {
  // TODO: Remove getFragmentData from all server.<method> calls
  const productDetailsFragmentRef = await getProductDetailsByHandleHandler({ handle });

  if (!productDetailsFragmentRef) return notFound();

  return (
    <>
      <Breadcrumb className="hidden my-6 lg:grid lg:grid-cols-12 [&>*]:lg:col-start-2 [&>*]:lg:col-end-10 relative z-20" productDetailsFragmentRef={productDetailsFragmentRef} />
      <main className="min-h-[100dvh] mb-48 [&:has(+_aside)]:mb-0">
        <Details productDetailsFragmentRef={productDetailsFragmentRef} />
        {/* <ProductAdditionalDetails productDetailsFragmentRef={productDetailsFragmentRef} /> */}
      </main>
      <Suspense fallback={<span>Loading&hellip;</span>}>
        <RelatedProducts
          className="bg-white text-dark relative pb-48 pt-12 [contain:paint]"
          productDetailsFragmentRef={productDetailsFragmentRef}
        />
      </Suspense>
    </>
  );
}