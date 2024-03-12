"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { COOKIE_CONSENT, defaultConsentSettings } from "@uncnsrdlabel/lib";
import { getCookie } from "cookies-next";
import { useEffect } from "react";

export function GTMConsent() {
  const consentCookieData =
    (getCookie(COOKIE_CONSENT) as string) ??
    JSON.stringify(defaultConsentSettings);

  useEffect(() => {
    sendGTMEvent({
      event: "consent",
      value: "default",
      gtm: consentCookieData,
    });
  }, []);

  return null;
}
