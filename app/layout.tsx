import "#/styles/global/globals.css";

import type { HTMLAttributes } from "react";

import { Montserrat } from "@next/font/google";
import { clsx } from "clsx";
import { ReactNode } from "react";

import Providers from "#/lib/providers";

import Header from "#/components/Header";
import Footer from "#/components/Footer";

import styles from "./layout.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "800"],
});

type Props = {
  children: ReactNode;
  className?: string;
  showHeaderAndFooter?: boolean;
} & HTMLAttributes<HTMLElement>;

export default function RootLayout({
  // className,
  children,
}: // showHeaderAndFooter = false,
Props) {
  const locale = "en-GB";

  return (
    <html
      lang={locale}
      className={clsx(
        montserrat.variable,
        // className,
        "fitViewport"
      )}
    >
      <head />
      <body
        className={clsx(
          styles.container,
          // showHeaderAndFooter && styles.showHeaderAndFooter,
          "fitViewport"
        )}
      >
        <Providers locale={locale}>
          {/* {showHeaderAndFooter && <Header />} */}
          <main className={clsx(styles.main)}>{children}</main>
          {/* {showHeaderAndFooter && <Footer />} */}
        </Providers>
      </body>
    </html>
  );
}
