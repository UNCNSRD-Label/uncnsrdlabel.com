import "#/styles/global/globals.css";

import { clsx } from "clsx";
import { Montserrat } from "next/font/google";

import Header from "#/components/Header";
import Footer from "#/components/Footer";

import styles from "./layout.module.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "300",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(montserrat.variable, "[color-scheme:dark]")}
    >
      <head />
      <body className={clsx(styles.container)}>
        {/* <Header /> */}
        <main className={clsx(styles.main)}>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
