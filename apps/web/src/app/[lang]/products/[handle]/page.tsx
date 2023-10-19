import { server } from "@/clients/shopify";
// import { ProductAdditionalDetails } from "@/components/product/additional-details";
import { Panel } from "@/components/product/panel";
import { type PageProps } from "@/types/next";
import {
  getFragmentData,
  imageFragment,
  productDetailsFragment,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
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
        <Panel productDetailsFragmentRef={productDetailsFragmentRef} />
        {/* <ProductAdditionalDetails productDetailsFragmentRef={productDetailsFragmentRef} /> */}
      </main>
      <Suspense fallback={<span>Loading&hellip;</span>}>
        <RelatedProducts
          className="bg-white text-dark relative pb-48 pt-12 [contain:paint]"
          productDetailsFragmentRef={productDetailsFragmentRef}
          lang={lang}
        />
      </Suspense>
    </>
  );
}