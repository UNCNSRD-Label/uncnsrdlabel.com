type ConsentSettings = Record<
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
    name: "ad_storage",
    description: "Storage related to advertising",
  },
  {
    name: "analytics_storage",
    description: "Storage related to analytics such as visit duration",
  },
  {
    name: "functionality_storage",
    description:
      "Storage that supports the functionality of the website such as language settings",
  },
  {
    name: "personalization_storage",
    description:
      "Storage related to personalization such as video recommendations",
  },
  {
    name: "security_storage",
    description:
      "Storage related to security such as authentication functionality, fraud prevention, and other user protection",
  },
];
