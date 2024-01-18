import { Details } from "@/components/product/details";
import { getAlternativeLanguages } from "@/lib/i18n";
import { type PageProps } from "@/types/next";
import {
  getFragmentData,
  getLocalizationDetailsHandler,
  getProductDetailsByHandleHandler,
  productDetailsFragment,
  seoFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { HIDDEN_PRODUCT_TAG, SITE_DOMAIN_WEB } from "@uncnsrdlabel/lib";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "./breadcrumb";
import { RelatedProducts } from "./related-products";

export async function generateMetadata({
  params: { handle, lang },
}: PageProps): Promise<Metadata> {
  if(!lang) {
    console.error("No lang in products generateMetadata")
  }

  const localization = await getLocalizationDetailsHandler({ lang });

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
      languages: getAlternativeLanguages({ localization, path }),
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
    <div className="grid grid-rows-[1fr_auto] relative top-0 z-40">
      <Breadcrumb
        className="absolute left-12 top-6 z-20 hidden lg:grid lg:grid-cols-12 [&>*]:lg:col-start-2 [&>*]:lg:col-end-10"
        productDetailsFragmentRef={productDetailsFragmentRef}
      />
      <main className="mb-16 grid grid-cols-12 content-center bg-inherit min-h-[100dvh] lg:h-[100dvh] lg:overflow-y-hidden [&:has(+_aside)]:mb-0 lg:sticky top-0">
        <Details lang={lang} productDetailsFragmentRef={productDetailsFragmentRef} />
        {/* <ProductAdditionalDetails productDetailsFragmentRef={productDetailsFragmentRef} /> */}
      </main>
      <RelatedProducts
        className="text-dark relative bg-white z-50 [contain:layout_style]"
        lang={lang}
        productDetailsFragmentRef={productDetailsFragmentRef}
      />
    </div>
  );
}
