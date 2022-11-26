"use client";

import { useShop } from "@shopify/hydrogen-react";
import Link from "next/link";
import React from "react";

import styles from "./index.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Component: React.FC<Props> = ({ children }) => {
  const { storeDomain } = useShop();

  return (
    <footer className={styles.footer}>
      <Link href="/" passHref>
        Lorem ipsum
      </Link>
      {children}
      <div>Storefront API Domain: {storeDomain}</div>
    </footer>
  );
};

export default Component;
