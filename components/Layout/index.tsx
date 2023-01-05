import type {
  Menu,
  QueryRoot,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { ReactNode } from "react";
import type { PartialDeep } from "type-fest";

import { clsx } from "clsx";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { forwardRef } from "react";

import DrawerCart from "#/components/DrawerCart";
import DrawerNavigation from "#/components/DrawerNavigation";
import Consent from "#/components/Consent";
import Header from "#/components/Header";
import Footer from "#/components/Footer";
// import FooterNavigation from "#/components/FooterNavigation";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  classNameDrawerContent?: string;
  classNameMain?: string;
  data?:
    | ({
        clientServiceMenu?: Menu | null;
        mainMenu?: Menu | null;
        legalMenu?: Menu | null;
      } & PartialDeep<QueryRoot, { recurseIntoArrays: true }>)
    | null;
  showHeaderAndFooter?: boolean;
};

export const Component = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      classNameDrawerContent,
      classNameMain,
      data,
      showHeaderAndFooter = true,
    },
    ref
  ) => {
    const { asPath } = useRouter();

    return (
      <>
        <Head>
          {data?.shop && (
            <NextSeo
              {...(data.shop.name && {
                title: data.shop.name,
              })}
              {...(data.shop.description && {
                description: data.shop.description,
              })}
            />
          )}
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
              classNameDrawerContent,
              "drawer-content",
              "flex",
              "flex-col",
              "fitViewport"
            )}
            ref={ref}
          >
            {showHeaderAndFooter && <Header data={data} />}
            <main className={clsx(styles.main, classNameMain, "flex-1")}>
              {children}
            </main>
            {showHeaderAndFooter && <Footer data={data} />}
          </div>
          <div className={clsx(styles.root, "drawer-side", "drawer-end")}>
            <DrawerCart />
            <DrawerNavigation data={data} />
          </div>
          {/* <FooterNavigation /> */}
          <Consent route={asPath} view="banner" />
        </div>
      </>
    );
  }
);

Component.displayName = "Layout";

export default Component;
