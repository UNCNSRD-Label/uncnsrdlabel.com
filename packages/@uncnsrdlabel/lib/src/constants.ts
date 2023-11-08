export const TAGS = {
  collections: "collections",
  products: "products",
};

export const HIDDEN_PRODUCT_TAG = "web-frontend-hidden";
export const DEFAULT_OPTION = "Default Title";

export const SITE_DOMAIN_WEB =
  process.env.NEXT_PUBLIC_SITE_DOMAIN_WEB ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  "localhost:3000";

export const SITE_URL_WEB = `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}`;

export const COOKIE_CONSENT = "consent";

export const COOKIE_REDEEM_CODE = "redeem-code";
