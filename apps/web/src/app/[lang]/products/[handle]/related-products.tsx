"use server";

import { Grid } from "@/components/grid";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { getIntl } from "@/lib/i18n/server";
import { state$ } from "@/lib/store";
import {
  FragmentType,
  getFragmentData,
  getProductRecommendationsHandler,
  productDetailsFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { cn } from "@uncnsrdlabel/lib";

export async function RelatedProducts({
  className,
  productDetailsFragmentRef,
}: {
  className?: string;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const lang = state$.lang.get();

  const intl = await getIntl(lang, `component.RelatedProducts`);

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  if (!product) return null;

  const { id } = product;

  const productRecommendationRefs = await getProductRecommendationsHandler(
    {
      productId: id,
    },
    lang,
  );

  if (!productRecommendationRefs?.length) return null;

  return (
    <aside className={cn("px-4 pb-48 pt-12", className)}>
      <div className="mb-8 text-center text-xl font-bold uppercase">
        {intl.formatMessage({ id: "title" })}
      </div>
      <Grid className="grid-cols-2 lg:grid-cols-5 [&>*:last-child:nth-child(odd)]:hidden [&>*:last-child:nth-child(odd)]:lg:list-item">
        <ProductGridItems
          limit={5}
          productFragmentRefs={productRecommendationRefs}
        />
      </Grid>
    </aside>
  );
}
