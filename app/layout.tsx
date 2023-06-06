import "#/styles/main.css";

import { clsx } from "clsx";
import { Montserrat } from "next/font/google";

import styles from "./layout.module.css";

const montserrat = Montserrat({
  variable: "--font-sans",
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
        <main className={clsx(styles.main)}>{children}</main>
      </body>
    </html>
  );
}
