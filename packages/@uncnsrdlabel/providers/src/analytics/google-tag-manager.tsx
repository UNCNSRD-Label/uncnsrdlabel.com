"use client";

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

let initializedDataLayerName: string | undefined;

function googleTagManager(
  pluginConfig: SetOptional<
    Pick<
      GoogleTagManagerConfig,
      "containerId" | "customScriptSrc" | "dataLayerName" | "pageViewEvent"
    >,
    "dataLayerName" | "pageViewEvent"
  >,
): GoogleTagManagerAnalyticsPlugin {
  const defaultScriptSrc = "https://www.googletagmanager.com/gtm.js";

  // Allow for userland overides of base methods
  return {
    name: "google-tag-manager",
    config: {
      ...config,
      ...pluginConfig,
    },
    initialize: ({ config }: { config: GoogleTagManagerConfig }) => {
      if (typeof window === "undefined") {
        return;
      }
    
      const {
        containerId,
        dataLayerName,
        customScriptSrc,
        preview,
        auth,
        execution,
      } = config;

      if (!containerId) {
        throw new Error("No google tag manager containerId defined");
      }

      if (preview && !auth) {
        throw new Error(
          "When enabling preview mode, both preview and auth parameters must be defined",
        );
      }

      const scriptSrc = customScriptSrc || defaultScriptSrc;

      if (!scriptLoaded(containerId, scriptSrc)) {
        /* eslint-disable */
        (function (
          w: Window & typeof globalThis,
          d: Document,
          s: "script",
          l: string,
          i: string,
        ) {
          // @ts-expect-error Element implicitly has an 'any' type because index expression is not of type 'number'
          w[l] = w[l] || [];
          // @ts-expect-error Element implicitly has an 'any' type because index expression is not of type 'number'
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "",
            p = preview
              ? "&gtm_preview=" +
                preview +
                "&gtm_auth=" +
                auth +
                "&gtm_cookies_win=x"
              : "";
          if (execution) {
            j[execution] = true;
          }
          j.src = `${scriptSrc}?id=` + i + dl + p;
          f.parentNode?.insertBefore(j, f);
        })(window, document, "script", dataLayerName, containerId);
        /* eslint-enable */
        initializedDataLayerName = dataLayerName;
      }
    },
    page: ({ payload, config }) => {
      console.log({ config });
      if (typeof window[config.dataLayerName] !== "undefined") {
        if (config.pageViewEvent) {
          console.log("config.pageViewEvent", config.pageViewEvent);

          // @ts-expect-error Property 'push' does not exist on type 'Window'.
          window[config.dataLayerName].push({
            event: config.pageViewEvent,
            ...payload.properties,
          });
        }
      }
    },
    track: ({ payload, config }) => {
      if (typeof window[config.dataLayerName] !== "undefined") {
        const { anonymousId, userId, properties } = payload;
        const formattedPayload = properties;
        if (userId) {
          formattedPayload.userId = userId;
        }
        if (anonymousId) {
          formattedPayload.anonymousId = anonymousId;
        }
        if (!properties.category) {
          formattedPayload.category = "All";
        }
        if (config.debug) {
          console.log("dataLayer push", {
            event: payload.event,
            ...formattedPayload,
          });
        }

        // @ts-expect-error Property 'push' does not exist on type 'Window'.
        window[config.dataLayerName].push({
          event: payload.event,
          ...formattedPayload,
        });
      }
    },
    loaded: () => {
      if (typeof window === "undefined") {
        return;
      }

      const hasDataLayer =
        !!initializedDataLayerName &&
        !!(
          // @ts-expect-error Element implicitly has an 'any' type because index expression is not of type 'number'
          window[initializedDataLayerName] &&
          // @ts-expect-error Property 'push' does not exist on type 'never'.
          Array.prototype.push !== window[initializedDataLayerName].push
        );
      return (
        scriptLoaded(
          pluginConfig.containerId,
          pluginConfig.customScriptSrc || defaultScriptSrc,
        ) && hasDataLayer
      );
    },
  };
}

export default googleTagManager;

const regexCache: Record<string, RegExp> = {};

/*
  TODO add logic to make it impossible to load 2 plugins with the same container ID
  [containerID]: pluginName
  */

function scriptLoaded(
  containerId: GoogleTagManagerConfig["containerId"],
  scriptSrc: string,
) {
  if (typeof window === "undefined") {
    return;
  }
  
  let regex = regexCache[containerId];

  if (!regex) {
    const scriptSrcEscaped = scriptSrc
      .replace(/^https?:\/\//, "")
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    regex = new RegExp(scriptSrcEscaped + ".*[?&]id=" + containerId);
    regexCache[containerId] = regex;
  }

  const scripts = document.querySelectorAll("script[src]");

  return !!Object.keys(scripts).filter((key) =>
    // @ts-expect-error Element implicitly has an 'any' type because index expression is not of type 'number'
    (scripts[key].src || "").match(regex),
  ).length;
}
