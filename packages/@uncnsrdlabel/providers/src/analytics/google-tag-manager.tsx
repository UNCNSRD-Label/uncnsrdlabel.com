import { sendGTMEvent } from "@next/third-parties/google";
import { AnalyticsPlugin } from "analytics";
import { Payload, PluginConfig, PluginEventFunctions } from "./types";

export interface GoogleTagManagerConfig extends PluginConfig {
  locale: Intl.Locale;
  preview: string | undefined;
}

export type GoogleTagManagerAnalyticsPlugin = AnalyticsPlugin &
  PluginEventFunctions;

/**
 * Google tag manager plugin
 * @link https://getanalytics.io/plugins/google-tag-manager
 * @link https://developers.google.com/tag-manager/
 * @link https://github.com/DavidWells/analytics/pull/349/files
 * @param {object} pluginConfig - Plugin settings
 * @param {string} pluginConfig.containerId - The Container ID uniquely identifies the GTM Container.
 * @param {string} [pluginConfig.dataLayerName=dataLayer] - The optional name for dataLayer-object. Defaults to dataLayer.
 * @param {string} [pluginConfig.customScriptSrc] - Load Google Tag Manager script from a custom source
 * @param {string} [pluginConfig.preview] - The preview-mode environment
 * @param {string} [pluginConfig.auth] - The preview-mode authentication credentials
 * @param {string} [pluginConfig.execution] - The script execution mode
 * @return {object} Analytics plugin
 * @example
 *
 * googleTagManager({
 *   containerId: 'GTM-123xyz'
 * })
 */

export function googleTagManager(
  config: GoogleTagManagerConfig,
): GoogleTagManagerAnalyticsPlugin {
  return {
    name: "google-tag-manager",
    config: {
      ...config,
    },
    identify: async ({ payload }) => {
      console.debug("gtm:identify", { payload });
    },
    initialize: ({ config }: { config: GoogleTagManagerConfig }) => {
      console.debug("gtm:initialize", { config });
    },
    loaded: () => {
      console.debug("gtm:loaded");

      return !!sendGTMEvent
    },
    page: ({ payload }) => {
      console.debug("gtm:page", { payload });

      sendGTMEvent({ event: payload.event, ...payload.properties });
    },
    ready: () => {
      console.debug("gtm:ready");
    },
    track: ({ payload }) => {
      console.debug("gtm:track", { payload });

      const { anonymousId, properties, userId } = payload;

      const formattedPayload =
        properties ?? ({} as NonNullable<Payload["properties"]>);

      if (userId) {
        formattedPayload.userId = userId;
      }

      if (anonymousId) {
        formattedPayload.anonymousId = anonymousId;
      }

      if (!formattedPayload.category) {
        formattedPayload.category = "All";
      }

      if (config.debug) {
        console.debug("dataLayer push", {
          event: payload.event,
          ...formattedPayload,
        });
      }

      sendGTMEvent({ event: payload.event, ...formattedPayload });
    },
  };
}
