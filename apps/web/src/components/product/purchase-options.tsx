import { AddToCart } from "@/components/cart/add-to-cart";
import { AddToCartShell } from "@/components/cart/add-to-cart-shell";
import { VariantSelector } from "@/components/product/variant-selector";
import { VariantSelectorShell } from "@/components/product/variant-selector-shell";
import { ProductVariant } from "@shopify/hydrogen/storefront-api-types";
import {
  FragmentType,
  getFragmentData,
  productDetailsFragment,
  productVariantConnectionFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { Suspense } from "react";

interface PurchaseOptionsProps {
  className?: string;
  id?: string;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}

export const PurchaseOptions = ({ productDetailsFragmentRef }: PurchaseOptionsProps) => {
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
      <Suspense fallback={<VariantSelectorShell options={product.options} />}>
        <VariantSelector options={product.options} variants={variants} />
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
}

PurchaseOptions.displayName = "PurchaseOptions";
