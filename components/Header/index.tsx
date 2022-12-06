import type { FC, ReactNode } from "react";

import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { RiSearchLine, RiShoppingBag2Line, RiWomenLine } from "react-icons/ri";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  className?: ReactNode;
  position?: "fixed" | "sticky";
};

export const Component: FC<Props> = ({
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
      <nav className={styles.nav}>
        <Link className={styles.link} href="/shop">
          Shop
        </Link>
        <Link className={styles.link} href="/collection">
          Collection
        </Link>
        <Link className={styles.link} href="/culture">
          Culture
        </Link>
      </nav>
      <Link href="/" className={clsx(styles.logoContainer)}>
        <Image
          alt="UNCNSRD logo"
          className={styles.logoImage}
          fill
          sizes="(max-width: 320px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
          src="/images/logos/logotype.svg"
        />
      </Link>
      <menu className={clsx(styles.actionsMenu)}>
        <li>
          <button className={clsx(styles.action, "hidden", "tablet:block")}>
            <RiSearchLine
              aria-hidden="true"
              className={clsx("icon")}
              title="Search this site"
            />
            <span className={clsx("sr-only")}>Search this site</span>
          </button>
        </li>
        <li tabIndex={0}>
          <Link href="/account" className={clsx(styles.action)}>
            <RiWomenLine
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
            <RiShoppingBag2Line
              aria-hidden="true"
              className={clsx("icon")}
              title="View my shopping bag"
            />
            <span className={clsx("sr-only")}>View my shopping bag</span>
            <span className={clsx(styles.indicator)}>3</span>
          </Link>
        </li>
      </menu>
    </header>
  );
};

export default Component;
