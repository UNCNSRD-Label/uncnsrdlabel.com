"use client";

import { useShopifyCookies } from '@shopify/hydrogen-react';
import {
  COOKIE_CONSENT,
  type ConsentSettings
} from "@uncnsrdlabel/lib";
import { getCookie } from "cookies-next";
import { useEffect } from "react";

export function ShopifyCookies() {
  const consentCookieData = (getCookie(COOKIE_CONSENT) as string) ?? "{}";
  const savedConsentSettings = JSON.parse(consentCookieData) as ConsentSettings;

  useShopifyCookies({hasUserConsent: false});
  
  useEffect(() => {
    if (savedConsentSettings.analytics_storage) {
      useShopifyCookies({hasUserConsent: true});
    }

  }, [savedConsentSettings.analytics_storage]);

  return null;
}
