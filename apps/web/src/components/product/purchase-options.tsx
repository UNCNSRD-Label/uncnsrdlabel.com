import { AddToCart } from "@/components/cart/add-to-cart";
import { AddToCartShell } from "@/components/cart/add-to-cart-shell";
import { LoadingDots } from "@/components/loading/dots";
import { Price } from "@/components/price";
import { VariantSelector } from "@/components/product/variant-selector";
import { Prose } from "@/components/prose";
import { ProductVariant } from "@shopify/hydrogen/storefront-api-types";
import {
  getFragmentData,
  productDetailsFragment,
  productVariantConnectionFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { FragmentType } from "@uncnsrdlabel/graphql-shopify-storefront/client";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense, forwardRef } from "react";

type PurchaseOptionsRef = HTMLDivElement;

interface PurchaseOptionsProps {
  className?: string;
  id?: string;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}

export const PurchaseOptions = forwardRef<
  PurchaseOptionsRef,
  PurchaseOptionsProps
>(({ className, id, productDetailsFragmentRef }, forwardedRef) => {
  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  const variantsFragmentRefs = product.variants;
  const variantFragments = getFragmentData(
    productVariantConnectionFragment,
    variantsFragmentRefs,
  );

  const variants: Pick<ProductVariant, "id" | "selectedOptions">[] =
    variantFragments.edges.map((edge) => edge?.node);

  return (
    <>
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

      <Suspense fallback={<LoadingDots />}>
        <VariantSelector options={product.options} variants={variants} />
      </Suspense>

      <Suspense fallback={<LoadingDots />}>
        {product.descriptionHtml ? (
          <Prose
            className="mb-6 text-xs leading-tight prose-thead:border-hotPink prose-tr:border-hotPink"
            html={product.descriptionHtml}
          />
        ) : null}
      </Suspense>

      <Suspense fallback={<AddToCartShell />}>
        <AddToCart
          availableForSale={product.availableForSale}
          options={product.options}
          variants={variants}
        />
      </Suspense>
    </>
  );
});

PurchaseOptions.displayName = "PurchaseOptions";
