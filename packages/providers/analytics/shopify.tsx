"use client";

import {
    AnalyticsEventName,
    AnalyticsPageType,
    ShopifySalesChannel,
    getClientBrowserParameters,
    sendShopifyAnalytics,
    type ShopifyAddToCartPayload,
    type ShopifyPageViewPayload,
} from "@shopify/hydrogen-react";
import type {
    CurrencyCode,
    LanguageCode,
} from "@shopify/hydrogen-react/storefront-api-types";
import { Cookies } from "react-cookie";

import { AnalyticsPlugin } from "analytics";
import { PluginEventFunctions } from "./types";

export interface ShopifyConfig {
  collectionHandle?: string;
  hasUserConsent: boolean;
  locale: Intl.Locale;
  shopId: string;
  storefrontId?: string;
}

export type ShopifyAnalyticsPlugin = AnalyticsPlugin & PluginEventFunctions;

// eslint-disable-next-line no-unused-vars
export function shopify(config: ShopifyConfig): ShopifyAnalyticsPlugin {
  const { collectionHandle, hasUserConsent, locale, shopId, storefrontId } =
    config;

  const cookies = new Cookies();

  const customerId = cookies.get("customerId");

  const analyticsShopData = {
    /** If we have consent from buyer for data collection */
    hasUserConsent,
    /** Shopify shop id in the form of `gid://shopify/Shop/<id>`. */
    shopId,
    /** Currency code. */
    // currency: See instances of analyticsShopData
    /** Shopify storefront id generated by Hydrogen sales channel. */
    storefrontId,
    /** Language displayed to buyer. */
    acceptedLanguage: locale.language as LanguageCode,
    /** Shopify sales channel. */
    shopifySalesChannel: ShopifySalesChannel.headless,
    /** Shopify customer id in the form of `gid://shopify/Customer/<id>`. */
    customerId,
    /** Total value of products. */
    // totalValue: See instances of analyticsShopData
    /** Product list. */
    // products: See instances of analyticsShopData
  };

  const sendShopifyAnalyticsPayloadBase = {
    ...analyticsShopData,
    hasUserConsent,
    shopDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
  };

  return {
    /* Name is a required field for plugins */
    name: "shopify-plugin",
    page: ({ payload }) => {
      // console.log("shopify:page", { payload, config, instance });

      const shopifyPageViewPayload: ShopifyPageViewPayload = {
        ...getClientBrowserParameters(),
        ...sendShopifyAnalyticsPayloadBase,
        /** Currency code. */
        currency: payload.properties.product?.priceRange.minVariantPrice
          .currencyCode as CurrencyCode,
        /** Total value of products. */
        totalValue: Number.parseInt(
          payload.properties.product?.priceRange.minVariantPrice.amount,
        ),
        /** Product list. */
        products: [
          {
            ...payload.properties.product,
            productGid: payload.properties.product?.id,
            name: payload.properties.product?.title,
            brand: payload.properties.product?.vendor,
            price:
              payload.properties.product?.priceRange.minVariantPrice.amount,
          },
        ],
        /** Canonical url. */
        canonicalUrl: payload.properties.url,
        /** Shopify page type. */
        pageType: AnalyticsPageType.page,
        /** Shopify resource id in the form of `gid://shopify/<type>/<id>`. */
        ...(payload.properties.product && {
          resourceId: `gid://shopify/${AnalyticsPageType.product}>/${payload.properties.product.id}`,
        }),
        /** Shopify collection handle. */
        collectionHandle,
        /** Search term used on a search results page. */
        searchString: payload.properties.search,
      };

      sendShopifyAnalytics({
        eventName: AnalyticsEventName.PAGE_VIEW,
        payload: shopifyPageViewPayload,
      });
    },
    track: ({ payload, config }) => {
      // Fire custom logic after analytics.track() calls
      // console.log("shopify:trackEnd", { payload, config, instance });

      if (payload.event === "product") {
        const shopifyPageViewPayload: ShopifyPageViewPayload = {
          ...getClientBrowserParameters(),
          ...sendShopifyAnalyticsPayloadBase,
          /** Currency code. */
          currency: payload.properties.product?.priceRange.minVariantPrice
            .currencyCode as CurrencyCode,
          /** Total value of products. */
          totalValue: Number.parseInt(
            payload.properties.product?.priceRange.minVariantPrice.amount,
          ),
          /** Product list. */
          products: [
            {
              ...payload.properties.product,
              productGid: payload.properties.product?.id,
              name: payload.properties.product?.title,
              brand: payload.properties.product?.vendor,
              price:
                payload.properties.product?.priceRange.minVariantPrice.amount,
            },
          ],
          /** Canonical url. */
          canonicalUrl: payload.properties.url,
          /** Shopify page type. */
          pageType: AnalyticsPageType.product,
          /** Shopify resource id in the form of `gid://shopify/<type>/<id>`. */
          ...(payload.properties.product && {
            resourceId: `gid://shopify/${AnalyticsPageType.product}>/${payload.properties.product.id}`,
          }),
          /** Shopify collection handle. */
          collectionHandle,
          /** Search term used on a search results page. */
          searchString: payload.properties.search,
        };

        sendShopifyAnalytics({
          eventName: AnalyticsEventName.PAGE_VIEW,
          payload: shopifyPageViewPayload,
        });
      }

      if (payload.event === "addToCart") {
        const { cartId } = config.options;

        if (cartId) {
          const shopifyAddToCartPayload: ShopifyAddToCartPayload = {
            ...getClientBrowserParameters(),
            ...sendShopifyAnalyticsPayloadBase,
            /** Currency code. */
            currency: payload.properties.product?.priceRange.minVariantPrice
              .currencyCode as CurrencyCode,
            /** Total value of products. */
            totalValue: Number.parseInt(
              payload.properties.product?.priceRange.minVariantPrice.amount,
            ),
            /** Product list. */
            products: [
              {
                ...payload.properties.product,
                productGid: payload.properties.product?.id,
                name: payload.properties.product?.title,
                brand: payload.properties.product?.vendor,
                price:
                  payload.properties.product?.priceRange.minVariantPrice.amount,
              },
            ],
            /** Shopify cart id in the form of `gid://shopify/Cart/<id>`. */
            cartId,
          };

          sendShopifyAnalytics({
            eventName: AnalyticsEventName.ADD_TO_CART,
            payload: shopifyAddToCartPayload,
          });
        }
      }
    },
  };
}
