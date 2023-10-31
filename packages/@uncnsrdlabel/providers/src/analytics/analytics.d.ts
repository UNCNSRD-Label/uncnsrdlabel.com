declare module "@analytics/google-analytics" {
  import { AnalyticsPlugin } from "analytics";

  export interface GoogleAnalyticsConfig {
    auth?: string;
    customScriptSrc?: string;
    dataLayerName?: string;
    debug?: boolean;
    execution?: string;
    preview?: string;
    trackingId: string;
  }

  // eslint-disable-next-line no-unused-vars
  export function googleAnalytics(
    config: GoogleAnalyticsConfig,
  ): AnalyticsPlugin;

  export default googleAnalytics;
}

declare module "@analytics/google-tag-manager" {
  import { AnalyticsPlugin } from "analytics";

  export interface GoogleTagManagerConfig {
    auth?: string;
    containerId: string;
    customScriptSrc?: string;
    dataLayerName?: string;
    debug?: boolean;
    execution?: string;
    preview?: string;
  }

  // eslint-disable-next-line no-unused-vars
  export function googleTagManager(
    config: GoogleTagManagerConfig,
  ): AnalyticsPlugin;

  export default googleTagManager;
}

declare module "analytics-plugin-event-validation" {
  import { AnalyticsPlugin } from "analytics";

  export interface EventValidationConfig {
    context: string;
    objects: string[];
  }

  // eslint-disable-next-line no-unused-vars
  export function eventValidation(
    config: EventValidationConfig,
  ): AnalyticsPlugin;

  export default eventValidation;
}
