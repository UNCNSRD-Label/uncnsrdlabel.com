import { getAggregateOffer, getOffer, getSize } from "@/lib/schema";
import { type ResultOf } from "@graphql-typed-document-node/core";
import { parseGid } from "@shopify/hydrogen";
import {
  getFragmentData,
  getInContextVariables,
  getShopifyGraphQL,
  imageFragment,
  localizationDetailsQuery,
  productBasicFragment,
  productDetailsFragment,
  productVariantConnectionFragment,
  productVariantFragment,
  shopDetailsQuery,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import Script from "next/script";
import {
  ImageObject as ImageObjectSchema,
  ProductGroup as ProductGroupSchema,
  WithContext,
} from "schema-dts";

export async function LinkedDataProductGroup({
  id,
  lang,
  product,
}: {
  id?: string;
  lang: Intl.BCP47LanguageTag;
  product: ResultOf<
    typeof productBasicFragment | typeof productDetailsFragment
  >;
}) {
  const shopifyImageToImageObject = (
    image: ResultOf<typeof imageFragment>,
  ): ImageObjectSchema => ({
    "@type": "ImageObject",
    about: image?.altText || product.title,
    height: image?.height?.toString() ?? undefined,
    representativeOfPage: true,
    url: image?.url,
    width: image?.width?.toString() ?? undefined,
  });

  const associatedMedia = product.images?.edges
    .map(({ node }) => getFragmentData(imageFragment, node))
    .map((image) => shopifyImageToImageObject(image));

  const featuredImage = getFragmentData(imageFragment, product.featuredImage);

  const inContextVariables = getInContextVariables(lang);

  const variables = {
    lang,
    ...inContextVariables,
  };

  const localizationDetails = await getShopifyGraphQL(
    localizationDetailsQuery,
    variables,
  );

  const shopDetails = await getShopifyGraphQL(shopDetailsQuery, variables);

  const productVariantConnectionFragmentRef = product.variants;

  const productVariantFragments = getFragmentData(
    productVariantConnectionFragment,
    productVariantConnectionFragmentRef,
  );

  const productVariants: ResultOf<typeof productVariantFragment>[] =
    productVariantFragments.edges.map(({ node }) =>
      getFragmentData(productVariantFragment, node),
    );

  const jsonLd: WithContext<ProductGroupSchema> = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    brand: product.vendor,
    description: product.description,
    hasVariant: productVariants.map((variant) => ({
      "@type": "Product",
      brand: product.vendor,
      ...(variant.barcode && {
        gtin: variant.barcode,
      }),
      color: variant.selectedOptions.find(
        (selectedOption) => selectedOption.name === "Color",
      )?.value,
      description: product.description,
      identifier: variant.id,
      ...(featuredImage && {
        image: { ...shopifyImageToImageObject(featuredImage), associatedMedia },
      }),
      name: variant.title ?? variant.title,
      offers: getOffer({ product, variant }),
      productID: variant.id,
      // size: variant.selectedOptions.find(selectedOption => selectedOption.name === "Size")?.value,
      size: getSize({ variant }),
      url: `/products/${product.handle}?${variant.selectedOptions.map((selectedOption) => `${selectedOption.name.toLowerCase()}=${selectedOption.value.toLowerCase()}`).join("&")}`,
      ...(variant.weight && {
        weight: {
          "@type": "QuantitativeValue",
          unitCode: "KGM",
          value: variant.weight,
        },
      }),
    })),
    identifier: product.id,
    ...(featuredImage && {
      image: { ...shopifyImageToImageObject(featuredImage), associatedMedia },
    }),
    keywords: product.tags,
    mainEntityOfPage: `/products/${product.handle}`,
    name: product.title,
    offers: getAggregateOffer({ localizationDetails, product, shopDetails }),
    productGroupID: product.id,
    url: `/products/${product.handle}`,
    variesBy: product.options.map((option) => option.name),
  };

  return (
    <Script
      id={id ?? `LinkedDataProductGroup-${parseGid(product.id).id}`}
      key={id ?? `LinkedDataProductGroup-${parseGid(product.id).id}`}
      strategy="lazyOnload"
      type="application/ld+json"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}
