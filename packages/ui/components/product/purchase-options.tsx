import { Product } from "@uncnsrdlabel/lib/shopify/types";
import { AddToCart } from "@uncnsrdlabel/ui/components/cart/add-to-cart";
import Price from "@uncnsrdlabel/ui/components/price";
import { VariantSelector } from "@uncnsrdlabel/ui/components/product/variant-selector";
import Prose from "@uncnsrdlabel/ui/components/prose";
import { clsx } from "clsx";
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
