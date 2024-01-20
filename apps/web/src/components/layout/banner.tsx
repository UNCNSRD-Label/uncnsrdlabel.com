import {
  discountNodeFragment,
  getDiscountNodesQuery,
  getFragmentData,
  getShopifyGraphQL as getShopifyAdminGraphQL,
} from "@uncnsrdlabel/graphql-shopify-admin";
import { cn } from "@uncnsrdlabel/lib";
import { use } from "react";

export const Banner = ({
  className,
  lang,
}: {
  className?: string;
  lang: Intl.BCP47LanguageTag;
}) => {
  const bannerPrefix = "Banner|";

  const bannerPrefixForLang = `${bannerPrefix}${lang}|`;

  const variables = {
    first: 64,
    query: `status:active AND title:${bannerPrefix}*`,
  };

  const { discountNodes } = use(
    getShopifyAdminGraphQL(getDiscountNodesQuery, variables),
  );

  if (!discountNodes?.edges?.length) {
    return null;
  }

  const discountNodeList = discountNodes?.edges
    ?.map((edge) => edge.node)
    ?.map((discountNodeFragmentRef) =>
      getFragmentData(discountNodeFragment, discountNodeFragmentRef),
    );

  const discountNode = discountNodeList?.find((discountNode) => {
    if (
      discountNode.discount.__typename !==
      ("DiscountCodeBasic" || "DiscountAutomaticBasic")
    ) {
      return null;
    }

    discountNode.discount.title.startsWith(bannerPrefixForLang);
  });

  if (!discountNode) {
    return null;
  }

  let markup = null;

  switch (discountNode.discount.__typename) {
    case "DiscountCodeBasic":
      markup = (
        <span data-type="DiscountCodeBasic">
          {discountNode.discount.title
            .replace(bannerPrefixForLang, "")
            .replace(bannerPrefix, "")}{" "}
          - {discountNode.discount.shortSummary}
        </span>
      );

    case "DiscountAutomaticBasic":
      markup = (
        <span data-type="DiscountAutomaticBasic">
          {discountNode.discount.title
            .replace(bannerPrefixForLang, "")
            .replace(bannerPrefix, "")}{" "}
          - {discountNode.discount.shortSummary}
        </span>
      );
  }

  return (
    <article
      className={cn(
        "bg-hotPink text-light pt-safeTop grid snap-start place-content-center p-6 text-xs uppercase sm:text-base",
        className,
      )}
    >
      {markup}
    </article>
  );
};
