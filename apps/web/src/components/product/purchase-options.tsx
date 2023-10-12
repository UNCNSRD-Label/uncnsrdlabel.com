"use client";

import { AddToCart } from "@/components/cart/add-to-cart";
import { Price } from "@/components/price";
import { VariantSelector } from "@/components/product/variant-selector";
import { Prose } from "@/components/prose";
import { ResultOf } from "@graphql-typed-document-node/core";
import { ProductProvider } from "@shopify/hydrogen-react";
import { ProductVariant } from "@shopify/hydrogen/storefront-api-types";
import {
  getFragmentData,
  productDetailsFragment,
  productVariantConnectionFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { forwardRef } from "react";

type PurchaseOptionsRef = HTMLDivElement;

interface PurchaseOptionsProps {
  className?: string;
  id?: string;
  product: ResultOf<typeof productDetailsFragment>;
}

export const PurchaseOptions = forwardRef<
  PurchaseOptionsRef,
  PurchaseOptionsProps
>(({ className, id, product }, forwardedRef) => {
  const variantsFragmentRefs = product.variants;
  const variantFragments = getFragmentData(
    productVariantConnectionFragment,
    variantsFragmentRefs,
  );

  const variants: Pick<ProductVariant, "id" | "selectedOptions">[] =
    variantFragments.edges.map((edge) => edge?.node);

  return (
    <ProductProvider data={product}>
      <div className={cn("mb-6", className)} id={id} ref={forwardedRef}>
        <h3 data-testid="product-name" className="box-decoration-clone text-xl">
          {product.title}
        </h3>
        <Price
          className="text-sm font-semibold"
          amount={product.priceRange.maxVariantPrice.amount}
          currencyCode={product.priceRange.maxVariantPrice.currencyCode}
        />
      </div>

      <VariantSelector options={product.options} variants={variants} />

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-xs leading-tight"
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart
        availableForSale={product.availableForSale}
        className="btn btn-base btn-primary btn-bg relative w-full justify-center py-4 text-sm"
        options={product.options}
        variants={variants}
      />
    </ProductProvider>
  );
});

PurchaseOptions.displayName = "PurchaseOptions";
