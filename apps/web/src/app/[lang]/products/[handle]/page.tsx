import { LoadingDots } from "@/components/loading/dots";
import { Details } from "@/components/product/details";
import { getAlternativeLanguages } from "@/lib/i18n";
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

  const localization = state$.localization.get();

  const path = `/products/${handle}`;

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

  return {
    alternates: {
      canonical: `${localization.language.isoCode.toLocaleLowerCase()}-${
        localization.country.isoCode
      }/${path}`,
      languages: await getAlternativeLanguages({ localization, path }),
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
    <div className="dark relative grid grid-rows-[1fr_auto]">
      <Breadcrumb
        className="absolute left-12 top-6 z-20 hidden lg:grid lg:grid-cols-12 [&>*]:lg:col-start-2 [&>*]:lg:col-end-10"
        productDetailsFragmentRef={productDetailsFragmentRef}
      />
      <main className="mb-48 grid grid-cols-12 content-center bg-inherit min-h-[100dvh] lg:h-[100dvh] lg:overflow-y-hidden [&:has(+_aside)]:mb-0">
        <Details productDetailsFragmentRef={productDetailsFragmentRef} />
        {/* <ProductAdditionalDetails productDetailsFragmentRef={productDetailsFragmentRef} /> */}
      </main>
      <Suspense fallback={<LoadingDots />}>
        <RelatedProducts
          className="text-dark relative bg-white"
          productDetailsFragmentRef={productDetailsFragmentRef}
        />
      </Suspense>
    </div>
  );
}
