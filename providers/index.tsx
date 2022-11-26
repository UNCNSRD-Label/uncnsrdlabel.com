import ShopifyProvider from "./shopify";

export default function Providers({ children }: { children: React.ReactNode }) {
  const storefrontToken = process.env.PUBLIC_STOREFRONT_TOKEN!;
  const storeDomain = process.env.STORE_DOMAIN!;
  const storefrontApiVersion = process.env.STOREFRONT_API_VERSION!;
  const locale = process.env.LOCALE!;

  const shopifyConfig = {
    locale,
    storeDomain,
    storefrontApiVersion,
    storefrontToken,
  };

  return (
    <ShopifyProvider shopifyConfig={shopifyConfig}>{children}</ShopifyProvider>
  );
}
