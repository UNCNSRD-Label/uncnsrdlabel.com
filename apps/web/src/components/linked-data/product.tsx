import { type ResultOf } from "@graphql-typed-document-node/core";
import { parseGid } from "@shopify/hydrogen";
import { useQuery } from "@tanstack/react-query";
import {
  getFragmentData,
  getInContextVariables,
  getShopifyGraphQL,
  imageFragment,
  localizationDetailsQuery,
  productDetailsFragment,
  shopDetailsQuery,
  type ProductVariant
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getQueryKey } from "@uncnsrdlabel/lib";
import { toLower, upperFirst } from "lodash/fp";
import Script from "next/script";
import {
  ImageObject as ImageObjectSchema,
  PaymentMethod as PaymentMethodSchema,
  Product as ProductSchema,
  WithContext,
} from "schema-dts";

export function LinkedDataProduct({
  id,
  lang,
  product,
  variant,
}: {
  id?: string;
  lang: Intl.BCP47LanguageTag;
  product: ResultOf<typeof productDetailsFragment | typeof productDetailsFragment>;
  variant: Pick<ProductVariant, "availableForSale" | "compareAtPrice" | "id" | "barcode" | "currentlyNotInStock" | "image" | "price" | "quantityAvailable" | "requiresShipping" | "selectedOptions" | "sku" | "taxable" | "title" | "weight">;
}) {
  const inContextVariables = getInContextVariables(lang);

  const variables = {
    lang,
    ...inContextVariables,
  };

  const { data: localizationDetails } = useQuery({
    queryKey: getQueryKey(localizationDetailsQuery, variables),
    queryFn: () => getShopifyGraphQL(localizationDetailsQuery, variables),
  });

  const { data: shopDetails } = useQuery({
    queryKey: getQueryKey(shopDetailsQuery, variables),
    queryFn: () => getShopifyGraphQL(shopDetailsQuery, variables),
  });

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

  const acceptedPaymentMethod =
    shopDetails?.shop.paymentSettings.acceptedCardBrands.map(
      (acceptedCardBrand) =>
        `http://purl.org/goodrelations/v1#${acceptedCardBrand
          .split("_")
          .map((word) => upperFirst(toLower(word)))
          .join("")}` as unknown as PaymentMethodSchema,
    ) ?? [];

  const associatedMedia = product.images?.edges
    .map(({ node }) => getFragmentData(imageFragment, node))
    .map((image) => shopifyImageToImageObject(image));

  const featuredImage = getFragmentData(imageFragment, product.featuredImage);

  const releaseDate = product.releaseDate?.value?.split("T")[0];

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
      productID: product.id,
      url: `/products/${product.handle}`,
    },
    keywords: product.tags,
    mainEntityOfPage: `/products/${product.handle}`,
    name: product.title,
    offers: {
      "@type": "Offer",
      acceptedPaymentMethod: [
        {
          "@type": "LoanOrCredit",
          amount: {
            "@type": "MonetaryAmount",
            currency: localizationDetails?.localization.country.currency.isoCode,
            value: product.priceRange.minVariantPrice.amount,
          },
          currency: localizationDetails?.localization.country.currency.isoCode,
          loanTerm: {
            "@type": "QuantitativeValue",
            maxValue: 4,
            minValue: 1,
            unitCode: "MON",
            unitText: "month",
          },
        },
        ...acceptedPaymentMethod,
      ],
      areaServed: localizationDetails?.localization.country.name,
      availability: product.availableForSale ? "InStock" : "OutOfStock",
      ...(releaseDate && {
        availabilityStarts: new Date(releaseDate).toISOString(),
      }),
      category: product.productType,
      price: product.priceRange.minVariantPrice.amount,
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      url: `/products/${product.handle}?${variant.selectedOptions.map((selectedOption) => `${selectedOption.name.toLowerCase()}=${selectedOption.value.toLowerCase()}`).join("&")}`,
    },
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
