import { Prose } from "@/components/prose";
import { state$ } from "@/lib/store";
import {
  getFragmentData,
  getPageQuery,
  getShopifyGraphQL,
  pageFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn, getInContextVariables, type ClassValue } from "@uncnsrdlabel/lib";
import Script from "next/script";
import { HTMLProps } from "react";

export type ArticleProps = HTMLProps<HTMLElement> & {
  variables: { handle: string };
};

export async function Article(props: ArticleProps) {
  const lang = state$.lang.get();

  const { children, className, variables } = props;

  const inContextVariables = getInContextVariables(lang);

  const { page: pageFragmentRef } = await getShopifyGraphQL(
    getPageQuery,
    // @ts-expect-error Types of property 'country' are incompatible.
    { ...inContextVariables, ...variables },
  );

  const page = getFragmentData(pageFragment, pageFragmentRef);

  return (
    <>
      <article
        className={cn(
          "grid snap-y snap-start",
          page?.classes?.value &&
            (JSON.parse(page?.classes?.value ?? "") as ClassValue),
          className,
        )}
      >
        {page?.body && (
          <Prose
            className={cn("prose-thead:border-hotPink prose-tr:border-hotPink")}
            html={page.body}
            style={{
              gridArea: "body",
            }}
          />
        )}
        {children}
      </article>
      <Script id="tailwind" src="https://cdn.tailwindcss.com" />
    </>
  );
}
