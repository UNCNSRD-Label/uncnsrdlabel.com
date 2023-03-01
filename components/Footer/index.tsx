import Link from "next/link";
import React from "react";

import styles from "./index.module.css";

type Props = {
  children?: React.ReactNode;
  constrainWidth?: boolean;
};

export const Component: React.FC<Props> = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <Link href="/" passHref>
        Lorem ipsum
      </Link>
      {children}
    </footer>
  );
};

export default Component;
