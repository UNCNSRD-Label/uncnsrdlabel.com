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
import { CSSProperties, HTMLProps, useEffect, useState } from "react";

export type ArticleProps = HTMLProps<HTMLElement> & {
  variables: { handle: string };
};

export function Article(props: ArticleProps) {
  const { children, className, variables } = props;

  const { data, error, isError, isLoading } = useGetShopifyGraphQL(
    getPageQuery,
    variables,
  );

  if (isLoading) {
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

  const [style, setStyle] = useState<CSSProperties>(page?.style?.value ? (JSON.parse(page?.style?.value ?? "") as CSSProperties) : {});

  useEffect(() => {
    if(isSm) {
      setStyle(() => ({
        ...(page?.style?.value && (JSON.parse(page?.style?.value ?? "") as CSSProperties)),
        ...(page?.styleSm?.value && (JSON.parse(page?.styleSm?.value ?? "") as CSSProperties))
      }))
    }

    if(isMd) {
      setStyle(() => ({
        ...(page?.style?.value && (JSON.parse(page?.style?.value ?? "") as CSSProperties)),
        ...(page?.styleSm?.value && (JSON.parse(page?.styleSm?.value ?? "") as CSSProperties)),
        ...(page?.styleMd?.value && (JSON.parse(page?.styleMd?.value ?? "") as CSSProperties))
      }))
    }

    if(isLg) {
      setStyle(() => ({
        ...(page?.style?.value && (JSON.parse(page?.style?.value ?? "") as CSSProperties)),
        ...(page?.styleSm?.value && (JSON.parse(page?.styleSm?.value ?? "") as CSSProperties)),
        ...(page?.styleMd?.value && (JSON.parse(page?.styleMd?.value ?? "") as CSSProperties)),
        ...(page?.styleLg?.value && (JSON.parse(page?.styleLg?.value ?? "") as CSSProperties))
      }))
    }

    if(isXl) {
      setStyle(() => ({
        ...(page?.style?.value && (JSON.parse(page?.style?.value ?? "") as CSSProperties)),
        ...(page?.styleSm?.value && (JSON.parse(page?.styleSm?.value ?? "") as CSSProperties)),
        ...(page?.styleMd?.value && (JSON.parse(page?.styleMd?.value ?? "") as CSSProperties)),
        ...(page?.styleLg?.value && (JSON.parse(page?.styleLg?.value ?? "") as CSSProperties)),
        ...(page?.styleXl?.value && (JSON.parse(page?.styleXl?.value ?? "") as CSSProperties))
      }))
    }
  }, [isSm, isMd, isLg, isXl]);

  return (
    <article
      className={cn(
        "grid snap-y snap-start",
        page?.classes?.value && JSON.parse(page?.classes?.value ?? "") as ClassValue,
        className,
      )}
      style={style}
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
