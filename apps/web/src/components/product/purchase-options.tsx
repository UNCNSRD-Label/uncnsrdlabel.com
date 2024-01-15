import { AddToCart } from "@/components/cart/add-to-cart";
import { VariantSelector } from "@/components/product/variant-selector";
import { type ProductVariant } from "@shopify/hydrogen/storefront-api-types";
import {
  getFragmentData,
  productDetailsFragment,
  productVariantConnectionFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { Usable } from "react";
import { type ResolvedIntlConfig } from "react-intl";

export const PurchaseOptions = ({
  dictionary,
  productDetailsFragmentRef,
}: {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  id?: string;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) => {
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
      <VariantSelector options={product.options} productDetailsFragmentRef={productDetailsFragmentRef} variants={variants} />

      <AddToCart
        availableForSale={product.availableForSale}
        container="PurchaseOptions"
        dictionary={dictionary}
        options={product.options}
        variants={variants}
      />
    </>
  );
};

PurchaseOptions.displayName = "PurchaseOptions";
