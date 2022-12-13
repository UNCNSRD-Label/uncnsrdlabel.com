"use client";

import type { FC, HTMLAttributes } from "react";

import { clsx } from "clsx";

import Cart from "#/components/Cart";

import styles from "./index.module.css";

type Props = {} & HTMLAttributes<HTMLElement>;

export const Component: FC<Props> = ({ className }) => {
  return (
    <>
      <label
        htmlFor="drawerCart"
        className={clsx("drawer-overlay--custom", "drawer-overlay--cart")}
      />
      <div
        className={clsx("p-4", "w-80", "bg-base-100", "drawer-content--cart")}
      >
        <Cart />
      </div>
    </>
  );
};

export default Component;
