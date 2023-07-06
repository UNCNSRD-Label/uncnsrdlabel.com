"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "components/analytics/google-tag-manager";

export const Analytics = () => {
  return (
    <>
      <GoogleTagManager />
      <VercelAnalytics />
    </>
  );
};

export default Analytics;
