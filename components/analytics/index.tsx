"use client";

import { GoogleTagManager } from "@/components/analytics/google-tag-manager";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

export const Analytics = () => {
  return (
    <>
      <GoogleTagManager />
      <VercelAnalytics />
    </>
  );
};

export default Analytics;
