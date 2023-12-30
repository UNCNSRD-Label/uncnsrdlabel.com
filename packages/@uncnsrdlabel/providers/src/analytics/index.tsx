"use client";

// import googleAnalytics from "@analytics/google-analytics";
import googleTagManager from "@analytics/google-tag-manager";
import { Analytics as AnalyticsInstance } from "analytics";
// import { eventValidation } from "analytics-plugin-event-validation";
import { getShopifyCookies, useShop } from "@shopify/hydrogen-react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { getCookie } from "cookies-next";
import { PropsWithChildren } from "react";
import { AnalyticsProvider } from "use-analytics";
import { klaviyo } from "./klaviyo";
import { shopify } from "./shopify";

import { COOKIE_CONSENT, type ConsentSettings } from "@uncnsrdlabel/lib";

/* Initialize analytics & load plugins */
export const Analytics = ({
  locale,
  storefrontId,
}: {
  locale: Intl.Locale;
  storefrontId?: string;
}) => {
  const consentCookieData = (getCookie(COOKIE_CONSENT) as string) ?? "{}";

  const savedConsentSettings = JSON.parse(consentCookieData) as ConsentSettings;
  
  const hasUserConsent = savedConsentSettings.analytics_storage === "granted";
  
  return AnalyticsInstance({
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
      //   measurementIds: [process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID!],
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
}

export function AppAnalyticsProvider({ children }: PropsWithChildren) {
  const { storefrontId, countryIsoCode, languageIsoCode } = useShop();
  
  const locale = new Intl.Locale(`${languageIsoCode}-${countryIsoCode}`);

  const analytics = Analytics({
    locale,
    storefrontId,
  });

  if (typeof window !== "undefined") {
    const cookies = getShopifyCookies(document.cookie);

    if (cookies._shopify_y) {
      analytics.identify(cookies._shopify_y);
    }
  }

  return (
    <AnalyticsProvider instance={analytics}>
      {children}
      <VercelAnalytics />
    </AnalyticsProvider>
  );
}
