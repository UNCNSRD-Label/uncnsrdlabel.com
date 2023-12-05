"use client";

import { getClientBrowserParameters } from "@shopify/hydrogen";
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

const sendKlaviyoAnalytics = async (
  data: unknown,
  type: "identify" | "track",
) => {
  const encodedParams = new URLSearchParams();

  encodedParams.set("data", JSON.stringify(data));

  const options = {
    method: "POST",
    headers: {
      accept: "text/html",
      "content-type": "application/x-www-form-urlencoded",
    },
    body: encodedParams,
  };

  try {
    await fetch(`https://a.klaviyo.com/api/${type}`, options);
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line no-unused-vars
export function klaviyo(config: KlaviyoConfig): KlaviyoAnalyticsPlugin {
  const { hasUserConsent } = config;

  // const cookies = new Cookies();

  const token = process.env.NEXT_PUBLIC_KLAVIYO_PUBLIC_KEY;

  // const customerId = cookies.get("customerId");

  return {
    /* Name is a required field for plugins */
    name: "klaviyo-plugin",
    identify: async ({ payload, config, instance }) => {
      console.log("klaviyo:identify", {
        payload,
        config,
        instance,
        hasUserConsent,
      });

      // const properties = {
      //   $email: payload.properties.customer?.email ?? undefined,
      //   $first_name: payload.properties.customer?.firstName ?? undefined,
      //   $last_name: payload.properties.customer?.lastName ?? undefined,
      //   // @ts-expect-error TODO: Fix this getFragmentData issue
      //   $city: payload.properties.customer?.defaultAddress?.city ?? undefined,
      //   // @ts-expect-error TODO: Fix this getFragmentData issue
      //   $region: payload.properties.customer?.defaultAddress?.province ?? undefined,
      //   // @ts-expect-error TODO: Fix this getFragmentData issue
      //   $country: payload.properties.customer?.defaultAddress?.country ?? undefined,
      //   // @ts-expect-error TODO: Fix this getFragmentData issue
      //   $zip: payload.properties.customer?.defaultAddress?.zip ?? undefined,
      //   $phone_number: payload.properties.customer?.phone ?? undefined,
      // };

      // const data = {
      //   token,
      //   properties,
      // };

      // sendKlaviyoAnalytics(data, "identify");
    },
    // page: ({ payload, config, instance }) => {
    //   console.log("klaviyo:page", { payload, config, instance });
    // },
    track: async ({ payload }) => {
      // Fire custom logic after analytics.track() calls
      // console.log("klaviyo:trackEnd", { payload, config, instance });

      const customer_properties = {
        $email: "abraham.lincoln@klaviyo.com",
      };

      if (payload.event === "productVariant") {
        // Include SKU, colour, size, etc.
      }

      if (payload.event === "product") {
        const properties = {
          ProductName: payload.properties.product.title ?? null,
          ProductID: payload.properties.product.id ?? null,
          Categories:
            payload.properties.product.collections.edges?.map(
              ({ node }) => node?.title,
            ) ?? null,
          ImageURL: payload.properties.product?.featuredImage?.url ?? null,
          URL: payload.properties.url ?? getClientBrowserParameters().url,
          Brand: payload.properties.product.vendor ?? null,
          Price:
            Number.parseInt(
              payload.options.selectedVariant?.price?.amount ||
                payload.properties.product?.priceRange?.minVariantPrice?.amount,
            ) ?? null,
          CompareAtPrice:
            Number.parseInt(
              payload.options.selectedVariant?.compareAtPrice?.amount ||
                payload.properties.product?.compareAtPriceRange?.minVariantPrice
                  ?.amount,
            ) ?? null,
        };

        const data = {
          token,
          event: payload.event,
          customer_properties,
          properties,
        };

        sendKlaviyoAnalytics(data, "track");
      }

      // if (payload.event === "addToCart") {
      //   const { cartId } = config.options;
      // }
    },
  };
}
