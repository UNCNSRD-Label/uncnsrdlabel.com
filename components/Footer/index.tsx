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

export const Footer: FC<Props> = ({ children, className }) => {
  return (
    <footer className={clsx(styles.footer, className, "footer")}>
      <nav className={clsx(styles.nav, styles.legal)}>
        <h2 className={styles.title}>Legal</h2>
        <Link href="/terms-of-service">Terms of Service</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/cookie-policy">Cookie Policy</Link>
        <Link href="/disclaimer">Disclaimer</Link>
        <Link href="/warranty-and-returns-agreement">
          Warranty and Returns Agreement
        </Link>
      </nav>
      <nav className={clsx(styles.nav, styles.clientService)}>
        <h2 className={styles.title}>Client Service</h2>
        <a href="/faq" title="Go to FAQs">
          FAQs
        </a>
        <a href="/orders/track" title="Go to Track your Order">
          Track your order
        </a>
        <a href="/orders/shipping" title="Go to Shipping">
          Track your order
        </a>
        <a href="/orders/returns" title="Go to Returns">
          Returns
        </a>
        <a href="/orders/payment" title="Go to Payment">
          Payment
        </a>
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

export default Footer;
