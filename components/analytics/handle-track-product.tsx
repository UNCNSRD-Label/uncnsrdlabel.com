"use client";

import { useProduct } from "@shopify/hydrogen-react";
import { useEffect } from "react";
import { useTrack } from "use-analytics";

export const HandleTrackProduct = () => {
  const { product } = useProduct();
  const track = useTrack();

  useEffect(() => {
    track("product", {
      product,
    });
  }, [product, track]);

  return null;
};

export default HandleTrackProduct;
