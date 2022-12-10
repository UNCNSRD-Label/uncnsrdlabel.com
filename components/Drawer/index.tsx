"use client";

// import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, HTMLAttributes } from "react";
// import type { PartialDeep } from "type-fest";

// import { ProductPrice } from "@shopify/hydrogen-react";
import { clsx } from "clsx";
// import Image from "next/image";
import Link from "next/link";
import { SlMagnifier, SlBag, SlUser } from "react-icons/sl";

import styles from "./index.module.css";

type Props = {
  // product: PartialDeep<Product, { recurseIntoArrays: true }>;
} & HTMLAttributes<HTMLElement>;

export const Component: FC<Props> = ({ className }) => {
  return (
    <div className={clsx(styles.root, className, "drawer-side")}>
      <label htmlFor="drawerContents" className="drawer-overlay"></label>
      <menu
        className={clsx(
          styles.actionsMenu,
          "menu",
          "p-4",
          "w-80",
          "bg-base-100"
        )}
        id="drawerContents"
      >
        <li>
          <button className={clsx(styles.action)}>
            <SlMagnifier
              aria-hidden="true"
              className={clsx("icon")}
              title="Search this site"
            />
            <span className={clsx("sr-only")}>Search this site</span>
          </button>
        </li>
        <li tabIndex={0}>
          <Link href="/account" className={clsx(styles.action)}>
            <SlUser
              aria-hidden="true"
              className={clsx("icon")}
              title="View my account"
            />
            <span className={clsx("sr-only")}>View my account</span>
          </Link>
          <ul className={clsx(styles.actionsSubMenu)}>
            <li>
              <Link href="/account" className={clsx(styles.link)}>
                My account
              </Link>
            </li>
            <li>
              <Link href="/account/order" className={clsx(styles.link)}>
                My orders
              </Link>
            </li>
            <li>
              <Link href="/account/wishlist" className={clsx(styles.link)}>
                My wishlist
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className={clsx(styles.action)} href="/account/bag">
            <SlBag
              aria-hidden="true"
              className={clsx("icon")}
              title="View my shopping bag"
            />
            <span className={clsx("sr-only")}>View my shopping bag</span>
            <span className={clsx(styles.indicator)}>3</span>
          </Link>
        </li>
      </menu>
    </div>
  );
};

export default Component;
