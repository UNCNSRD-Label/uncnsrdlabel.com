import { AddToCart } from "@/components/cart/add-to-cart";
import { VariantSelector } from "@/components/product/variant-selector";
import { getDictionary } from "@/lib/dictionary";
import { createIntl } from "@formatjs/intl";
import { type ProductVariant } from "@shopify/hydrogen/storefront-api-types";
import {
  getFragmentData,
  productDetailsFragment,
  productMetafieldFragment,
  productVariantConnectionFragment,
  type FragmentType,
  type SellingPlanGroup,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { type ResolvedIntlConfig } from "react-intl";

export const PurchaseOptions = async ({
  lang,
  productDetailsFragmentRef,
}: {
  lang: Intl.BCP47LanguageTag;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) => {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

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

  const sellingPlanGroupNodes = product.sellingPlanGroups?.edges?.map(
    (edge) => edge.node,
  );

  const preOrder = sellingPlanGroupNodes.find(
    ({ name }) => name === "Pre-order",
  );

  const releaseDateTime = getFragmentData(
    productMetafieldFragment,
    product.release_date,
  )?.value;

  const releaseDate = releaseDateTime?.split("T")[0];

  return (
    <>
      <VariantSelector
        options={product.options}
        productDetailsFragmentRef={productDetailsFragmentRef}
        variants={variants}
      />

      <AddToCart
        availableForSale={product.availableForSale}
        container="PurchaseOptions"
        dictionary={dictionary}
        lang={lang}
        options={product.options}
        preOrder={preOrder as Partial<SellingPlanGroup> | undefined}
        variants={variants}
      />

      {!product.availableForSale && (
        <span
          className="text-xs"
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({
              id: "component.AddToCart.status.out-of-stock",
            }),
          }}
        />
      )}

      {preOrder && releaseDate && (
        <span
          itemProp="releaseDate"
          content={releaseDateTime}
          className="text-xs"
        >
          {intl.formatMessage(
            {
              id: "component.AddToCart.status.pre-order",
            },
            {
              releaseDate: new Date(releaseDate).toLocaleDateString(
                lang,
              ),
            },
          )}
        </span>
      )}
    </>
  );
};

PurchaseOptions.displayName = "PurchaseOptions";
