import { type ResultOf } from "@graphql-typed-document-node/core";
import {
    localizationDetailsQuery,
    productBasicFragment,
    productDetailsFragment,
    productVariantFragment,
    shopDetailsQuery
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { toLower, upperFirst } from "lodash/fp";
import {
    Offer as OfferSchema,
    PaymentMethod as PaymentMethodSchema,
    SizeSpecification,
    WithContext
} from "schema-dts";

export const getAcceptedPaymentMethod = (shopDetails?: ResultOf<typeof shopDetailsQuery>) => {
    const acceptedPaymentMethod =
        shopDetails?.shop.paymentSettings.acceptedCardBrands.map(
            (acceptedCardBrand) =>
                `http://purl.org/goodrelations/v1#${acceptedCardBrand
                    .split("_")
                    .map((word) => upperFirst(toLower(word)))
                    .join("")}` as unknown as PaymentMethodSchema,
        ) ?? [];

    return acceptedPaymentMethod;
};

export function getAggregateOffer({
    localizationDetails,
    product,
    shopDetails,
}: {
    localizationDetails?: ResultOf<typeof localizationDetailsQuery>;
    product: ResultOf<typeof productBasicFragment | typeof productDetailsFragment>;
    shopDetails?: ResultOf<typeof shopDetailsQuery>;
}): WithContext<OfferSchema> {
    const acceptedPaymentMethod = getAcceptedPaymentMethod(shopDetails);

    const releaseDate = product.releaseDate?.value?.split("T")[0];

    return {
        "@context": "https://schema.org",
        "@type": "AggregateOffer",
        acceptedPaymentMethod: [{
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
        }, ...acceptedPaymentMethod],
        areaServed: localizationDetails?.localization.country.name,
        availability: product.availableForSale ? "InStock" : "OutOfStock",
        ...(releaseDate && { availabilityStarts: new Date(releaseDate).toISOString() }),
        category: product.productType,
        highPrice: product.priceRange.maxVariantPrice.amount,
        lowPrice: product.priceRange.minVariantPrice.amount,
        priceCurrency: product.priceRange.minVariantPrice.currencyCode,
        url: `/products/${product.handle}`,
    }
}

export function getOffer({
    localizationDetails,
    product,
    shopDetails,
    variant
}: {
    localizationDetails?: ResultOf<typeof localizationDetailsQuery>;
    product: ResultOf<typeof productBasicFragment | typeof productDetailsFragment>;
    shopDetails?: ResultOf<typeof shopDetailsQuery>;
    variant: ResultOf<typeof productVariantFragment>;
}): WithContext<OfferSchema> {
    const acceptedPaymentMethod = getAcceptedPaymentMethod(shopDetails);

    const releaseDate = product.releaseDate?.value?.split("T")[0];

    return {
        "@context": "https://schema.org",
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
    }
};

export function getSize({
    variant,
}: {
    variant: ResultOf<typeof productVariantFragment>;
}): WithContext<SizeSpecification> {
    return {
        "@context": "https://schema.org",
        "@type": "SizeSpecification",
        sizeSystem: "https://schema.org/WearableSizeSystemEurope",
        sizeGroup: [
            "https://schema.org/WearableSizeGroupWomens",
            "https://schema.org/WearableSizeGroupRegular",
        ],
        name: variant.selectedOptions.find(
            (selectedOption) => selectedOption.name === "Size",
        )?.value,
        // hasMeasurement: [
        //   {
        //     "@type": "QuantitativeValue",
        //     valueReference: "https://schema.org/WearableMeasurementChestOrBust",
        //     unitCode: "CMT",
        //     value: 52,
        //   },
        // ],
        suggestedGender: "female",
        suggestedAge: {
            "@type": "QuantitativeValue",
            name: "adult",
            unitCode: "ANN",
            minValue: 16,
        },
        // suggestedMeasurement: [
        //   {
        //     "@type": "QuantitativeValue",
        //     valueReference: "https://schema.org/BodyMeasurementChest",
        //     unitCode: "CMT",
        //     minValue: 51,
        //     maxValue: 54,
        //   },
        // ],
    };
}