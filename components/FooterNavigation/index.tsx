import type { FC, ReactNode } from "react";

import { clsx } from "clsx";
import Link from "next/link";
import { SlMagnifier, SlBag, SlUser } from "react-icons/sl";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  className?: ReactNode;
};

export const Component: FC<Props> = ({ children, className }) => {
  return (
    <footer className={clsx(styles.root, "btm-nav")}>
      <Link className={clsx(styles.action)} href="/search">
        <SlMagnifier
          aria-hidden="true"
          className={clsx("icon")}
          title="Search this site"
        />
        <span className={clsx("btm-nav-label")}>Search</span>
      </Link>

      <Link className={clsx(styles.action)} href="/account">
        <SlUser
          aria-hidden="true"
          className={clsx("icon")}
          title="View my account"
        />
        <span className="btm-nav-label">Account</span>
      </Link>

      <Link className={clsx(styles.action)} href="/bag">
        <SlBag
          aria-hidden="true"
          className={clsx("icon")}
          title="View my shopping bag"
        />
        <span className={clsx("btm-nav-label")}>Bag (3)</span>
      </Link>
    </footer>
  );
};

export default Component;
