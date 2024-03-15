import { NavigationEvents } from "@/components/navigation-events";
import { ProductDetails } from "@/components/product/details";
import { getDictionary } from "@/lib/dictionary";
import { getAlternativeLanguages } from "@/lib/i18n";
import { getCanonical } from "@/lib/metadata";
import { type PageProps } from "@/types/next";
import { createIntl } from "@formatjs/intl";
import {
  getFragmentData,
  getLocalizationDetailsHandler,
  getProductDetailsByHandleHandler,
  productDetailsFragment,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { HIDDEN_PRODUCT_TAG, SITE_DOMAIN_WEB } from "@uncnsrdlabel/lib";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import { Breadcrumb } from "./breadcrumb";
import { RelatedProducts } from "./related-products";

export async function generateMetadata({
  params: { handle, lang },
}: PageProps): Promise<Metadata> {
  const localization = await getLocalizationDetailsHandler({ lang });

  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const path = `/products/${handle}`;

  const productDetailsFragmentRef = await getProductDetailsByHandleHandler({
    variables: { handle },
    lang,
  });

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  if (!product) return notFound();

  const seo = getFragmentData(seoFragment, product.seo);

  const hide = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    alternates: {
      canonical: getCanonical({
        lang,
        path
      }),
      languages: getAlternativeLanguages({ localization, path }),
    },
    title:
      seo.title ||
      intl.formatMessage(
        { id: "page.products.title" },
        { title: product.title },
      ),
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

export default async function ProductsPage({
  params: { handle, lang },
}: PageProps) {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const productDetailsFragmentRef = await getProductDetailsByHandleHandler({
    variables: {
      handle,
    },
    lang,
  });

  if (!productDetailsFragmentRef) return notFound();

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  if (!product) return notFound();

  return (
    <div className="relative grid grid-rows-[1fr_auto]">
      <Breadcrumb
        className="sticky left-0 top-0 z-10 hidden h-0 translate-y-6 overflow-y-visible sm:flex px-16"
        productDetailsFragmentRef={productDetailsFragmentRef}
      />
      <main className="top-0 mb-16 grid grid-cols-12 bg-inherit lg:sticky lg:overflow-y-hidden portrait:lg:h-[85dvw] landscape:h-[100dvh] [&:has(+_aside)]:mb-0">
        <h1 className="sr-only">
          {intl.formatMessage(
            { id: "page.products.title" },
            { title: product.title },
          )}
        </h1>
        <ProductDetails
          lang={lang}
          productDetailsFragmentRef={productDetailsFragmentRef}
        />
        {/* <ProductAdditionalDetails productDetailsFragmentRef={productDetailsFragmentRef} /> */}
      </main>
      <RelatedProducts
        className="text-dark bg-light relative [contain:layout_style]"
        lang={lang}
        productDetailsFragmentRef={productDetailsFragmentRef}
      />
      <Suspense fallback={null}>
        <NavigationEvents pageType="product" />
      </Suspense>
    </div>
  );
}
