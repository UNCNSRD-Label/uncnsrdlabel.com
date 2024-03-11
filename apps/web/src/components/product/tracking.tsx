"use client";

import {
  getFragmentData,
  productDetailsFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { useEffect } from "react";
import { useTrack } from "use-analytics";

export const Tracking = ({
  productDetailsFragmentRef,
}: {
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) => {
  const track = useTrack();

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  const item = {
    discount: Number.parseInt(product.priceRange.minVariantPrice.amount) - Number.parseInt(product.compareAtPriceRange.minVariantPrice.amount),
    item_brand: product.vendor,
    item_category: product.collections.edges[0].node.title,
    item_id: product.id,
    item_name: product.title,
    price: product.priceRange.minVariantPrice.amount,
  }

  useEffect(() => {
    track("view_item", {
      currency: product.compareAtPriceRange.minVariantPrice.currencyCode,
      type: "product",
      value: product.priceRange.minVariantPrice.amount,
      items: [item],
    });
  }, [product, track]);

  return null;
};
