import {
  discountNodeFragment,
  getDiscountNodesQuery,
  getFragmentData,
  getShopifyGraphQL as getShopifyAdminGraphQL,
} from "@uncnsrdlabel/graphql-shopify-admin";
import { cn } from "@uncnsrdlabel/lib";
import { use } from "react";

export const Banner = ({ className }: { className?: string }) => {
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
        "bg-hotPink text-light grid snap-start place-content-center p-6 text-xs uppercase sm:text-base",
        className,
      )}
    >
      {
        discountNodes?.edges
          ?.map((edge) => edge.node)
          ?.map((discountNodeFragmentRef) => {
            const discountNode = getFragmentData(
              discountNodeFragment,
              discountNodeFragmentRef,
            );

            switch (discountNode.discount.__typename) {
              case "DiscountCodeBasic":
                return (
                  <span data-type="DiscountCodeBasic">
                    {discountNode.discount.title} -{" "}
                    {discountNode.discount.shortSummary}
                  </span>
                );

              case "DiscountAutomaticBasic":
                return (
                  <span data-type="DiscountAutomaticBasic">
                    {discountNode.discount.title} -{" "}
                    {discountNode.discount.shortSummary}
                  </span>
                );
            }
          })?.[0]
      }
    </article>
  );
};
