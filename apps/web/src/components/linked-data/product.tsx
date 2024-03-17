import { getAggregateOffer, getOffer } from "@/lib/schema";
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
    description: product.description,
    identifier: variant.id,
    ...(featuredImage && {
      image: { ...shopifyImageToImageObject(featuredImage), associatedMedia },
    }),
    isVariantOf: {
      "@type": "ProductGroup",
      identifier: product.id,
      name: product.title,
      offers: getAggregateOffer({ localizationDetails, product, shopDetails }),
      productID: product.id,
      url: `/products/${product.handle}`,
    },
    keywords: product.tags,
    mainEntityOfPage: `/products/${product.handle}`,
    name: product.title,
    offers: getOffer({ localizationDetails, product, shopDetails, variant }),
    productID: product.id,
    url: `/products/${product.handle}`,
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
