"use client";

// import googleAnalytics from "@analytics/google-analytics";
import googleTagManager from "@analytics/google-tag-manager";
import Analytics from "analytics";
// import eventValidation from "analytics-plugin-event-validation";
import { useCart, useProduct, useShop } from "@shopify/hydrogen-react";
import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import { PropsWithChildren } from "react";
import type { PartialDeep } from "type-fest";
import { AnalyticsProvider } from "use-analytics";
import shopify from "./shopify";

export default function AppAnalyticsProvider({ children }: PropsWithChildren) {
  const { id: cartId } = useCart();

  const product = useProduct() as PartialDeep<
    Product,
    {
      recurseIntoArrays: true;
    }
  >;

  const { storefrontId, countryIsoCode, languageIsoCode } = useShop();

  const locale = new Intl.Locale(`${languageIsoCode}-${countryIsoCode}`);

  /* Initialize analytics & load plugins */
  const analytics = Analytics({
    app: process.env.NEXT_PUBLIC_SITE_NAME,
    debug: true,
    plugins: [
      // eventValidation({
      //   // Namespace of current application
      //   context: "app",
      //   // Allowed objects
      //   objects: [
      //     "document",
      //     "sites", // example app:sites_cdConfigured
      //     "user", // example app:user_signup
      //     "widget", // example app:widget_created
      //   ],
      // }),
      // googleAnalytics({
      //   trackingId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID!,
      // }),
      googleTagManager({
        containerId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!,
      }),
      shopify({
        cartId,
        locale,
        product,
        shopId: `gid://shopify/Shop/${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_ID}`,
        storefrontId,
      }),
    ],
  });

  return <AnalyticsProvider instance={analytics}>{children}</AnalyticsProvider>;
}
