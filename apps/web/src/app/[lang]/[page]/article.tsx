"use client";

import { Prose } from "@/components/prose";
import { breakpoints } from "@/lib/tailwind";
import { useMediaQuery } from "@react-hookz/web";
import {
  getFragmentData,
  pageFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn, type ClassValue } from "@uncnsrdlabel/lib";
import sharedConfig from "@uncnsrdlabel/tailwind-config";
import Script from "next/script";
import { CSSProperties, HTMLProps, useEffect, useState } from "react";

export type ArticleProps = HTMLProps<HTMLElement> & {
  lang: Intl.BCP47LanguageTag;
  pageFragmentRef: FragmentType<typeof pageFragment>;
};

function onReadyTailwind() {
  window.tailwind.config = {
    presets: [sharedConfig],
  };
}

export function Article(props: ArticleProps) {
  const { children, className, pageFragmentRef } = props;

  const page = getFragmentData(pageFragment, pageFragmentRef);

  const mediaQueries = Object.fromEntries(
    Object.entries(breakpoints).map(([key, values]) => [key, useMediaQuery(`only screen and (min-width : ${values.min.toString()})`)]),
  );

  const [style, setStyle] = useState<CSSProperties>(
    page?.style?.value
      ? (JSON.parse(page?.style?.value ?? "") as CSSProperties)
      : {},
  );

  useEffect(() => {
    if (mediaQueries.sm) {
      setStyle(() => ({
        ...(page?.style?.value &&
          (JSON.parse(page?.style?.value ?? "") as CSSProperties)),
        ...(page?.styleSm?.value &&
          (JSON.parse(page?.styleSm?.value ?? "") as CSSProperties)),
      }));
    }

    if (mediaQueries.md) {
      setStyle(() => ({
        ...(page?.style?.value &&
          (JSON.parse(page?.style?.value ?? "") as CSSProperties)),
        ...(page?.styleSm?.value &&
          (JSON.parse(page?.styleSm?.value ?? "") as CSSProperties)),
        ...(page?.styleMd?.value &&
          (JSON.parse(page?.styleMd?.value ?? "") as CSSProperties)),
      }));
    }

    if (mediaQueries.lg) {
      setStyle(() => ({
        ...(page?.style?.value &&
          (JSON.parse(page?.style?.value ?? "") as CSSProperties)),
        ...(page?.styleSm?.value &&
          (JSON.parse(page?.styleSm?.value ?? "") as CSSProperties)),
        ...(page?.styleMd?.value &&
          (JSON.parse(page?.styleMd?.value ?? "") as CSSProperties)),
        ...(page?.styleLg?.value &&
          (JSON.parse(page?.styleLg?.value ?? "") as CSSProperties)),
      }));
    }

    if (mediaQueries.xl) {
      setStyle(() => ({
        ...(page?.style?.value &&
          (JSON.parse(page?.style?.value ?? "") as CSSProperties)),
        ...(page?.styleSm?.value &&
          (JSON.parse(page?.styleSm?.value ?? "") as CSSProperties)),
        ...(page?.styleMd?.value &&
          (JSON.parse(page?.styleMd?.value ?? "") as CSSProperties)),
        ...(page?.styleLg?.value &&
          (JSON.parse(page?.styleLg?.value ?? "") as CSSProperties)),
        ...(page?.styleXl?.value &&
          (JSON.parse(page?.styleXl?.value ?? "") as CSSProperties)),
      }));
    }
  }, [mediaQueries]);

  return (
    <>
      <div
        className={cn(
          "grid snap-y snap-start",
          page?.classes?.value &&
            (JSON.parse(page?.classes?.value ?? "") as ClassValue),
          className,
        )}
        style={style}
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
      </div>
      <Script
        id="tailwind"
        src="https://cdn.tailwindcss.com"
        strategy="beforeInteractive"
        onReady={onReadyTailwind}
      />
    </>
  );
}
