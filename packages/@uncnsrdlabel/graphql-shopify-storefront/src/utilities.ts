import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import {
  type Exact,
  type InputMaybe,
} from "@shopify/hydrogen-react/storefront-api-types";
import {
  QueryClient, useSuspenseQuery,
  type UseSuspenseQueryResult
} from "@tanstack/react-query";
import { formatErrorMessage, getQueryKey, isShopifyError, useGetLangProperties } from "@uncnsrdlabel/lib";
import { GraphQLClient } from "graphql-request";
import { cache } from "react";
import {
  type CountryCode,
  type LanguageCode,
} from "./codegen/graphql";
import { endpoint } from "./constants";

export { graphql } from "./codegen/index";

const headers = new Headers({
  "X-Shopify-Storefront-Access-Token":
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
});

export const graphQLClient = new GraphQLClient(endpoint, {
  fetch: cache(async (url: RequestInfo | URL, params: RequestInit | undefined) => 
    fetch(url, {
      ...params,
      // @ts-expect-error Object literal may only specify known properties, and 'next' does not exist in type 'RequestConfig'.
      next: { revalidate: 60 }
    })
  ),
  headers,
});

export function getInContextVariables(lang: Navigator['language'] = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Navigator['language']): Exact<{
  country?: InputMaybe<CountryCode> | undefined,
  language?: InputMaybe<LanguageCode> | undefined,
}> {
  const [canonicalLocale] = Intl.getCanonicalLocales(lang)

  const locale = new Intl.Locale(canonicalLocale);

  const country = locale.region as CountryCode;

  const language =
    locale.language.toLocaleUpperCase() as LanguageCode;

  return {
    country,
    language,
  } as const;
}

export const getShopifyQueryClient = cache(() => new QueryClient());

export async function getShopifyGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
  try {
    const request = await graphQLClient.request(document, { ...variables });

    return request;
  } catch (error) {
    if (isShopifyError(error)) {
      console.error(formatErrorMessage(error.message));
    } else if (typeof error === "string") {
      console.error(error);
    }

    throw error;
  }
}

export function useGetShopifyGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseSuspenseQueryResult<TResult> {
  const inContextVariables = useGetLangProperties();

  type TVariablesWithContext = typeof inContextVariables & TVariables;

  const variablesWithContext = {
    ...inContextVariables,
    ...variables,
  } as TVariablesWithContext;

  try {
    const queryKey = getQueryKey<TResult, TVariablesWithContext>(
      document,
      variablesWithContext,
    );

    const query = useSuspenseQuery<TResult>({
      queryKey,
      queryFn: async () =>
        await graphQLClient.request(document, { ...variables }),
    });

    return query;
  } catch (error: unknown) {
    if (isShopifyError(error) || error instanceof Error) {
      console.error(error.message);
    } else if (typeof error === "string") {
      console.error(error);
    }

    throw error;
  }
}