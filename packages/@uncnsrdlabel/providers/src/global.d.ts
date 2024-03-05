/* eslint-disable no-unused-vars */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    toggleDevtools: () => void;
    toggleFormDevTools: () => void;
  }
}

export {};
