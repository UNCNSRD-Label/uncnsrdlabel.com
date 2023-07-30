import { type Product } from "@/lib/shopify/types";

// eslint-disable-next-line no-unused-vars
export type PluginEventFunction = (options: {
  config: any;
  instance: any;
  payload: {
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
