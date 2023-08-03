export type ConsentSettings = Record<
  | "ad_storage"
  | "analytics_storage"
  | "functionality_storage"
  | "personalization_storage"
  | "security_storage",
  "denied" | "granted"
>;

export const cookieOptions = { maxAge: 60 * 60 * 24 * 365 };

export const defaultConsentSettings: ConsentSettings = {
  ad_storage: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "denied",
};

export const acceptAllConsentSettings: ConsentSettings = {
  ad_storage: "granted",
  analytics_storage: "granted",
  functionality_storage: "granted",
  personalization_storage: "granted",
  security_storage: "granted",
};

export const denyAllAdditionalConsentSettings: ConsentSettings = {
  ad_storage: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "denied",
};

export const types: Array<{
  name: keyof ConsentSettings;
  description: string;
}> = [
  {
    name: "functionality_storage",
    description: "Storage related to functionality such as language settings",
  },
  {
    name: "personalization_storage",
    description:
      "Storage related to personalization such as product recommendations",
  },
  {
    name: "security_storage",
    description:
      "Storage related to security such as authentication functionality and user protection",
  },
  {
    name: "analytics_storage",
    description: "Storage related to analytics such as visit duration",
  },
  {
    name: "ad_storage",
    description: "Storage related to advertising",
  },
];
