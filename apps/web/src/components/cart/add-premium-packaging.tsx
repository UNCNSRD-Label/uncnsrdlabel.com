import { ProductCard } from "@/components/product-card/card";
import { state$ } from "@/lib/store";
import { getProductDetailsByHandleHandler } from "@uncnsrdlabel/graphql-shopify-storefront/server";

export async function AddPremiumPackaging({
  className,
}: {
  className?: string;
}) {
  const lang = state$.lang.get();

  const handle = "premium-packaging";

  const productDetailsFragmentRef = await getProductDetailsByHandleHandler(
    { handle },
    lang,
  );

  if (!productDetailsFragmentRef) {
    return null;
  }

  return (
    <ProductCard
      className={className}
      productDetailsFragmentRef={productDetailsFragmentRef}
    />
  );
}
