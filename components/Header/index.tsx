import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { RiSearchLine, RiShoppingBag2Line, RiWomenLine } from "react-icons/ri";

import styles from "./index.module.css";

type Props = {
  children?: React.ReactNode;
  className?: ReactNode;
  position?: "fixed" | "sticky";
};

export const Component: React.FC<Props> = ({
  children,
  className,
  position = "fixed",
}) => {
  return (
    <header
      className={clsx(
        styles.header,
        position,
        "w-full",
        "justify-between",
        "navbar",
        className
      )}
    >
      <div className="flex-none desktop:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <Link href="/" className={clsx(styles.logoContainer)}>
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
      <menu className={clsx(styles.menu, "menu", "menu-horizontal")}>
        <button
          className={clsx(
            "btn",
            "btn-ghost",
            "btn-xs",
            "hidden",
            "tablet:block"
          )}
        >
          <RiSearchLine
            aria-hidden="true"
            className={clsx("icon")}
            title="Search this site"
          />
          <span className={clsx("sr-only")}>Search this site</span>
        </button>
        <button className={clsx("btn", "btn-ghost", "btn-xs")}>
          <RiWomenLine
            aria-hidden="true"
            className={clsx("icon")}
            title="View my account"
          />
          <span className={clsx("sr-only")}>View my account</span>
        </button>
        <button className={clsx("btn", "btn-ghost", "btn-xs")}>
          <RiShoppingBag2Line
            aria-hidden="true"
            className={clsx("icon")}
            title="View my shopping bag"
          />
          <span className={clsx("sr-only")}>View my shopping bag</span>
        </button>
      </menu>
    </header>
  );
};

export default Component;
