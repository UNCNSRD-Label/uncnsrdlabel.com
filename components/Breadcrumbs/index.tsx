"use client";

import { clsx } from "clsx";
import type { FC, ReactNode } from "react";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  className?: ReactNode;
};

export const Component: FC<Props> = ({ children, className }) => (
  <nav className={clsx(styles.root, className)}>
    <ul>{children}</ul>
  </nav>
);

export default Component;
