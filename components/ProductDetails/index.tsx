"use client";

import { clsx } from "clsx";
import React from "react";

import {
  AddToCartButton,
  Image,
  Money,
  ProductPrice,
  ProductProvider,
} from "@shopify/hydrogen-react";

import styles from "./index.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Component: React.FC<Props> = ({ children }) => {
  return (
    <ProductProvider data={{}}>
      <AddToCartButton>Add To Cart</AddToCartButton>
    </ProductProvider>
  );
};

export default Component;
