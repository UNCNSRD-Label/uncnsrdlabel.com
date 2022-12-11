"use client";

import type { FC, HTMLAttributes } from "react";

import { clsx } from "clsx";
import Link from "next/link";
import { SlMagnifier, SlBag, SlUser } from "react-icons/sl";

import Cart from "#/components/Cart";

import styles from "./index.module.css";

type Props = {} & HTMLAttributes<HTMLElement>;

export const Component: FC<Props> = ({ className }) => {
  return (
    <div className={clsx(styles.root, "drawer-side")}>
      <label htmlFor="drawerNavigation" className="drawer-overlay"></label>
      <div className={clsx("p-4", "w-80", "bg-base-100", "divide-y")}>
        <section className={clsx("form-control", "pb-4")}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
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
        <nav className={clsx("menu", "items-start")}>
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
        </nav>
        <Cart className={clsx("pt-4")} />
      </div>
    </div>
  );
};

export default Component;
