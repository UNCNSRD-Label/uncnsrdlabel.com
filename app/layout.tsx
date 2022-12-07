import "#/styles/global/globals.css";

import { Montserrat } from "@next/font/google";
import { clsx } from "clsx";
import { ReactNode } from "react";

import Providers from "#/providers";

import Header from "#/components/Header";
import Footer from "#/components/Footer";

import styles from "./layout.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "800"],
});

export default function RootLayout(context) {
  const {
    children,
    params,
    constrainWidth = false,
    showHeaderAndFooter = false,
  }: {
    children: ReactNode;
    params: any;
    constrainWidth?: boolean;
    showHeaderAndFooter?: boolean;
  } = context;
  const locale = "en-GB";

  return (
    <html lang={locale} className={clsx(montserrat.variable, "fitViewport")}>
      <head />
      <body
        className={clsx(
          styles.container,
          showHeaderAndFooter && styles.showHeaderAndFooter,
          "fitViewport"
        )}
      >
        <Providers locale={locale}>
          {showHeaderAndFooter && (
            <Header data-constrainWidth={constrainWidth} />
          )}
          <main
            className={clsx(styles.main, constrainWidth && "constrainWidth")}
          >
            {children}
          </main>
          {showHeaderAndFooter && (
            <Footer data-constrainWidth={constrainWidth} />
          )}
        </Providers>
      </body>
    </html>
  );
}
