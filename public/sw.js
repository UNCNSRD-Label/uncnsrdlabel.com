/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { registerSW } from "virtual:pwa-register";

export const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});
