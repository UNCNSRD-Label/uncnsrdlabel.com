type ConsentSettings = Record<
  | "ad_storage"
  | "analytics_storage"
  | "functionality_storage"
  | "personalization_storage"
  | "security_storage",
  "denied" | "granted"
>;
