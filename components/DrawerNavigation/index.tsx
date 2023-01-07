"use client";

import type {
  Menu,
  QueryRoot,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, HTMLAttributes, ReactNode } from "react";
import type { PartialDeep } from "type-fest";

import { clsx } from "clsx";
import Link from "next/link";
import { SlMagnifier } from "react-icons/sl";
import slugify from "slugify";

import styles from "./index.module.css";

type Props = {
  className?: string;
  data?:
    | ({
        mainMenu?: Menu | null;
      } & PartialDeep<QueryRoot, { recurseIntoArrays: true }>)
    | null;
} & HTMLAttributes<HTMLElement>;

export const Component: FC<Props> = ({ className, data }) => {
  return (
    <>
      <label
        htmlFor="drawerNavigation"
        className={clsx("drawer-overlay--custom", "drawer-overlay--navigation")}
      />
      <div
        className={clsx(
          "p-4",
          "w-80",
          "bg-base-100",
          "divide-y",
          "drawer-content--navigation"
        )}
      >
        <section className={clsx("form-control", "pb-4")}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered flex-auto"
            />
            <button className="btn btn-square">
              <SlMagnifier
                aria-hidden="true"
                className={clsx("icon")}
                title="Search this site"
              />
            </button>
          </div>
        </section>

        <section className={clsx(styles.section)}>
          {/* <h2 className={clsx(styles.title)}>Main</h2> */}
          <nav className={clsx("menu", "menu-horizontal")}>
            {data?.mainMenu?.items?.map((item) => {
              const href = new URL(item.url ?? "/");

              return (
                <li key={item.id}>
                  <Link className={styles.link} href={href.pathname}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </nav>
        </section>

        <section className={clsx(styles.section)}>
          <h2 className={clsx(styles.title)}>
            <Link href="/account/order" className={clsx(styles.link)}>
              Account
            </Link>
          </h2>
          <nav className={clsx("menu", "menu-horizontal")}>
            <li>
              <Link href="/account/order" className={clsx(styles.link)}>
                Orders
              </Link>
            </li>
            <li>
              <Link href="/account/wishlist" className={clsx(styles.link)}>
                Wishlist
              </Link>
            </li>
          </nav>
        </section>

        <section className={clsx(styles.section)}>
          <h2 className={clsx(styles.title)}>
            <Link className={clsx(styles.card)} href="/collections/all">
              Collections
            </Link>
          </h2>
          <nav className={clsx("menu", "max-h-72")}>
            {data?.collections?.nodes?.map((collection, index) => {
              if (collection?.handle != null) {
                return (
                  <li key={index}>
                    <Link
                      className={clsx(styles.card)}
                      href={`/collections/${slugify(collection.handle, {
                        lower: true,
                      })}`}
                    >
                      {collection?.title}
                    </Link>
                  </li>
                );
              }
            })}
          </nav>
        </section>
      </div>
    </>
  );
};

export default Component;
