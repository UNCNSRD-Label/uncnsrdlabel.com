import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./index.module.css";

type Props = {
  children?: React.ReactNode;
  constrainWidth?: boolean;
};

export const Component: React.FC<Props> = ({ children }) => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref className={styles.logoContainer}>
        <Image
          alt="UNCNSRD logo"
          className={styles.logoImage}
          fill
          sizes="(max-width: 320px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
          src="/images/logos/logotype.svg"
        />
      </Link>
      <nav className={styles.nav}>
        <Link href="/shop" passHref className={styles.navLink}>
          Shop
        </Link>
        <Link href="/collection" passHref className={styles.navLink}>
          Collection
        </Link>
        <Link href="/culture" passHref className={styles.navLink}>
          Culture
        </Link>
      </nav>
      <button className={clsx("button")}>
        <span
          className={clsx("icon", "icon__loupe")}
          title="Search this site"
          aria-hidden="true"
        ></span>
        <span className={clsx("sr-only")}>Search this site</span>
      </button>
      {children}
    </header>
  );
};

export default Component;
