import { getAggregateOffer, getOffer } from "@/lib/schema";
import { type ResultOf } from "@graphql-typed-document-node/core";
import { parseGid } from "@shopify/hydrogen";
import {
  getFragmentData,
  imageFragment,
  productBasicFragment,
  productDetailsFragment,
  productVariantConnectionFragment,
  productVariantFragment
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

  const offers = getAggregateOffer({ lang, product });

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
    description: product.description,
    hasVariant: productVariants.map((variant) => {
      const offers = getOffer({ lang, product, variant });

      return {
        "@type": "Product",
        identifier: variant.id,
        name: variant.title,
        offers,
        productID: variant.id,
        url: `/products/${product.handle}?${variant.selectedOptions.map((selectedOption) => `${selectedOption.name.toLowerCase()}=${selectedOption.value.toLowerCase()}`).join("&")}`,
      };
    }),
    identifier: product.id,
    ...(featuredImage && {
      image: { ...shopifyImageToImageObject(featuredImage), associatedMedia },
    }),
    keywords: product.tags,
    mainEntityOfPage: `/products/${product.handle}`,
    name: product.title,
    offers,
    productGroupID: product.id,
    variesBy: product.options.map((option) => option.name),
  };

  return (
    <Script
      id={id ?? `LinkedDataProductGroup-${parseGid(product.id).id}`}
      key={id ?? `LinkedDataProductGroup-${parseGid(product.id).id}`}
      type="application/ld+json"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}
