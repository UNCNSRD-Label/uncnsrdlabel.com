"use client";

// import googleAnalytics from "@analytics/google-analytics";
import googleTagManager from "@analytics/google-tag-manager";
import Analytics from "analytics";
import eventValidation from "analytics-plugin-event-validation";
import { PropsWithChildren } from "react";
import { AnalyticsProvider } from "use-analytics";
import shopify from "./shopify";

/* Initialize analytics & load plugins */
const analytics = Analytics({
  app: process.env.NEXT_PUBLIC_SITE_NAME,
  debug: true,
  plugins: [
    eventValidation({
      // Namespace of current application
      context: "app",
      // Allowed objects
      objects: [
        "sites", // example app:sites_cdConfigured
        "user", // example app:user_signup
        "widget", // example app:widget_created
      ],
    }),
    // googleAnalytics({
    //   trackingId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID!,
    // }),
    googleTagManager({
      containerId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!,
    }),
    shopify({
      shopId: "gid://shopify/Shop/69103059266",
    }),
  ],
});

export default function AppAnalyticsProvider({ children }: PropsWithChildren) {
  return <AnalyticsProvider instance={analytics}>{children}</AnalyticsProvider>;
}
