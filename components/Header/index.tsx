import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

import styles from "./index.module.css";

type Props = {
  children?: React.ReactNode;
  className?: ReactNode;
  position?: "fixed" | "sticky"
};

export const Component: React.FC<Props> = ({ children, className, position = "fixed" }) => {
  return (
    <header className={clsx(styles.header, position, className)}>
      <Link href="/" className={styles.logoContainer}>
        <Image
          alt="UNCNSRD logo"
          className={styles.logoImage}
          fill
          sizes="(max-width: 320px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
          src="/images/logos/logotype.svg"
        />
      </Link>
      <nav className={styles.nav}>
        <Link href="/shop" className={styles.navLink}>
          Shop
        </Link>
        <Link href="/collection" className={styles.navLink}>
          Collection
        </Link>
        <Link href="/culture" className={styles.navLink}>
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
