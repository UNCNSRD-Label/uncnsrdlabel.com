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
export const config: GoogleTagManagerConfig = {
  debug: false,
  hasUserConsent: false,
  preview: undefined,
};

function googleTagManager(
  pluginConfig: GoogleTagManagerConfig,
): GoogleTagManagerAnalyticsPlugin {
  // Allow for userland overides of base methods
  return {
    name: "google-tag-manager",
    config: {
      ...config,
      ...pluginConfig,
    },
    identify: async ({ payload, config, instance }) => {
      console.debug("gtm:identify", {
        payload,
        config,
        instance,
      });
    },
    initialize: ({ config }: { config: GoogleTagManagerConfig }) => {
      console.debug("gtm:initialize", { config });
    },
    loaded: () => {
      console.debug("gtm:loaded");
    },
    page: ({ payload, config }) => {
      console.debug("gtm:page", { payload, config });

      sendGTMEvent({ event: config.pageViewEvent, ...payload.properties });
    },
    track: ({ payload, config }) => {
      console.debug("gtm:track", { payload, config });

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

export default googleTagManager;
