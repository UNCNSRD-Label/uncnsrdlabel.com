export type ConsentSettings = Record<
  | "ad_storage"
  | "ad_personalization"
  | "ad_user_data"
  | "analytics_storage"
  | "functionality_storage"
  | "personalization_storage"
  | "security_storage",
  "denied" | "granted"
>;

export const cookieOptions = { maxAge: 60 * 60 * 24 * 365 };

export const defaultConsentSettings: ConsentSettings = {
  ad_storage: "denied",
  ad_personalization: "denied",
  ad_user_data: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "denied",
};

export const acceptAllConsentSettings: ConsentSettings = {
  ad_storage: "granted",
  ad_personalization: "granted",
  ad_user_data: "granted",
  analytics_storage: "granted",
  functionality_storage: "granted",
  personalization_storage: "granted",
  security_storage: "granted",
};

export const denyAllAdditionalConsentSettings: ConsentSettings = {
  ad_storage: "denied",
  ad_personalization: "denied",
  ad_user_data: "denied",
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
    description: "Enables storage that supports the functionality of the website or app e.g. language settings.",
  },
  {
    name: "personalization_storage",
    description: "Enables storage related to personalization e.g. video recommendations.",
  },
  {
    name: "security_storage",
    description: "Enables storage related to security such as authentication functionality, fraud prevention, and other user protection.",
  },
  {
    name: "analytics_storage",
    description: "Enables storage (such as cookies) related to analytics e.g. visit duration.",
  },
  {
    name: "ad_storage",
    description: "Enables storage (such as cookies) related to advertising.",
  },
  {
    name: "ad_personalization",
    description: "Sets consent for personalized advertising.",
  },
  {
    name: "ad_user_data",
    description: "Sets consent for sending user data to partners for advertising purposes.",
  },
];
