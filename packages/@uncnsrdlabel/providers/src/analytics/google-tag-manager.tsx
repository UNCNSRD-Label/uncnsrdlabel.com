"use client";

import { sendGTMEvent } from '@next/third-parties/google';
import { AnalyticsPlugin } from "analytics";
import type { SetOptional } from "type-fest";
import { Payload, PluginConfig, PluginEventFunctions } from "./types";
 
export interface GoogleTagManagerConfig extends PluginConfig {
  auth: string | undefined;
  collectionHandle?: string;
  containerId: string;
  customScriptSrc?: string;
  dataLayer: Pick<Payload, "event">[];
  dataLayerName: string;
  execution: "async" | "defer";
  pageViewEvent: string;
  preview: string | undefined;
  storefrontId?: string;
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
export const config: Omit<GoogleTagManagerConfig, "containerId"> = {
  auth: undefined,
  dataLayer: [],
  dataLayerName: "dataLayer",
  debug: false,
  execution: "async",
  hasUserConsent: false,
  pageViewEvent: "page_view",
  preview: undefined,
};

function googleTagManager(
  pluginConfig: SetOptional<
    Pick<
      GoogleTagManagerConfig,
      "containerId" | "customScriptSrc" | "dataLayerName" | "pageViewEvent"
    >,
    "dataLayerName" | "pageViewEvent"
  >,
): GoogleTagManagerAnalyticsPlugin {
  // Allow for userland overides of base methods
  return {
    name: "google-tag-manager",
    config: {
      ...config,
      ...pluginConfig,
    },
    initialize: ({ config }: { config: GoogleTagManagerConfig }) => {
      // if (typeof window === "undefined") {
      //   return;
      // }
    
      const {
        containerId,
      } = config;

      if (!containerId) {
        throw new Error("No google tag manager containerId defined");
      }
    },
    page: ({ payload, config }) => {
      sendGTMEvent({ event: config.pageViewEvent, ...payload.properties });
    },
    track: ({ payload, config }) => {
      const { anonymousId, properties, userId } = payload;

      const formattedPayload = properties ?? {} as NonNullable<Payload["properties"]>;

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
    loaded: () => {
      // if (typeof window === "undefined") {
      //   return;
      // }
    },
  };
}

export default googleTagManager;