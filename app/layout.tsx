import "#/styles/global/globals.css";

import { clsx } from "clsx";
import { Montserrat } from "@next/font/google";

import Header from "#/components/Header";
import Footer from "#/components/Footer";

import styles from "./layout.module.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ['latin'],
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
        <main className={clsx(styles.main, constrainWidth && "constrainWidth")}>
          {children}
        </main>
        {showHeaderAndFooter && <Footer constrainWidth={constrainWidth} />}
      </body>
    </html>
  );
}
