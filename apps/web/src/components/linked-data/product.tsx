import { getAggregateOffer, getOffer, getSize } from "@/lib/schema";
import { type ResultOf } from "@graphql-typed-document-node/core";
import { parseGid } from "@shopify/hydrogen";
import {
  getFragmentData,
  imageFragment,
  localizationDetailsQuery,
  productDetailsFragment,
  productVariantFragment,
  shopDetailsQuery,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import Script from "next/script";
import {
  ImageObject as ImageObjectSchema,
  Product as ProductSchema,
  WithContext,
} from "schema-dts";

export function LinkedDataProduct({
  id,
  localizationDetails,
  product,
  shopDetails,
  variant,
}: {
  id?: string;
  localizationDetails?: ResultOf<typeof localizationDetailsQuery>;
  product: ResultOf<
    typeof productDetailsFragment | typeof productDetailsFragment
  >;
  shopDetails?: ResultOf<typeof shopDetailsQuery>;
  variant: ResultOf<typeof productVariantFragment>;
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

  const jsonLd: WithContext<ProductSchema> = {
    "@context": "https://schema.org",
    "@type": "Product",
    brand: product.vendor,
    color: variant.selectedOptions.find(
      (selectedOption) => selectedOption.name === "Color",
    )?.value,
    description: product.description,
    ...(variant.barcode && {
      gtin: variant.barcode,
    }),
    identifier: variant.id,
    ...(featuredImage && {
      image: { ...shopifyImageToImageObject(featuredImage), associatedMedia },
    }),
    isVariantOf: {
      "@type": "ProductGroup",
      brand: {
        "@type": "Brand",
        name: product.vendor,
      },
      description: product.description,
      identifier: product.id,
      name: product.title,
      offers: getAggregateOffer({ localizationDetails, product, shopDetails }),
      productGroupID: product.id,
      url: `/products/${product.handle}`,
      variesBy: product.options.map((option) => option.name),
    },
    keywords: product.tags,
    mainEntityOfPage: `/products/${product.handle}?${variant.selectedOptions.map((selectedOption) => `${selectedOption.name.toLowerCase()}=${selectedOption.value.toLowerCase()}`).join("&")}`,
    name: variant.title ?? variant.title,
    offers: getOffer({ localizationDetails, product, shopDetails, variant }),
    productID: product.id,
    // size: variant.selectedOptions.find(
    //   (selectedOption) => selectedOption.name === "Size",
    // )?.value,
    size: getSize({ variant }),
    url: `/products/${product.handle}?${variant.selectedOptions.map((selectedOption) => `${selectedOption.name.toLowerCase()}=${selectedOption.value.toLowerCase()}`).join("&")}`,
    ...(variant.weight && {
      weight: {
        "@type": "QuantitativeValue",
        unitCode: "KGM",
        value: variant.weight,
      },
    }),
  };

  return (
    <Script
      id={id ?? `LinkedDataProduct-${parseGid(variant.id).id}`}
      key={id ?? `LinkedDataProduct-${parseGid(variant.id).id}`}
      type="application/ld+json"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}
