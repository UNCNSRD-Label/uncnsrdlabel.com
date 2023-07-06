"use client";

import { Partytown } from "@builder.io/partytown/react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "components/analytics/google-tag-manager";

export const Analytics = () => {
  return (
    <>
      <Partytown
        debug={true}
        forward={["dataLayer.push", "fbq", "klaviyo", "ttq", "va"]}
      />
      <GoogleTagManager type="text/partytown" />
      <VercelAnalytics />
    </>
  );
};

export default Analytics;
