import { convertSchemaToHtml } from "@thebeyondgroup/shopify-rich-text-renderer";
import {
  discountNodeFragment,
  getDiscountNodesQuery,
  getFragmentData,
  getShopifyGraphQL as getShopifyAdminGraphQL,
} from "@uncnsrdlabel/graphql-shopify-admin";
import {
  getInContextVariables,
  // TODO: Implement getFragmentData as a global lib function
  // getFragmentDataStorefront,
  getMetaObjectsQuery,
  getShopifyGraphQL as getShopifyStorefrontGraphQL,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { use } from "react";

const getDiscountNode = ({ lang }: { lang: Intl.BCP47LanguageTag }) => {
  let markup = null;

  const bannerPrefix = "Banner|";

  const bannerPrefixForLang = `${bannerPrefix}${lang}|`;

  const variables = {
    first: 64,
    query: `status:active AND title:${bannerPrefix}*`,
  };

  const { discountNodes } = use(
    getShopifyAdminGraphQL(getDiscountNodesQuery, variables),
  );

  const discountNodeList = discountNodes?.edges
    ?.map((edge) => edge.node)
    ?.map((discountNodeFragmentRef) =>
      getFragmentData(discountNodeFragment, discountNodeFragmentRef),
    );

  const discountNode = discountNodeList?.find((discountNode) => {
    if (
      discountNode?.discount.__typename !==
      ("DiscountCodeBasic" || "DiscountAutomaticBasic")
    ) {
      return null;
    }

    discountNode?.discount.title.startsWith(bannerPrefixForLang);
  });

  switch (discountNode?.discount.__typename) {
    case "DiscountCodeBasic":
      markup = (
        <div data-type="DiscountCodeBasic">
          {discountNode?.discount.title
            .replace(bannerPrefixForLang, "")
            .replace(bannerPrefix, "")}{" "}
          - {discountNode?.discount.shortSummary}
        </div>
      );

    case "DiscountAutomaticBasic":
      markup = (
        <div data-type="DiscountAutomaticBasic">
          {discountNode?.discount.title
            .replace(bannerPrefixForLang, "")
            .replace(bannerPrefix, "")}{" "}
          - {discountNode?.discount.shortSummary}
        </div>
      );
  }

  return markup;
}

const getMetaobject = ({ lang }: { lang: Intl.BCP47LanguageTag }) => {
  let markup = null;

  const inContextVariables = getInContextVariables(lang);

  const { metaobjects } = use(
    getShopifyStorefrontGraphQL(getMetaObjectsQuery, {
      ...inContextVariables,
      type: "Banner",
    }),
  );

  const metaobjectList = metaobjects?.edges?.map((edge) => edge.node);

  const metaobject = metaobjectList?.find((metaobject) => {
    const langField = metaobject?.fields.find(({ key }) => key === "lang");

    if (langField?.value && lang.startsWith(langField?.value)) {
      return metaobject;
    }

    return null;
  });

  const richTextSchema = metaobject?.fields.find(
    ({ key }) => key === "text",
  )?.value;

  if (!richTextSchema) {
    return null;
  }

  const richTextResponse = convertSchemaToHtml(richTextSchema);

  let formattedMarkup = richTextResponse;

  if(richTextResponse.startsWith("<p>") && richTextResponse.endsWith("</p>") && richTextResponse.includes(" | ")) {
    formattedMarkup = `<ul>${richTextResponse.replaceAll("<p>", "<li>").replaceAll("</p>", "</li>").replaceAll(" | ", "</li><li class='hidden md:block'>|</li><li>")}</ul>`;
  }

  markup = (
    <div
      className="text-center [&>ul]:flex [&>ul]:gap-x-4 [&>ul]:gap-y-2 [&>ul]:flex-col md:[&>ul]:flex-row"
      data-id={metaobject.id}
      data-type="MetaObject"
      dangerouslySetInnerHTML={{
        __html: formattedMarkup,
      }}
    />
  );

  return markup;
};

export const Banner = ({
  className,
  lang,
}: {
  className?: string;
  lang: Intl.BCP47LanguageTag;
}) => {
  const discountNode = getDiscountNode({ lang });

  const metaobject = getMetaobject({ lang });

  let markup = null;

  if (discountNode) {
    markup = discountNode;
  }

  if (metaobject) {
    markup = metaobject;
  }

  if (!markup) {
    return null;
  }

  return (
    <article
      className={cn(
        "bg-hotPink text-dark pt-[max(theme(spacing.safeTop),_theme(spacing.3))] grid snap-start place-content-center p-6 text-xs uppercase sm:text-base",
        className,
      )}
    >
      {markup}
    </article>
  );
};
