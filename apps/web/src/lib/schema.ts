import { type ResultOf } from "@graphql-typed-document-node/core";
import { useQuery } from "@tanstack/react-query";
import {
    getInContextVariables,
    getShopifyGraphQL,
    localizationDetailsQuery,
    productBasicFragment,
    productDetailsFragment,
    productVariantFragment,
    shopDetailsQuery
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getQueryKey } from "@uncnsrdlabel/lib";
import { toLower, upperFirst } from "lodash/fp";
import {
    Offer as OfferSchema,
    PaymentMethod as PaymentMethodSchema,
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
    lang,
    product,
}: {
    lang: Intl.BCP47LanguageTag;
    product: ResultOf<typeof productBasicFragment | typeof productDetailsFragment>;
}): WithContext<OfferSchema> {
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
    lang,
    product,
    variant
}: {
    lang: Intl.BCP47LanguageTag;
    product: ResultOf<typeof productBasicFragment | typeof productDetailsFragment>;
    variant: ResultOf<typeof productVariantFragment>;
}): WithContext<OfferSchema> {
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