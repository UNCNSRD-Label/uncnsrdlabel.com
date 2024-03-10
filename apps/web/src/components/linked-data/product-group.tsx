import { type ResultOf } from "@graphql-typed-document-node/core";
import {
  getFragmentData,
  getLocalizationDetailsHandler,
  getShopDetailsHandler,
  imageFragment,
  productDetailsFragment,
  productMetafieldFragment,
  productVariantConnectionFragment,
  type FragmentType,
  type ProductVariant,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { toLower, upperFirst } from "lodash/fp";
import Script from "next/script";
import { ImageObject as ImageObjectSchema, PaymentMethod as PaymentMethodSchema, ProductGroup as ProductGroupSchema, WithContext } from "schema-dts";

export async function LinkedDataProductGroup({
  lang,
  productDetailsFragmentRef,
}: {
  lang: Intl.BCP47LanguageTag;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const localization = await getLocalizationDetailsHandler({
    lang,
  });

  const shopDetails = await getShopDetailsHandler({ lang });

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

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

  const acceptedPaymentMethod = shopDetails.paymentSettings.acceptedCardBrands.map(
    (acceptedCardBrand) => `http://purl.org/goodrelations/v1#${acceptedCardBrand.split("_").map(word => upperFirst(toLower(word))).join("")}` as unknown as PaymentMethodSchema,
  );

  const associatedMedia = product.images?.edges
    .map(({ node }) => getFragmentData(imageFragment, node))
    .map((image) => shopifyImageToImageObject(image));

  const featuredImage = getFragmentData(imageFragment, product.featuredImage);

  const releaseDateTime = getFragmentData(
    productMetafieldFragment,
    product.releaseDate,
  )?.value;

  const releaseDate = releaseDateTime?.split("T")[0];

  console.log({ product, releaseDateTime, releaseDate })

  const variantsFragmentRefs = product.variants;

  const variantFragments = getFragmentData(
    productVariantConnectionFragment,
    variantsFragmentRefs,
  );

  const variants: Pick<ProductVariant, "id" | "selectedOptions">[] =
    variantFragments.edges.map((edge) => edge?.node);

  const jsonLd: WithContext<ProductGroupSchema> = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    description: product.description,
    hasVariant: variants.map((variant) => ({
      "@type": "Product",
      identifier: variant.id,
      name: variant.selectedOptions.map((selectedOption) => selectedOption.value).join(" / "),
      productID: variant.id,
      url: `/products/${product.handle}?${variant.selectedOptions.map((selectedOption) => `${selectedOption.name}=${selectedOption.value}`).join("&")}`,
    })),
    identifier: product.id,
    ...(featuredImage && {
      image: { ...shopifyImageToImageObject(featuredImage), associatedMedia },
    }),
    keywords: product.tags,
    name: product.title,
    offers: {
      "@type": "AggregateOffer",
      acceptedPaymentMethod: [{
        "@type": "LoanOrCredit",
        amount: {
          "@type": "MonetaryAmount",
          currency: localization.country.currency.isoCode,
          value: product.priceRange.minVariantPrice.amount,
        },
        currency: localization.country.currency.isoCode,
        loanTerm: {
          "@type": "QuantitativeValue",
          maxValue: 4,
          minValue: 1,
          unitCode: "MON",
          unitText: "month",
        },
      }, ...acceptedPaymentMethod],
      areaServed: localization.country.name,
      availability: product.availableForSale ? "InStock" : "OutOfStock",
      ...(releaseDate && { availabilityStarts: new Date(releaseDate).toISOString() }),
      category: product.productType,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      url: `/products/${product.handle}`,
    },
    productGroupID: product.id,
    variesBy: product.options.map((option) => option.name),
  };

  return (
    <Script
      id="LinkedDataProductGroup"
      key="LinkedDataProductGroup"
      type="application/ld+json"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}
