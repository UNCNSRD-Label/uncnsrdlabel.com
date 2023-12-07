import { ProductCard } from "@/components/product-card/card";
import { state$ } from "@/lib/store";
import {
  getProductDetailsByHandleQuery,
  getShopifyGraphQL
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getInContextVariables } from "@uncnsrdlabel/lib";

export async function AddPremiumPackaging({
  className,
}: {
  className?: string;
}) {
  const lang = state$.lang.get();
  console.log({lang});

  const handle = "premium-packaging";

  const inContextVariables = getInContextVariables(lang);

  const variables = { handle };

  const { product: productDetailsFragmentRef } = await getShopifyGraphQL(
    getProductDetailsByHandleQuery,
    // @ts-expect-error Types of property 'country' are incompatible.
    { ...inContextVariables, ...variables },
  );

  if (!productDetailsFragmentRef) {
    console.error(`Product not found for handle \`${handle}\``);
    return null;
  }

  return (
    <ProductCard
      className={className}
      productDetailsFragmentRef={productDetailsFragmentRef}
    />
  );
}
