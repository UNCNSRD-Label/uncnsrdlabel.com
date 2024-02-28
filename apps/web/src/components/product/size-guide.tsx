import { getDictionary } from "@/lib/dictionary";
import { createIntl } from "@formatjs/intl";
import { type ResultOf } from "@graphql-typed-document-node/core";
import {
  blogArticleQuery,
  getInContextVariables,
  getShopifyGraphQL,
  productDetailsFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { type ResolvedIntlConfig } from "react-intl";
import slugify from "slugify";

export const SizeGuide = async ({
  lang,
  productType,
}: {
  lang: Intl.BCP47LanguageTag;
  productType: ResultOf<typeof productDetailsFragment>["productType"];
}) => {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const inContextVariables = getInContextVariables(lang);

  const articleHandle = slugify(productType, { lower: true });

  const { blog } = await getShopifyGraphQL(blogArticleQuery, {
    ...inContextVariables,
    blogHandle: "size-guide",
    articleHandle,
  });

  const html = blog?.articleByHandle?.contentHtml.replaceAll("{eu-size-shown-on-site}", intl.formatMessage({
    id: "component.ProductDetails.size-guide.popover.content.eu-size-shown-on-site",
  }));

  if (!html) {
    return null;
  }

  return (
    <div
      className="prose"
      data-id={blog?.articleByHandle?.id}
      data-type="MetaObject"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};
