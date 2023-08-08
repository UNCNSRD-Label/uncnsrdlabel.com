"use client";

// import googleAnalytics from "@analytics/google-analytics";
import googleTagManager from "@analytics/google-tag-manager";
import { Analytics } from "analytics";
// import { eventValidation } from "analytics-plugin-event-validation";
import { getShopifyCookies, useShop } from "@shopify/hydrogen-react";
import { klaviyo } from "@uncnsrdlabel/providers/analytics/klaviyo";
import { shopify } from "@uncnsrdlabel/providers/analytics/shopify";
import { getCookie } from "cookies-next";
import { PropsWithChildren } from "react";
import { AnalyticsProvider } from "use-analytics";

import type { ConsentSettings } from "@uncnsrdlabel/lib/consent";
import { COOKIE_CONSENT } from "@uncnsrdlabel/lib/constants";

export function AppAnalyticsProvider({ children }: PropsWithChildren) {
  const consentCookieData = (getCookie(COOKIE_CONSENT) as string) ?? "{}";

  const savedConsentSettings = JSON.parse(consentCookieData) as ConsentSettings;

  const hasUserConsent = savedConsentSettings.analytics_storage === "granted";

  const { storefrontId, countryIsoCode, languageIsoCode } = useShop();

  const locale = new Intl.Locale(`${languageIsoCode}-${countryIsoCode}`);

  // const cookies = getShopifyCookies(document.cookie);
  const cookies = getShopifyCookies('');

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
        // userToken: cookies._shopify_y,
        containerId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!,
      }),
      klaviyo({
        // userToken: cookies._shopify_y,
        hasUserConsent,
        locale,
        shopId: `gid://shopify/Shop/${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_ID}`,
        storefrontId,
      }),
      shopify({
        // userToken: cookies._shopify_y,
        hasUserConsent,
        locale,
        shopId: `gid://shopify/Shop/${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_ID}`,
        storefrontId,
      }),
    ],
  });

  if (cookies._shopify_y) {
    analytics.identify(cookies._shopify_y);
  }

  return <AnalyticsProvider instance={analytics}>{children}</AnalyticsProvider>;
}
