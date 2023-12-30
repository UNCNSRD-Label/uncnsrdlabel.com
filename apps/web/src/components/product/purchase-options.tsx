import { AddToCart } from "@/components/cart/add-to-cart";
import { VariantSelector } from "@/components/product/variant-selector";
import {
  FragmentType,
  ProductVariantSubset,
  getFragmentData,
  productDetailsFragment,
  productVariantConnectionFragment,
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

  const variants: ProductVariantSubset[] =
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
