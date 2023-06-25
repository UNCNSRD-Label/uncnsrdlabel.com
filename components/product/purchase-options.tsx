"use client";

import { clsx } from "clsx";
import Price from "components/price";
import { AddToCart } from "components/product/add-to-cart";
import { VariantSelector } from "components/product/variant-selector";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import { forwardRef } from "react";

type PurchaseOptionsRef = HTMLDivElement;

interface PurchaseOptionsProps {
  className?: string;
  id?: string;
  product: Product;
}

export const PurchaseOptions = forwardRef<
  PurchaseOptionsRef,
  PurchaseOptionsProps
>(({ className, id, product }, forwardedRef) => {
  return (
    <>
      <div
        className={clsx("mb-16 pt-24 sm:pt-0", className)}
        id={id}
        ref={forwardedRef}
      >
        <h3
          data-testid="product-name"
          className="box-decoration-clone text-lg uppercase"
        >
          {product.title}
        </h3>
        <Price
          className="text-sm font-semibold"
          amount={product.priceRange.maxVariantPrice.amount}
          currencyCode={product.priceRange.maxVariantPrice.currencyCode}
        />
      </div>

      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight"
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart
        variants={product.variants}
        availableForSale={product.availableForSale}
      />
    </>
  );
});

PurchaseOptions.displayName = "PurchaseOptions";
