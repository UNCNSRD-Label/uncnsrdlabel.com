import { Grid } from "@/components/grid";
import { ProductGridItems } from "@/components/layout/product-grid-items";
import { getDictionary } from "@/lib/dictionary";
import { createIntl } from "@formatjs/intl";
import {
  getFragmentData,
  getProductRecommendationsHandler,
  productDetailsFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { type ResolvedIntlConfig } from "react-intl";

export async function RelatedProducts({
  className,
  lang,
  productDetailsFragmentRef,
}: {
  className?: string;
  lang: Intl.BCP47LanguageTag;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
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
    <aside className={cn("px-4 pb-40 pt-12", className)}>
      <h2 className="mb-8 text-center text-xl uppercase">
        {intl.formatMessage({ id: "component.RelatedProducts.title" })}
      </h2>
      <Grid className="grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 [&>*:nth-of-type(3)]:hidden [&>*:nth-of-type(4)]:hidden [&>*:nth-of-type(5)]:hidden [&>*:nth-of-type(3)]:lg:list-item [&>*:nth-of-type(4)]:xl:list-item [&>*:nth-of-type(5)]:xl:list-item">
        <ProductGridItems
          lang={lang}
          limit={4}
          productFragmentRefs={productRecommendationRefs}
        />
      </Grid>
    </aside>
  );
}
