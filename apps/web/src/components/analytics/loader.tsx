"use client";

import { GoogleTagManager } from "@/components/analytics/google-tag-manager";
import { Partytown } from "@builder.io/partytown/react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

export const Analytics = () => {
  return (
    <>
      <Partytown
        debug={true}
        forward={[
          "analyticsShopData",
          "dataLayer.push",
          "fbq",
          "klaviyo",
          "ttq",
          "va",
        ]}
      />
      <GoogleTagManager type="text/partytown" />
      <VercelAnalytics />
    </>
  );
};