import type {
  Menu,
  QueryRoot,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, ReactNode } from "react";
import type { PartialDeep } from "type-fest";

import { clsx } from "clsx";
import Link from "next/link";

import NewsletterSignupForm from "#/components/NewsletterSignupForm";
import SocialIcon from "#/components/SocialIcon";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  className?: string;
  data?:
    | ({
        clientServiceMenu?: Menu | null;
        legalMenu?: Menu | null;
      } & PartialDeep<QueryRoot, { recurseIntoArrays: true }>)
    | null;
};

export const Component: FC<Props> = ({ children, className, data }) => {
  return (
    <footer className={clsx(styles.footer, className, "footer")}>
      <nav className={clsx(styles.nav, styles.legal)}>
        {data?.legalMenu?.title && (
          <h2 className={styles.title}>{data?.legalMenu.title}</h2>
        )}
        {data?.legalMenu?.items?.map((item) => {
          const href = new URL(item.url ?? "/");

          return (
            <Link className={styles.link} href={href.pathname} key={item.id}>
              {item.title}
            </Link>
          );
        })}
      </nav>
      <nav className={clsx(styles.nav, styles.clientService)}>
        {data?.clientServiceMenu?.title && (
          <h2 className={styles.title}>{data?.clientServiceMenu.title}</h2>
        )}
        {data?.clientServiceMenu?.items?.map((item) => {
          const href = new URL(item.url ?? "/");

          return (
            <Link className={styles.link} href={href.pathname} key={item.id}>
              {item.title}
            </Link>
          );
        })}
        <Link href="/consent" title="Go to Consent Settings">
          Consent settings
        </Link>
        <Link href="/orders/shipping" title="Go to Shipping">
          Order tracking
        </Link>
        <Link href="/orders/returns" title="Go to Returns">
          Returns
        </Link>
        <Link href="/orders/payment" title="Go to Payment">
          Payment
        </Link>
      </nav>
      <NewsletterSignupForm className={clsx(styles.signupForm)} />
      <menu className={styles.social}>
        <SocialIcon url="https://www.instagram.com/uncnsrdlabel" />
        <SocialIcon url="https://twitter.com/uncnsrdlabel" />
        <SocialIcon url="https://www.facebook.com/uncnsrdlabel" />
      </menu>
      <span className={styles.copyright}>
        &copy; {new Date().getFullYear()} {data?.shop?.name}
      </span>
      {children}
    </footer>
  );
};

export default Component;
