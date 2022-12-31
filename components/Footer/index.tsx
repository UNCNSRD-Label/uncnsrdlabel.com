import type { FC, ReactNode } from "react";

import { clsx } from "clsx";
import Link from "next/link";

import SignupForm from "#/components/SignupForm";
import SocialIcon from "#/components/SocialIcon";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  className?: ReactNode;
};

export const Component: FC<Props> = ({ children, className }) => {
  return (
    <footer className={clsx(styles.footer, className, "footer")}>
      <nav className={clsx(styles.nav, styles.legal)}>
        <h2 className={styles.title}>Legal</h2>
        <Link href="/policies/privacy">Privacy Policy</Link>
        <Link href="/policies/refund">Refund Policy</Link>
        <Link href="/policies/shipping">Shipping Policy</Link>
        <Link href="/policies/terms-of-service">Terms of Service</Link>
        <Link href="/pages/cookie-policy">Cookie Policy</Link>
      </nav>
      <nav className={clsx(styles.nav, styles.clientService)}>
        <h2 className={styles.title}>Client Service</h2>
        <Link href="/pages/faq" title="Go to FAQs">
          FAQs
        </Link>
        <Link href="/orders/track" title="Go to Order Tracking">
          Track your order
        </Link>
        <Link href="/orders/shipping" title="Go to Shipping">
          Track your order
        </Link>
        <Link href="/orders/returns" title="Go to Returns">
          Returns
        </Link>
        <Link href="/orders/payment" title="Go to Payment">
          Payment
        </Link>
      </nav>
      <SignupForm className={clsx(styles.signupForm)} />
      <menu className={styles.social}>
        <SocialIcon url="https://www.instagram.com/uncnsrdlabel" />
        <SocialIcon url="https://twitter.com/uncnsrdlabel" />
        <SocialIcon url="https://www.facebook.com/uncnsrdlabel" />
      </menu>
      <span className={styles.copyright}>
        &copy; {new Date().getFullYear()} UNCNSRD
      </span>
      {children}
    </footer>
  );
};

export default Component;
