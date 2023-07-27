// eslint-disable-next-line no-unused-vars
export type PluginEventFunction = (options: {
  config: any;
  instance: any;
  payload: {
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
    | "trackEnd"
    | "track:addToCart"]: PluginEventFunction;
};
