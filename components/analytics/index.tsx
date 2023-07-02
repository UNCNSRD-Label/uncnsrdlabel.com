import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "components/analytics/google-analytics";
import { GoogleTag } from "components/analytics/google-tag";
import { GoogleTagManager } from "components/analytics/google-tag-manager";
import { Organization } from "components/analytics/schema.org.organization";

export const Analytics = () => {
  return (
    <>
      <GoogleAnalytics />
      <GoogleTag />
      <GoogleTagManager />
      <Organization />
      <VercelAnalytics />
    </>
  );
};

export default Analytics;
