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
  lang,
  productDetailsFragmentRef,
}: {
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
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

    const sellingPlanGroupNodes = product.sellingPlanGroups?.edges?.map((edge) => edge.node);

    const preOrder = sellingPlanGroupNodes.find(({name}) => name === "Pre-order");

  return (
    <>
      <VariantSelector options={product.options} productDetailsFragmentRef={productDetailsFragmentRef} variants={variants} />

      <AddToCart
        availableForSale={product.availableForSale}
        container="PurchaseOptions"
        dictionary={dictionary}
        lang={lang}
        options={product.options}
        preOrder={preOrder}
        variants={variants}
      />
    </>
  );
};

PurchaseOptions.displayName = "PurchaseOptions";
