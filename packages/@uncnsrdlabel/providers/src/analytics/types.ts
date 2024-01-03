import { type Product } from "@shopify/hydrogen/storefront-api-types";

export type PluginConfig = {
  debug?: boolean;
  hasUserConsent: boolean;
}

export type Payload = {
  event?: string;
  type: string;
  properties: {
    title: string;
    url: string;
    path: string;
    hash: string;
    search: string;
    width: number;
    height: number;
    product: Product;
    userId: string;
    anonymousId: string;
    category: string;
  };
  options: {
    cartId: string;
    [key: string]: any;
  };
  userId: string;
  anonymousId: string;
  meta: {
    rid: string;
    ts: number;
    hasCallback: boolean;
  };
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
