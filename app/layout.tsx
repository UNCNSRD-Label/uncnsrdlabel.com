import "#/styles/global/globals.css";

import { clsx } from "clsx";
import { Montserrat } from "@next/font/google";

import Providers from "#/providers";

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
  subsets: ["latin"],
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
  return (
    <html
      lang="en"
      className={clsx(
        montserrat.variable,
        "fitViewport",
        "[color-scheme:dark]"
      )}
    >
      <head />
      <body
        className={clsx(
          styles.container,
          showHeaderAndFooter && styles.showHeaderAndFooter,
          "fitViewport"
        )}
      >
        {/* <Providers> */}
        {showHeaderAndFooter && <Header data-constrainWidth={constrainWidth} />}
        <main className={clsx(styles.main, constrainWidth && "constrainWidth")}>
          {children}
        </main>
        {showHeaderAndFooter && <Footer data-constrainWidth={constrainWidth} />}
        {/* </Providers> */}
      </body>
    </html>
  );
}
