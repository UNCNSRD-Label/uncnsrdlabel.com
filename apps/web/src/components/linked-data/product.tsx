import { type ResultOf } from "@graphql-typed-document-node/core";
import {
  getFragmentData,
  getLocalizationDetailsHandler,
  getShopDetailsHandler,
  imageFragment,
  productDetailsFragment,
  productMetafieldFragment,
  type FragmentType,
  type ProductVariant
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { toLower, upperFirst } from "lodash/fp";
import Script from "next/script";
import {
  ImageObject as ImageObjectSchema,
  PaymentMethod as PaymentMethodSchema,
  Product as ProductSchema,
  WithContext,
} from "schema-dts";

export async function LinkedDataProduct({
  lang,
  productDetailsFragmentRef,
  variant,
}: {
  lang: Intl.BCP47LanguageTag;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
  variant: Pick<ProductVariant, "availableForSale" | "compareAtPrice" | "id" | "barcode" | "currentlyNotInStock" | "image" | "price" | "quantityAvailable" | "requiresShipping" | "selectedOptions" | "sku" | "taxable" | "title" | "weight">;
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

  const acceptedPaymentMethod =
    shopDetails.paymentSettings.acceptedCardBrands.map(
      (acceptedCardBrand) =>
        `http://purl.org/goodrelations/v1#${acceptedCardBrand
          .split("_")
          .map((word) => upperFirst(toLower(word)))
          .join("")}` as unknown as PaymentMethodSchema,
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
    name: product.title,
    offers: {
      "@type": "Offer",
      acceptedPaymentMethod: [
        {
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
        },
        ...acceptedPaymentMethod,
      ],
      areaServed: localization.country.name,
      availability: product.availableForSale ? "InStock" : "OutOfStock",
      ...(releaseDate && {
        availabilityStarts: new Date(releaseDate).toISOString(),
      }),
      category: product.productType,
      price: product.priceRange.minVariantPrice.amount,
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      url: `/products/${product.handle}`,
    },
    productID: product.id,
  };

  return (
    <Script
      id="LinkedDataProduct"
      key="LinkedDataProduct"
      type="application/ld+json"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}
