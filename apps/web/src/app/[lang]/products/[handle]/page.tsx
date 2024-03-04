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
  seoFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { HIDDEN_PRODUCT_TAG, SITE_DOMAIN_WEB } from "@uncnsrdlabel/lib";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
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
      canonical: getCanonical(path),
      languages: getAlternativeLanguages({ localization, path }),
    },
    title: seo.title || intl.formatMessage({ id: "page.products.title" }, { title: product.title }),
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
    <div className="grid grid-rows-[1fr_auto] relative">
      <Breadcrumb
        className="relative h-0 top-3.5 left-12 hidden lg:grid lg:grid-cols-12 [&>*]:lg:col-start-2 [&>*]:lg:col-end-10"
        productDetailsFragmentRef={productDetailsFragmentRef}
      />
      <main className="mb-16 grid grid-cols-12 bg-inherit min-h-[max(100dvh,_theme(space.96))] lg:overflow-y-hidden [&:has(+_aside)]:mb-0 lg:sticky top-0">
        <h1 className="sr-only">{intl.formatMessage({ id: "page.products.title" }, { title: product.title })}</h1>
        <ProductDetails lang={lang} productDetailsFragmentRef={productDetailsFragmentRef} />
        {/* <ProductAdditionalDetails productDetailsFragmentRef={productDetailsFragmentRef} /> */}
      </main>
      <RelatedProducts
        className="text-dark relative bg-light [contain:layout_style]"
        lang={lang}
        productDetailsFragmentRef={productDetailsFragmentRef}
      />
    </div>
  );
}
