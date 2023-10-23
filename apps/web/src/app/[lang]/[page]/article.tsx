'use client';

import { Prose } from "@/components/prose";
import { useMediaQuery } from "@react-hookz/web";
import {
  getFragmentData,
  getPageQuery,
  pageFragment,
  useGetShopifyGraphQL
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn, type ClassValue } from "@uncnsrdlabel/lib";
import { CSSProperties, HTMLProps } from "react";

export type ArticleProps = HTMLProps<HTMLElement> & {
  variables: { handle: string };
};

export async function Article(props: ArticleProps) {
  const { children, className, variables } = props;

  const { data, error, isError, isPending } = useGetShopifyGraphQL(
    getPageQuery,
    variables,
  );

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error?.message}</span>
  }

  const { page: pageFragmentRef } = data;

  const page = getFragmentData(pageFragment, pageFragmentRef);

  const isSm = useMediaQuery("only screen and (min-width : 640px)");
  const isMd = useMediaQuery(
    "only screen and (min-width : 768px)",
  );
  const isLg = useMediaQuery(
    "only screen and (min-width : 1024px)",
  );
  const isXl = useMediaQuery("only screen and (min-width : 1280px)");

  return (
    <article
      className={cn(
        "grid snap-y snap-start",
        page?.classes?.value && JSON.parse(page?.classes?.value ?? "") as ClassValue,
        className,
      )}
      style={{
        ...(page?.style?.value && JSON.parse(page?.style?.value ?? "") as CSSProperties),
        ...(isSm && page?.styleSm?.value && (JSON.parse(page?.styleSm?.value ?? "") as CSSProperties)),
        ...(isMd && page?.styleMd?.value && (JSON.parse(page?.styleMd?.value ?? "") as CSSProperties)),
        ...(isLg && page?.styleLg?.value && (JSON.parse(page?.styleLg?.value ?? "") as CSSProperties)),
        ...(isXl && page?.styleXl?.value && (JSON.parse(page?.styleXl?.value ?? "") as CSSProperties)),
      }}
    >
      {page?.body && (
        <Prose
          html={page.body}
          style={{
            gridArea: "body",
          }}
        />
      )}
      {children}
    </article>
  );
}
