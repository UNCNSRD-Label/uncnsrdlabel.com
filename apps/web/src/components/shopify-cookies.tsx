"use client";

import { useShopifyCookies } from '@shopify/hydrogen-react';
import {
  COOKIE_CONSENT,
  type ConsentSettings
} from "@uncnsrdlabel/lib";
import { getCookie } from "cookies-next";

export function ShopifyCookies() {
  const consentCookieData = (getCookie(COOKIE_CONSENT) as string) ?? "{}";

  const savedConsentSettings = JSON.parse(consentCookieData) as ConsentSettings;

  const hasUserConsent = savedConsentSettings.analytics_storage === "granted";

  useShopifyCookies({hasUserConsent});
  
  return null;
}
