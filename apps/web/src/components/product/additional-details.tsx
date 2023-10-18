import { MetaFields } from "@/components/product/metafields";
import {
  FragmentType,
  getFragmentData,
  productDetailsFragment,
  productMetafieldFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";

export function ProductAdditionalDetails({
  productDetailsFragmentRef,
}: {
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  const metafieldsFragmentRefs = product.metafields;

  const metafieldFragments = getFragmentData(
    productMetafieldFragment,
    metafieldsFragmentRefs.filter(Boolean),
  );

  return (
    <section className="grid h-fit grid-cols-12 gap-4 bg-white/90 pb-4 pt-12 sm:pb-12 lg:gap-32 lg:backdrop-blur">
      <MetaFields
        className="col-start-2 col-end-12 lg:col-end-7"
        excludedKeys={["complementary_products"]}
        metafieldFragments={metafieldFragments}
      />
      <MetaFields
        className="col-start-2 col-end-12 lg:col-start-7"
        includedKeys={["complementary_products"]}
        metafieldFragments={metafieldFragments}
      />
    </section>
  );
}
