import type { ReactNode } from "react";

import { clsx } from "clsx";
import Head from "next/head";
import { forwardRef } from "react";
import { SlMagnifier, SlBag, SlUser } from "react-icons/sl";

import DrawerNavigation from "#/components/DrawerNavigation";
import Header from "#/components/Header";
import Footer from "#/components/Footer";

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

        <div className={clsx(styles.drawer, "drawer")}>
          <input
            id="drawerNavigation"
            type="checkbox"
            className={clsx(styles.drawerToggle, "drawer-toggle")}
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
          <DrawerNavigation />
          <div className="btm-nav">
            <button className={clsx(styles.action)}>
              <SlMagnifier
                aria-hidden="true"
                className={clsx("icon")}
                title="Search this site"
              />
              <span className={clsx("btm-nav-label")}>Search</span>
            </button>

            <button className={clsx(styles.action)}>
              <SlUser
                aria-hidden="true"
                className={clsx("icon")}
                title="View my account"
              />
              <span className="btm-nav-label">Account</span>
            </button>

            <button className={clsx(styles.action)}>
              <SlBag
                aria-hidden="true"
                className={clsx("icon")}
                title="View my shopping bag"
              />
              <span className={clsx("btm-nav-label")}>Bag (3)</span>
            </button>
          </div>
        </div>
      </>
    );
  }
);

Component.displayName = "Layout";

export default Component;
