import {
  AnalyticsPageType
} from "@shopify/hydrogen";
import { type Product } from "@shopify/hydrogen/storefront-api-types";

export type PluginConfig = {
  debug?: boolean;
  hasUserConsent: boolean;
}

export type Payload = {
  anonymousId: string;
  meta: {
    hasCallback: boolean;
    rid: string;
    ts: number;
  };
  event?: string;
  options: {
    cartId: string;
    [key: string]: any;
  };
  properties?: {
    anonymousId: string;
    category: string;
    hash: string;
    height: number;
    pageType: keyof typeof AnalyticsPageType;
    path: string;
    product: Product;
    search: string;
    title: string;
    type: "product" | "collection" | "search" | "variant";
    url: string;
    userId: string;
    width: number;
  };
  traits?: {
    defaultAddress?: {
      city: string;
      country: string;
      province: string;
      zip: string;
    };
    email?: string;
    firstName?: string;
    lastName?: string;
    phone: string;
  };
  type: string;
  userId: string;
};

// eslint-disable-next-line no-unused-vars
export type PluginEventFunction = (options: {
  config: any;
  instance: any;
  payload: Payload;
}) => void;

export type PluginEventFunctions = {
  // eslint-disable-next-line no-unused-vars
  [key in
    | "bootstrap"
    | "identify"
    | "page"
    | "pageStart"
    | "pageEnd"
    | "track"
    | "trackStart"
    | "trackEnd"]?: PluginEventFunction;
};
