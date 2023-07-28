"use client";

import { useProduct } from "@shopify/hydrogen-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useTrack } from "use-analytics";

export const HandleTrackProduct = () => {
  const track = useTrack();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const product = useProduct();

  useEffect(() => {
    console.log("track product");
    track(
      "product",
      {
        product,
      },
      // , {
      //   plugins: {
      //     // disable this specific track call all plugins except customerio
      //     all: false,
      //     customerio: true
      //   }
      // }
    );
  }, [track, pathname, searchParams, product]);

  return null;
};

export default HandleTrackProduct;
