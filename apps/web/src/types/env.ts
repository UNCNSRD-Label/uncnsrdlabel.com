import { env } from "process";
import { z } from "zod";

const envVariables = z.object({
  ANALYZE: z.string(),
  KLAVIYO_LIST_ID_NEWSLETTER: z.string(),
  KLAVIYO_PRIVATE_KEY: z.string(),
  NEXT_PUBLIC_DEFAULT_LOCALE: z.string(),
  NEXT_PUBLIC_FEATURE_FLAG_HOLDING_REDIRECT_ENABLE: z.string(),
  NEXT_PUBLIC_FEATURE_FLAG_PWA: z.string(),
  NEXT_PUBLIC_FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE: z.string(),
  NEXT_PUBLIC_FEATURE_FLAG_WISHLIST_ENABLE: z.string(),
  NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: z.string(),
  NEXT_PUBLIC_HYGRAPH_API_TOKEN: z.string(),
  NEXT_PUBLIC_HYGRAPH_PROJECT_ID: z.string(),
  NEXT_PUBLIC_HYGRAPH_REGION: z.string(),
  NEXT_PUBLIC_PREVIEW_ACCESS_CODE: z.string(),
  NEXT_PUBLIC_PROTOCOL: z.string(),
  NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN: z.string(),
  NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN: z.string(),
  NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION: z.string(),
  NEXT_PUBLIC_SITE_DOMAIN_ACCESS: z.string(),
  NEXT_PUBLIC_SITE_DOMAIN_WEB: z.string(),
  NEXT_PUBLIC_SITE_NAME: z.string(),
  NEXT_PUBLIC_VERCEL_URL: z.string(),
  SHOPIFY_REVALIDATION_SECRET: z.string(),
  SHOPIFY_STOREFRONT_TOKEN: z.string(),
  SITE_NAME: z.string(),
  SITE_URL_WEB: z.string(),
  TWITTER_CREATOR: z.string(),
  TWITTER_SITE: z.string(),
});

envVariables.parse(env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
