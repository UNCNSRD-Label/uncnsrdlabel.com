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
  const {} = config;

  const cookies = new Cookies();

  const token = process.env.NEXT_PUBLIC_KLAVIYO_PUBLIC_KEY;

  const customerId = cookies.get("customerId");

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
    },
    trackEnd: async ({ payload, config, instance }) => {
      // Fire custom logic after analytics.track() calls
      console.log("trackEnd", { payload, config, instance });

      if (payload.event === "product") {
        const properties = {
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

        // const properties = {
        //   $email: customer?.email ?? undefined,
        //   $first_name: customer?.firstName ?? undefined,
        //   $last_name: customer?.lastName ?? undefined,
        //   // @ts-expect-error TODO: Fix this getFragmentData issue
        //   $city: customer?.defaultAddress?.city ?? undefined,
        //   // @ts-expect-error TODO: Fix this getFragmentData issue
        //   $region: customer?.defaultAddress?.province ?? undefined,
        //   // @ts-expect-error TODO: Fix this getFragmentData issue
        //   $country: customer?.defaultAddress?.country ?? undefined,
        //   // @ts-expect-error TODO: Fix this getFragmentData issue
        //   $zip: customer?.defaultAddress?.zip ?? undefined,
        //   $phone_number: customer?.phone ?? undefined,
        // }

        const data = {
          token,
          properties,
        };

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

        if (customerId) {
          const response = await fetch(
            // 'https://a.klaviyo.com/api/identify',
            "https://a.klaviyo.com/api/track",
            options,
          );

          await response.json();
        }
      }

      // if (payload.event === "addToCart") {
      //   const { cartId } = config.options;
      // }
    },
  };
}
