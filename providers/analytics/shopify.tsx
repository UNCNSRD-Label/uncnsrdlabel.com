"use client";

// See https://shopify.dev/docs/api/hydrogen-react/2023-04/utilities/sendshopifyanalytics
// import { useShopifyCookies } from "@shopify/hydrogen";
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
  Product,
} from "@shopify/hydrogen-react/storefront-api-types";
import { Cookies } from "react-cookie";
import type { PartialDeep } from "type-fest";

import { AnalyticsPlugin } from "analytics";
import { PluginEventFunctions } from "./types";

export interface ShopifyConfig {
  cartId?: string;
  collectionHandle?: string;
  locale: Intl.Locale;
  product?: PartialDeep<
    Product,
    {
      recurseIntoArrays: true;
    }
  >;
  shopId: string;
  storefrontId?: string;
}

export type ShopifyAnalyticsPlugin = AnalyticsPlugin & PluginEventFunctions;

// eslint-disable-next-line no-unused-vars
export default function shopify(config: ShopifyConfig): ShopifyAnalyticsPlugin {
  console.log({ config });

  const { cartId, collectionHandle, locale, product, shopId, storefrontId } =
    config;

  const cookies = new Cookies();

  const hasUserConsent = true;

  // useShopifyCookies({ hasUserConsent });

  // const cartId = cookies.get("cartId");

  const customerId = cookies.get("customerId");

  const analyticsShopData = {
    /** If we have consent from buyer for data collection */
    hasUserConsent,
    /** Shopify shop id in the form of `gid://shopify/Shop/<id>`. */
    shopId,
    /** Currency code. */
    currency: "USD" as CurrencyCode,
    /** Shopify storefront id generated by Hydrogen sales channel. */
    storefrontId,
    /** Language displayed to buyer. */
    acceptedLanguage: locale.language as LanguageCode,
    /** Shopify sales channel. */
    shopifySalesChannel: ShopifySalesChannel.headless,
    /** Shopify customer id in the form of `gid://shopify/Customer/<id>`. */
    customerId,
    /** Total value of products. */
    // totalValue: ???????,
    /** Product list. */
    // products: ShopifyAnalyticsProduct[];
  };

  const sendShopifyAnalyticsPayloadBase = {
    ...analyticsShopData,
    hasUserConsent,
    shopDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
  };

  return {
    /* Name is a required field for plugins */
    name: "shopify-plugin",
    /* Bootstrap runs when analytics starts */
    bootstrap: ({ payload, config, instance }) => {
      // Do whatever on `bootstrap` event
      console.log("bootstrap", { payload, config, instance });
    },
    page: ({ payload, config, instance }) => {
      console.log("page", { payload, config, instance });

      const shopifyPageViewPayload: ShopifyPageViewPayload = {
        ...getClientBrowserParameters(),
        ...sendShopifyAnalyticsPayloadBase,
        /** Canonical url. */
        canonicalUrl: payload.properties.url,
        /** Shopify page type. */
        pageType: AnalyticsPageType.product,
        /** Shopify resource id in the form of `gid://shopify/<type>/<id>`. */
        ...(product && {
          resourceId: `gid://shopify/${AnalyticsPageType.product}>/${product.id}`,
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
    pageStart: ({ payload, config, instance }) => {
      // Fire custom logic before analytics.page() calls
      console.log("pageStart", { payload, config, instance });
    },
    pageEnd: ({ payload, config, instance }) => {
      // Fire custom logic after analytics.page() calls
      console.log("pageEnd", { payload, config, instance });
    },
    trackStart: ({ payload, config, instance }) => {
      // Fire custom logic before analytics.track() calls
      console.log("trackStart", { payload, config, instance });
    },
    trackEnd: ({ payload, config, instance }) => {
      // Fire custom logic after analytics.track() calls
      console.log("trackEnd", { payload, config, instance });
    },
    "track:addToCart": ({ payload, config, instance }) => {
      // Here you can customize the data sent to individual analytics providers
      console.log("track:addToCart", { payload, config, instance });

      if (cartId) {
        const shopifyAddToCartPayload: ShopifyAddToCartPayload = {
          ...getClientBrowserParameters(),
          ...sendShopifyAnalyticsPayloadBase,
          /** Shopify cart id in the form of `gid://shopify/Cart/<id>`. */
          cartId,
        };

        sendShopifyAnalytics({
          eventName: AnalyticsEventName.ADD_TO_CART,
          payload: shopifyAddToCartPayload,
        });
      }
    },
  };
}
