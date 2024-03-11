"use client";

import { getShopifyCookies, useShop } from "@shopify/hydrogen-react";
import { Analytics } from "analytics";
import { getCookie } from "cookies-next";
import { PropsWithChildren } from "react";
import { AnalyticsProvider } from "use-analytics";
import { googleTagManager } from "./google-tag-manager";
// import { klaviyo } from "./klaviyo";
import { shopify } from "./shopify";

import { COOKIE_CONSENT, type ConsentSettings } from "@uncnsrdlabel/lib";

export function AppAnalyticsProvider({ children }: PropsWithChildren) {
  const consentCookieData = (getCookie(COOKIE_CONSENT) as string) ?? "{}";

  const savedConsentSettings = JSON.parse(consentCookieData) as ConsentSettings;

  const hasUserConsent = savedConsentSettings.analytics_storage === "granted";

  const { storefrontId, countryIsoCode, languageIsoCode } = useShop();

  const tag = `${languageIsoCode}-${countryIsoCode}`;

  const locale = new Intl.Locale(tag);

  let cartId = undefined;
  let _shopify_y = undefined;

  if (typeof window !== "undefined") {
    const shopifyCookies = getShopifyCookies(document.cookie);

    _shopify_y = shopifyCookies._shopify_y;

    cartId = getCookie('cartId');
  }

  // console.debug({ cookies, _shopify_y, consentCookieData, savedConsentSettings, hasUserConsent, locale, storefrontId, countryIsoCode, languageIsoCode })

  const config = {
    app: process.env.NEXT_PUBLIC_SITE_NAME,
    debug: false,
    plugins: [
      googleTagManager({
        hasUserConsent,
        locale,
        preview: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_PREVIEW,
      }),
      // klaviyo({
      //   ...(_shopify_y && {
      //     userToken: _shopify_y,
      //   }),
      //   hasUserConsent,
      //   locale,
      // }),
      shopify({
        ...(_shopify_y && {
          userToken: _shopify_y,
        }),
        cartId,
        hasUserConsent,
        locale,
        shopId: `gid://shopify/Shop/${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_ID}`,
        shopDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
        storefrontId,
      }),
    ],
  };

  const traits = {};

  /* Initialize analytics & load plugins */
  const analytics = Analytics(config);

  if (_shopify_y) {
    analytics.identify(_shopify_y, traits);
  }

  return (
    <AnalyticsProvider instance={analytics}>
      {children}
    </AnalyticsProvider>
  );
}
