"use client";

import { Partytown } from "@builder.io/partytown/react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "components/analytics/google-analytics";
import { GoogleTag } from "components/analytics/google-tag";
import { GoogleTagManager } from "components/analytics/google-tag-manager";
import { Klaviyo } from "components/analytics/klaviyo";
import { MetaPixel } from "components/analytics/meta-pixel";
import { TikTokPixel } from "components/analytics/tiktok-pixel";

export const Analytics = () => {
  return (
    <>
      <Partytown
        debug={true}
        forward={["dataLayer.push", "fbq", "klaviyo", "ttq", "va"]}
      />
      <GoogleTag />
      <GoogleAnalytics />
      <GoogleTagManager type="text/partytown" />
      <VercelAnalytics />
      <MetaPixel type="text/partytown" />
      <TikTokPixel type="text/partytown" />
      <Klaviyo type="text/partytown" />
    </>
  );
};

export default Analytics;
