import "#/styles/global/globals.css";

import { clsx } from "clsx";
import { Montserrat } from "@next/font/google";
import {
  ShopifyProvider,
  CartProvider,
  // Image as ShopifyImage,
  // type StorefrontApiResponseOk,
  // useShop,
} from "@shopify/hydrogen-react";

// import {
//   getShopifyDomain,
//   getStorefrontApiUrl,
//   getPublicTokenHeaders,
//   getPrivateTokenHeaders,
//   publicStorefrontToken as storefrontToken,
//   storefrontApiVersion,
// } from "#/src/shopify-client";

import Header from "#/components/Header";
import Footer from "#/components/Footer";

import styles from "#/app/layout.module.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: "300",
});

export default function RootLayout({
  children,
  constrainWidth = false,
  showHeaderAndFooter = false,
}: {
  children: React.ReactNode;
  constrainWidth?: boolean;
  showHeaderAndFooter?: boolean;
}) {
  // const {storeDomain} = useShop();
  const storefrontToken = process.env.PUBLIC_STOREFRONT_TOKEN!;
  const storeDomain = process.env.STORE_DOMAIN!;
  const storefrontApiVersion = process.env.STOREFRONT_API_VERSION!;

  return (
    <ShopifyProvider
      shopifyConfig={{
        storeDomain,
        storefrontToken,
        storefrontApiVersion,
        locale: "EN-US",
      }}
    >
      <CartProvider>
        <html
          lang="en"
          className={clsx(montserrat.variable, "[color-scheme:dark]")}
        >
          <head />
          <body
            className={clsx(
              styles.container,
              showHeaderAndFooter && styles.showHeaderAndFooter
            )}
          >
            {showHeaderAndFooter && <Header constrainWidth={constrainWidth} />}
            <main
              className={clsx(styles.main, constrainWidth && "constrainWidth")}
            >
              {children}
              {/* <div>Storefront API Domain: {storeDomain}</div> */}
            </main>
            {showHeaderAndFooter && <Footer constrainWidth={constrainWidth} />}
          </body>
        </html>
      </CartProvider>
    </ShopifyProvider>
  );
}
