"use client";

import {
  getFragmentData,
  productDetailsFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { FragmentType } from "@uncnsrdlabel/graphql-shopify-storefront/client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePage, useTrack } from "use-analytics";

export const Tracking = ({
  productDetailsFragmentRef,
}: {
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) => {
  const page = usePage();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const track = useTrack();

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  useEffect(() => {
    track("product", {
      product,
    });
  }, [product, track]);

  useEffect(() => {
    page();
  }, [page, pathname, searchParams]);

  useEffect(() => {
    page();
  }, [page, pathname, searchParams]);

  return null;
};
