import { type Product } from "@shopify/hydrogen-react/storefront-api-types";

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
    };
    options: {
      cartId: string;
      product: Product;
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
    | "page"
    | "pageStart"
    | "pageEnd"
    | "trackStart"
    | "trackEnd"]: PluginEventFunction;
};
