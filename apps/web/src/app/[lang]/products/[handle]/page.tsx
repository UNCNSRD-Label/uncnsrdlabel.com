import { LoadingDots } from "@/components/loading/dots";
import { Details } from "@/components/product/details";
import { state$ } from "@/lib/store";
import { type PageProps } from "@/types/next";
import {
  getFragmentData,
  getProductDetailsByHandleHandler,
  productDetailsFragment,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { HIDDEN_PRODUCT_TAG, SITE_DOMAIN_WEB } from "@uncnsrdlabel/lib";
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

  const productDetailsFragmentRef = await getProductDetailsByHandleHandler({
    variables: { handle },
    lang,
  });

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  const seo = getFragmentData(seoFragment, product.seo);

  if (!product) return notFound();

  const hide = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  const path = `/products/${handle}`;

  return {
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DEFAULT_LOCALE}/${path}`,
      // languages: await getAlternativeLanguages({ lang, path }),
    },
    title: seo.title || product.title,
    description: seo.description || product.description,
    openGraph: {
      description: seo.description || product.description,
      title: seo.title || product.title,
      url: new URL(
        "/",
        `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}/${path}`,
      ),
    },
    robots: {
      index: hide,
      follow: hide,
      googleBot: {
        index: hide,
        follow: hide,
      },
    },
  };
}

export default async function ProductPage({
  params: { handle, lang },
}: PageProps) {
  const productDetailsFragmentRef = await getProductDetailsByHandleHandler({
    variables: {
      handle,
    },
    lang,
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
