import { AddToCart } from "@/components/cart/add-to-cart";
import { VariantSelector } from "@/components/product/variant-selector";
import { type ProductVariant } from "@shopify/hydrogen/storefront-api-types";
import {
  getFragmentData,
  productDetailsFragment,
  productVariantConnectionFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";

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
      <VariantSelector options={product.options} variants={variants} />

      <AddToCart
        availableForSale={product.availableForSale}
        options={product.options}
        variants={variants}
      />
    </>
  );
}

PurchaseOptions.displayName = "PurchaseOptions";
