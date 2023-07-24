"use client";

// See https://shopify.dev/docs/api/hydrogen-react/2023-04/utilities/sendshopifyanalytics
// import { useShopifyCookies } from "@shopify/hydrogen";
import {
  AnalyticsEventName,
  getClientBrowserParameters,
  sendShopifyAnalytics,
} from "@shopify/hydrogen-react";
import type {
  CurrencyCode,
  LanguageCode,
} from "@shopify/hydrogen-react/storefront-api-types";
import { Cookies } from "react-cookie";

export default function Shopify(userConfig: { shopId: string }) {
  console.log({ userConfig });

  const { shopId } = userConfig;

  const cookies = new Cookies();

  const hasUserConsent = true;

  // useShopifyCookies({ hasUserConsent });

  // const { id: cartId } = useCart();

  // const { storefrontId } = useShop();

  // const { locale, defaultLocale } = useRouter();

  // const localeDetails = new Intl.Locale(locale || defaultLocale || "en-US");
  const localeDetails = new Intl.Locale("en-US");

  const cartId = cookies.get("cartId");

  const analyticsShopData = {
    cartId,
    shopId,
    currency: "USD" as CurrencyCode,
    acceptedLanguage: localeDetails.language as LanguageCode,
  };

  return {
    /* Name is a required field for plugins */
    name: "shopify-plugin",
    /* Bootstrap runs when analytics starts */
    bootstrap: ({ payload, config, instance }) => {
      // Do whatever on `bootstrap` event
      console.log({ payload, config, instance });
    },
    page: ({ payload, config, instance }) => {
      console.log({ payload, config, instance });
      const analyticsPageData = {
        hasUserConsent,
        ...analyticsShopData,
      };

      const sendShopifyAnalyticsPayload = {
        ...getClientBrowserParameters(),
        ...analyticsPageData,
        shopDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
      };

      sendShopifyAnalytics({
        eventName: AnalyticsEventName.PAGE_VIEW,
        payload: sendShopifyAnalyticsPayload,
      });
    },
    pageStart: ({ payload, config, instance }) => {
      // Fire custom logic before analytics.page() calls
      console.log({ payload, config, instance });
    },
    pageEnd: ({ payload, config, instance }) => {
      // Fire custom logic after analytics.page() calls
      console.log({ payload, config, instance });
    },
    trackStart: ({ payload, config, instance }) => {
      // Fire custom logic before analytics.track() calls
      console.log({ payload, config, instance });
    },
    "track:customerio": ({ payload, config, instance }) => {
      // Fire custom logic before customer.io plugin runs.
      // Here you can customize the data sent to individual analytics providers
      console.log({ payload, config, instance });
    },
    trackEnd: ({ payload, config, instance }) => {
      // Fire custom logic after analytics.track() calls
      console.log({ payload, config, instance });
    },
    // ... hook into other events
  };
}
