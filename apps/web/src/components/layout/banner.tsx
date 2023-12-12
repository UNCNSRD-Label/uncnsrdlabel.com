import { state$ } from "@/lib/store";
import {
  discountNodeFragment,
  getDiscountNodesQuery,
  getFragmentData,
  getShopifyGraphQL as getShopifyAdminGraphQL,
} from "@uncnsrdlabel/graphql-shopify-admin";
import { cn } from "@uncnsrdlabel/lib";
import { use } from "react";

export const Banner = ({ className }: { className?: string }) => {
  const lang = state$.lang.get();

  const variables = {
    first: 16,
    query: "status:active",
  };

  const { discountNodes } = use(
    getShopifyAdminGraphQL(getDiscountNodesQuery, variables),
  );

  return (
    <article
      className={cn(
        "bg-hotPink text-light grid snap-start place-content-center p-7 uppercase",
        className,
      )}
    >
      {discountNodes?.edges
        ?.map((edge) => edge.node)
        ?.map((discountNodeFragmentRef) => {
          const discountNode = getFragmentData(
            discountNodeFragment,
            discountNodeFragmentRef,
          );

          switch (discountNode.discount.__typename) {
            case "DiscountCodeBasic":
              return (
                <details className="mt-4" data-type="DiscountCodeBasic">
                  <summary className="text-xs sm:text-base">{discountNode.discount.title} - {discountNode.discount.shortSummary}</summary>
                  {/* <span>{discountNode.discount.summary}</span> */}
                </details>
              );

            case "DiscountAutomaticBasic":
              return (
                <details className="mt-4" data-type="DiscountAutomaticBasic">
                  <summary className="text-xs sm:text-base">{discountNode.discount.title} - {discountNode.discount.shortSummary}</summary>
                  {/* <span>{discountNode.discount.summary}</span> */}
                </details>
              );
          }
        })?.[0]}
    </article>
  );
};
