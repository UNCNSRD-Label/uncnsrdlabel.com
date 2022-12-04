import { clsx } from "clsx";
import Link from "next/link";
import React from "react";

import SignupForm from "#/components/SignupForm";
import SocialIcon from "#/components/SocialIcon";

import styles from "./index.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Footer: React.FC<Props> = ({ children }) => {
  return (
    <footer className={clsx(styles.footer)}>
      <div className={styles.navigationLinks}>
        <nav className={clsx(styles.navigationLegal, "prose", "prose-slate")}>
          <h2>Legal</h2>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/warranty-and-returns-agreement">
            Warranty and Returns Agreement
          </Link>
        </nav>
        <nav className={clsx(styles.clientService, "prose", "prose-slate")}>
          <h2>Client Service</h2>
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
      </div>
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
