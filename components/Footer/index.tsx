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
    <footer className={styles.footer}>
      <div className={styles.navigationLinks}>
        <nav className={styles.navigationLegal}>
          <h2>Legal</h2>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </nav>
        <nav className={styles.clientService}>
          <h2>Client Service</h2>
          <a href="/faq" title="Go to FAQs">FAQs</a>
          <a href="/orders/track" title="Go to Track your Order">Track your order</a>
          <a href="/orders/returns" title="Go to Returns">Returns</a>
        </nav>
      </div>
      <SignupForm className={clsx(styles.signupForm)} />
      <span className={styles.copyright}>&copy; {new Date().getFullYear()} UNCNSRD</span>
      <menu className={styles.social}>
        <SocialIcon url="https://www.instagram.com/uncnsrdlabel" />
        <SocialIcon url="https://twitter.com/uncnsrdlabel" />
        <SocialIcon url="https://www.facebook.com/uncnsrdlabel" />
      </menu>
      {children}
    </footer>
  );
};

export default Footer;
