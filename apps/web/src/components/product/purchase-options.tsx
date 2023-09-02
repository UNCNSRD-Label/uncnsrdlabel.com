import { AddToCart } from "@/components/cart/add-to-cart";
import { Price } from "@/components/price";
import { VariantSelector } from "@/components/product/variant-selector";
import { Prose } from "@/components/prose";
import { ResultOf } from '@graphql-typed-document-node/core';
import { getFragmentData, productDetailsFragment, productVariantConnectionFragment } from "@uncnsrdlabel/graphql-shopify-storefront";
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
  const variantFragments = getFragmentData(productVariantConnectionFragment, variantsFragmentRefs)
  const variants = variantFragments.edges.map((edge) => edge?.node);

  return (
    <>
      <div
        className={cn("mb-16 pt-24 sm:pt-0", className)}
        id={id}
        ref={forwardedRef}
      >
        <h3
          data-testid="product-name"
          className="box-decoration-clone text-2xl"
        >
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
          className="mb-6 text-sm leading-tight"
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart
        variants={variants}
        availableForSale={product.availableForSale}
      />
    </>
  );
});

PurchaseOptions.displayName = "PurchaseOptions";
