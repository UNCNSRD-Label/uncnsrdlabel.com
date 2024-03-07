'use client';

import {type AnalyticsPlugin} from 'analytics';
import type {SetOptional} from 'type-fest';
import {type Payload, type PluginConfig, type PluginEventFunctions} from './types';

type Window = Record<string, any>;

export type GoogleTagManagerConfig = {
	auth: string | undefined;
	collectionHandle?: string;
	containerId: string;
	customScriptSrc?: string;
	dataLayer: Array<Pick<Payload, 'event'>>;
	execution: 'async' | 'defer';
	pageViewEvent: string;
	preview: string | undefined;
	storefrontId?: string;
} & PluginConfig;

export type GoogleTagManagerAnalyticsPlugin = AnalyticsPlugin &
PluginEventFunctions;

/**
 * Google tag manager plugin
 * @link https://getanalytics.io/plugins/google-tag-manager
 * @link https://developers.google.com/tag-manager/
 * @link https://github.com/DavidWells/analytics/pull/349/files
 * @param {object} pluginConfig - Plugin settings
 * @param {string} pluginConfig.containerId - The Container ID uniquely identifies the GTM Container.
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
export const config: Omit<GoogleTagManagerConfig, 'containerId'> = {
	auth: undefined,
	dataLayer: [],
	debug: false,
	execution: 'async',
	hasUserConsent: false,
	pageViewEvent: 'page_view',
	preview: undefined,
};

function googleTagManager(
	pluginConfig: SetOptional<
	Pick<
	GoogleTagManagerConfig,
	'containerId' | 'customScriptSrc' | 'pageViewEvent'
	>,
	'pageViewEvent'
	>,
): GoogleTagManagerAnalyticsPlugin {
	const defaultScriptSource = 'https://www.googletagmanager.com/gtm.js';

	// Allow for userland overides of base methods
	return {
		name: 'google-tag-manager',
		config: {
			...config,
			...pluginConfig,
		},
		initialize({config}: {config: GoogleTagManagerConfig}) {
			if (typeof window === 'undefined') {
				return;
			}

			const {
				containerId,
				customScriptSrc,
				preview,
				auth,
				execution,
			} = config;

			if (!containerId) {
				throw new Error('No google tag manager containerId defined');
			}

			if (preview && !auth) {
				throw new Error(
					'When enabling preview mode, both preview and auth parameters must be defined',
				);
			}

			const scriptSource = customScriptSrc || defaultScriptSource;

			if (!scriptLoaded(containerId, scriptSource)) {
				/* eslint-disable */
        (function (
          w: Window & typeof globalThis,
          d: Document,
          s: "script",
          l: string,
          i: string,
        ) {
          w[l] = w[l] || [];
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
          j.src = `${scriptSource}?id=` + i + dl + p;
          f.parentNode?.insertBefore(j, f);
        })(window, document, "script", "dataLayer", containerId);
			}
		},
		page({payload, config}) {
			if (window.dataLayer !== undefined && config.pageViewEvent) {
				window.dataLayer.push({
					event: config.pageViewEvent,
					...payload.properties,
				});
			}
		},
		track({payload, config}) {
			if (window.dataLayer !== undefined) {
				const {anonymousId, userId, properties} = payload;
				const formattedPayload = properties;
				if (userId) {
					formattedPayload.userId = userId;
				}

				if (anonymousId) {
					formattedPayload.anonymousId = anonymousId;
				}

				if (!properties.category) {
					formattedPayload.category = 'All';
				}

				if (config.debug) {
					console.debug('dataLayer push', {
						event: payload.event,
						...formattedPayload,
					});
				}

				window.dataLayer.push({
					event: payload.event,
					...formattedPayload,
				});
			}
		},
		loaded() {
			if (typeof window === 'undefined') {
				return;
			}

			const hasDataLayer = Array.isArray(window.dataLayer);
			return (
				scriptLoaded(
					pluginConfig.containerId,
					pluginConfig.customScriptSrc || defaultScriptSource,
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
	containerId: GoogleTagManagerConfig['containerId'],
	scriptSource: string,
) {
	if (typeof window === 'undefined') {
		return;
	}

	let regex = regexCache[containerId];

	if (!regex) {
		const scriptSourceEscaped = scriptSource
			.replace(/^https?:\/\//, '')
			.replaceAll(/[.*+?^${}()|[\]\\]/g, '\\$&');

		regex = new RegExp(scriptSourceEscaped + '.*[?&]id=' + containerId);
		regexCache[containerId] = regex;
	}

	const scripts = document.querySelectorAll('script[src]');

	return Object.keys(scripts).some(key =>
	// @ts-expect-error Element implicitly has an 'any' type because index expression is not of type 'number'
		(scripts[key].src || '').match(regex),
	);
}
