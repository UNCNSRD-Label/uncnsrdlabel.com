"use server";

import { state$ } from "@/lib/store";
// import { ProductAdditionalDetails } from "@/components/product/additional-details";
import { LoadingDots } from "@/components/loading/dots";
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

  const productDetailsFragmentRef = await getProductDetailsByHandleHandler(
    { handle },
    lang,
  );

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

export default async function ProductPage({ params: { handle } }: PageProps) {
  // TODO: Remove getFragmentData from all server.<method> calls
  const productDetailsFragmentRef = await getProductDetailsByHandleHandler({
    handle,
  });

  if (!productDetailsFragmentRef) return notFound();

  return (
    <>
      <Breadcrumb
        className="relative z-20 my-6 hidden lg:grid lg:grid-cols-12 [&>*]:lg:col-start-2 [&>*]:lg:col-end-10"
        productDetailsFragmentRef={productDetailsFragmentRef}
      />
      <main className="mb-48 min-h-[100dvh] [&:has(+_aside)]:mb-0">
        <Details productDetailsFragmentRef={productDetailsFragmentRef} />
        {/* <ProductAdditionalDetails productDetailsFragmentRef={productDetailsFragmentRef} /> */}
      </main>
      <Suspense fallback={<LoadingDots />}>
        <RelatedProducts
          className="text-dark relative bg-white pb-48 pt-12 [contain:paint]"
          productDetailsFragmentRef={productDetailsFragmentRef}
        />
      </Suspense>
    </>
  );
}
