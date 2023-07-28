"use client";

import { Cookies } from "react-cookie";

import { AnalyticsPlugin } from "analytics";
import { PluginEventFunctions } from "./types";

export interface KlaviyoConfig {
  collectionHandle?: string;
  hasUserConsent: boolean;
  locale: Intl.Locale;
  shopId: string;
  storefrontId?: string;
}

export type KlaviyoAnalyticsPlugin = AnalyticsPlugin & PluginEventFunctions;

// eslint-disable-next-line no-unused-vars
export default function klaviyo(config: KlaviyoConfig): KlaviyoAnalyticsPlugin {
  const {
    collectionHandle,
    // currency,
    hasUserConsent,
    locale,
    shopId,
    storefrontId,
  } = config;

  const cookies = new Cookies();

  const customerId = cookies.get("customerId");

  const klaviyo = window.klaviyo || [];

  return {
    /* Name is a required field for plugins */
    name: "klaviyo-plugin",
    /* Bootstrap runs when analytics starts */
    bootstrap: ({ payload, config, instance }) => {
      // Do whatever on `bootstrap` event
      console.log("bootstrap", { payload, config, instance });
    },
    page: ({ payload, config, instance }) => {
      console.log("page", { payload, config, instance });

      const trackingData = {
        Name: payload.options.product.title ?? null,
        ProductID: payload.options.product.id ?? null,
        Categories:
          payload.options.product.collections?.nodes?.map(
            (node) => node?.title,
          ) ?? null,
        ImageURL: payload.options.product?.featuredImage?.url ?? null,
        URL: payload.properties.url ?? null,
        Brand: payload.options.product.vendor ?? null,
        Price:
          (payload.options.selectedVariant?.price?.amount ||
            payload.options.product?.priceRange?.minVariantPrice?.amount) ??
          null,
        CompareAtPrice:
          (payload.options.selectedVariant?.compareAtPrice?.amount ||
            payload.options.product?.compareAtPriceRange?.minVariantPrice
              ?.amount) ??
          null,
      };

      klaviyo.push(["track", "Viewed Product", trackingData]);
    },
    trackEnd: ({ payload, config, instance }) => {
      // Fire custom logic after analytics.track() calls
      console.log("trackEnd", { payload, config, instance });

      if (payload.event === "addToCart") {
        const { cartId } = config.options;
      }
    },
  };
}
