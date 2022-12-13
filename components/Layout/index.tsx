import type { ReactNode } from "react";

import { clsx } from "clsx";
import Head from "next/head";
import { forwardRef } from "react";

import DrawerCart from "#/components/DrawerCart";
import DrawerNavigation from "#/components/DrawerNavigation";
import Header from "#/components/Header";
import Footer from "#/components/Footer";
import FooterNavigation from "#/components/FooterNavigation";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  showHeaderAndFooter?: boolean;
};

export const Component = forwardRef<HTMLDivElement, Props>(
  ({ children, showHeaderAndFooter = true }, ref) => {
    return (
      <>
        <Head>
          <title>UNCNSRD</title>
          <meta
            name="description"
            content="UNCNSRD is multifunctional swimwear for female figures who aren’t afraid to show off their assets and want to feel unapologetically sexy."
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        {/* TODO: Set drawer-end to load from right */}
        <div className={clsx(styles.drawer, "drawer")}>
          <input
            type="checkbox"
            id="drawerCart"
            className={clsx(
              styles.drawerToggle,
              "drawer-toggle",
              "drawer-toggle--cart"
            )}
          />
          <input
            id="drawerNavigation"
            type="checkbox"
            className={clsx(
              styles.drawerToggle,
              "drawer-toggle",
              "drawer-toggle--navigation"
            )}
          />
          <div
            className={clsx(
              styles.drawerContent,
              "drawer-content",
              "flex",
              "flex-col",
              "fitViewport"
            )}
            ref={ref}
          >
            {showHeaderAndFooter && <Header />}
            <main className={clsx(styles.main, "flex-1")}>{children}</main>
            {showHeaderAndFooter && <Footer />}
          </div>
          <div className={clsx(styles.root, "drawer-side", "drawer-end")}>
            <DrawerCart />
            <DrawerNavigation />
          </div>
          <FooterNavigation />
        </div>
      </>
    );
  }
);

Component.displayName = "Layout";

export default Component;
