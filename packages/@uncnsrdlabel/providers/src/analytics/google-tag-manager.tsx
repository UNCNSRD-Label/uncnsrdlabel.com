"use client";

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
 * @param {string} [pluginConfig.preview] - The preview-mode environment
 * @param {string} [pluginConfig.auth] - The preview-mode authentication credentials
 * @param {string} [pluginConfig.execution] - The script execution mode
 * @return {object} Analytics plugin
 * @example
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
      if (config.debug) {
        console.debug("gtm:identify", { payload });
      }
    },
    initialize: ({ config }: { config: GoogleTagManagerConfig }) => {
      if (config.debug) {
        console.debug("gtm:initialize", { config });
      }
    },
    loaded: () => {
      if (config.debug) {
        console.debug("gtm:loaded");
      }

      if (typeof window !== "undefined") {
        return !!sendGTMEvent
      }
    },
    page: ({ payload }) => {
      if (config.debug) {
        console.debug("gtm:page", { payload });
      }

      if (typeof window !== "undefined") {
        sendGTMEvent({ event: payload.event, ...payload.properties });
      }
    },
    ready: () => {
      if (config.debug) {
        console.debug("gtm:ready");
      }
    },
    track: ({ payload }) => {
      if (config.debug) {
        console.debug("gtm:track", { payload });
      }

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

      if (typeof window !== "undefined") {
        sendGTMEvent({ event: payload.event, ...formattedPayload });
      }
    },
  };
}
