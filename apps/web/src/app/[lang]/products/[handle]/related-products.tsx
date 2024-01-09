import { Grid } from "@/components/grid";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { state$ } from "@/lib/store";
import {
  getFragmentData,
  getProductRecommendationsHandler,
  productDetailsFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";

export async function RelatedProducts({
  className,
  productDetailsFragmentRef,
}: {
  className?: string;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const intl = state$.intl.get();

  const lang = state$.lang.get();

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  if (!product) return null;

  const { id } = product;

  const productRecommendationRefs = await getProductRecommendationsHandler({
    variables: {
      productId: id,
    },
    lang,
  });

  if (!productRecommendationRefs?.length) return null;

  return (
    <aside className={cn("px-2 sm:px-4 pb-48 pt-12", className)}>
      <h2 className="mb-8 text-center text-xl font-bold uppercase">
        {intl.formatMessage({ id: "component.RelatedProducts.title" })}
      </h2>
      <Grid className="grid-cols-2 lg:grid-cols-5 [&>*:last-child:nth-child(odd)]:hidden [&>*:last-child:nth-child(odd)]:lg:list-item">
        <ProductGridItems
          limit={5}
          productFragmentRefs={productRecommendationRefs}
        />
      </Grid>
    </aside>
  );
}
