import Image from "next/future/image";
import Link from "next/link";
import React from "react";

import styles from "./footer.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Footer: React.FC<Props> = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <Link href="/" passHref>
        <a>Lorem ipsum</a>
      </Link>
      {children}
    </footer>
  );
};

export default Footer;
