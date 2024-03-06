import { MetaFields } from "@/components/product/metafields";
import {
  getFragmentData,
  productDetailsFragment,
  productMetafieldFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";

export function ProductAdditionalDetails({
  lang,
  productDetailsFragmentRef,
}: {
  lang: Intl.BCP47LanguageTag;
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
    <section className="relative z-10 grid h-fit gap-4 bg-black pb-4 pt-12 text-white sm:pb-12 lg:gap-32">
      <MetaFields
        className=""
        excludedKeys={["complementary_products"]}
        lang={lang}
        metafieldFragments={metafieldFragments}
      />
      <MetaFields
        className=""
        includedKeys={["complementary_products"]}
        lang={lang}
        metafieldFragments={metafieldFragments}
      />
    </section>
  );
}
