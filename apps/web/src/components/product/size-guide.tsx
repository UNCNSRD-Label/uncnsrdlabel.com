import { type ResultOf } from "@graphql-typed-document-node/core";
import {
    getBlogArticleQuery,
    getInContextVariables,
    getShopifyGraphQL,
    productDetailsFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import slugify from "slugify";

export const SizeGuide = async ({
  lang,
  productType,
}: {
  lang: Intl.BCP47LanguageTag;
  productType: ResultOf<typeof productDetailsFragment>["productType"];
}) => {
  const inContextVariables = getInContextVariables(lang);

  const articleHandle = slugify(productType, { lower: true });

  const { blog } = await getShopifyGraphQL(getBlogArticleQuery, {
    ...inContextVariables,
    blogHandle: "size-guide",
    articleHandle,
  });

  const html = blog?.articleByHandle?.contentHtml;

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
