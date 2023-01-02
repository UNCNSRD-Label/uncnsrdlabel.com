import type {
  Menu,
  QueryRoot,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, ReactNode } from "react";
import type { PartialDeep } from "type-fest";

import { useCart } from "@shopify/hydrogen-react";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router"
import { SlMagnifier, SlBag, SlUser } from "react-icons/sl";

import styles from "./index.module.css";

type Props = {
  className?: ReactNode;
  data?:
    | ({
        mainMenu?: Menu | null;
      } & PartialDeep<QueryRoot, { recurseIntoArrays: true }>)
    | null;
  position?: "fixed" | "sticky";
};

export const Component: FC<Props> = ({
  className,
  data,
  // data: {
  //   mainMenu,
  // },
  // mainMenu,
  position = "fixed",
}) => {
  const { totalQuantity } = useCart();
  // const router = useRouter();
  // console.log({router})

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
        <label htmlFor="drawerNavigation" className="btn btn-square btn-ghost">
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
        {data?.mainMenu?.items?.map((item) => {
          const href = new URL(item.url ?? "/");

          return (
            <Link className={styles.link} href={href.pathname} key={item.id}>
              {item.title}
            </Link>
          );
        })}
      </nav>
      <Link href="/" className={clsx(styles.logoContainer)}>
        <Image
          alt={`${data?.shop?.name} logo`}
          className={clsx(styles.logoImage, "dark:invert")}
          fill
          sizes="(max-width: 320px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
          src="/images/logos/logotype.svg"
        />
      </Link>
      <menu className={clsx(styles.actionsMenu)}>
        <li className={clsx(styles.actionsMenuListItem, "hidden", "md:flex")}>
          <button className={clsx(styles.action)}>
            <SlMagnifier
              aria-hidden="true"
              className={clsx("icon")}
              title="Search this site"
            />
            <span className={clsx("sr-only")}>Search this site</span>
          </button>
        </li>
        <li
          className={clsx(styles.actionsMenuListItem, "hidden", "md:flex")}
          tabIndex={0}
        >
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
        <li className={clsx(styles.actionsMenuListItem)}>
          <label
            htmlFor="drawerCart"
            className={clsx(styles.action, "btn", "btn-square", "btn-ghost")}
          >
            <SlBag
              aria-hidden="true"
              className={clsx("icon")}
              title="View my shopping bag"
            />
            <span className={clsx("sr-only")}>View my shopping bag</span>
            <span className={clsx(styles.indicator)}>{totalQuantity}</span>
          </label>
        </li>
      </menu>
    </header>
  );
};

export default Component;
