import { clsx } from "clsx";
import Image from "next/future/image";
import Link from "next/link";
import React from "react";

import styles from "./header.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <a className={styles.logoContainer}>
          <Image alt="UNCNSRD logo" className={styles.logo} fill sizes="100vw" src="/images/logos/logotype.svg" />
        </a>
      </Link>
      <nav className={styles.nav}>
        <Link href="/shop" passHref>
          <a className={styles.navLink}>Shop</a>
        </Link>
        <Link href="/collection" passHref>
          <a className={styles.navLink}>Collection</a>
        </Link>
        <Link href="/culture" passHref>
          <a className={styles.navLink}>Culture</a>
        </Link>
      </nav>
      <button className={clsx("button")}>
        <span className={clsx("icon", "icon__loupe")} title="Search this site" aria-hidden="true"></span>
        <span className={clsx("sr-only")}>Search this site</span>
      </button>
      {children}
    </header>
  );
};

export default Header;
