import Image from "next/image";
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
        Lorem ipsum
      </Link>
      {children}
    </footer>
  );
};

export default Footer;
