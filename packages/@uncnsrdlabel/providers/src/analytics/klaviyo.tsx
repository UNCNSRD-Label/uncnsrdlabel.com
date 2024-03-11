"use client";

import { getClientBrowserParameters } from "@shopify/hydrogen";
import { AnalyticsPlugin } from "analytics";
import { PluginConfig, PluginEventFunctions } from "./types";

export interface KlaviyoConfig extends PluginConfig {
  collectionHandle?: string;
  locale: Intl.Locale;
}

export type KlaviyoAnalyticsPlugin = AnalyticsPlugin & PluginEventFunctions;

const sendKlaviyoAnalytics = async (
  data: unknown,
) => {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      revision: process.env.NEXT_PUBLIC_KLAVIYO_API_REVISION!,
    },
    body: JSON.stringify(data),
  };

  try {
    const url = new URL("https://a.klaviyo.com/api/client/events");

    url.searchParams.set(
      "company_id",
      process.env.NEXT_PUBLIC_KLAVIYO_PUBLIC_KEY!,
    );

    await fetch(url, options);
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line no-unused-vars
export function klaviyo(config: KlaviyoConfig): KlaviyoAnalyticsPlugin {
  console.debug("klaviyo:root", {
    config,
  });

  return {
    /* Name is a required field for plugins */
    name: "klaviyo-plugin",
    identify: async ({ payload, config, instance }) => {
      console.debug("klaviyo:identify", {
        payload,
        config,
        instance,
      });

      const data = {
        properties: {
          $email: payload.traits?.email,
          $first_name: payload.traits?.firstName,
          $last_name: payload.traits?.lastName,
          $city: payload.traits?.defaultAddress?.city,
          $region: payload.traits?.defaultAddress?.province,
          $country: payload.traits?.defaultAddress?.country,
          $zip: payload.traits?.defaultAddress?.zip,
          $phone_number: payload.traits?.phone,
        },
      };

      sendKlaviyoAnalytics(data);
    },
    page: ({ payload }) => {
      console.debug("klaviyo:page", { payload });

      if (!payload.properties) {
        console.error("Page payload is missing properties");
        return;
      }

      const attributes = {
        email: "sarah.mason@klaviyo-demo.com",
        phone_number: "+15005550006",
        external_id: "63f64a2b-c6bf-40c7-b81f-bed08162edbe",
        _kx: "J8fjcn003Wy6b-3ILNlOyZXabW6dcFwTyeuxrowMers%3D.McN66",
        first_name: "Sarah",
        last_name: "Mason",
        organization: "Klaviyo",
        title: "Engineer",
        image:
          "https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg",
        location: {
          address1: "89 E 42nd St",
          address2: "1st floor",
          city: "New York",
          country: "United States",
          region: "NY",
          zip: "10017",
          timezone: "America/New_York",
          ip: "127.0.0.1",
        },
        properties: { newKey: "New Value" },
      };

      const data = {
        type: "event",
        attributes: {
          properties: payload.properties,
          time: new Date().toISOString(),
          // value: 9.99,
          metric: {
            data: { type: "metric", attributes: { name: "Viewed Page" } },
          },
          profile: {
            data: {
              type: "profile",
              id: "01GDDKASAP8TKDDA2GRZDSVP4H",
              attributes,
              // meta: {
              //   patch_properties: {
              //     append: { newKey: "New Value" },
              //     unappend: { newKey: "New Value" },
              //     unset: "skus",
              //   },
              // },
            },
          },
        },
      };

      sendKlaviyoAnalytics(data);
    },
    track: async ({ payload }) => {
      // Fire custom logic after analytics.track() calls
      // console.debug("klaviyo:trackEnd", { payload, config, instance });

      const customer_properties = {
        $email: "abraham.lincoln@klaviyo.com",
      };

      if (payload.event === "productVariant") {
        // Include SKU, colour, size, etc.
      }

      if (payload.event === "product") {
        const properties = {
          ProductName: payload.properties?.product.title ?? null,
          ProductID: payload.properties?.product.id ?? null,
          Categories:
            payload.properties?.product.collections.edges?.map(
              ({ node }) => node?.title,
            ) ?? null,
          ImageURL: payload.properties?.product?.featuredImage?.url ?? null,
          URL: payload.properties?.url ?? getClientBrowserParameters().url,
          Brand: payload.properties?.product.vendor ?? null,
          Price:
            Number.parseInt(
              payload.options.selectedVariant?.price?.amount ||
                payload.properties?.product?.priceRange?.minVariantPrice?.amount,
            ) ?? null,
          CompareAtPrice:
            Number.parseInt(
              payload.options.selectedVariant?.compareAtPrice?.amount ||
                payload.properties?.product?.compareAtPriceRange?.minVariantPrice
                  ?.amount,
            ) ?? null,
        };

        const data = {
          event: payload.event,
          customer_properties,
          properties,
        };

        sendKlaviyoAnalytics(data);
      }

      // if (payload.event === "addToCart") {
      //   const { cartId } = config.options;
      // }
    },
  };
}
