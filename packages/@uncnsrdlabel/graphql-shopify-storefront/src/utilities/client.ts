"use client";

import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import {
  useSuspenseQuery,
  type UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { isShopifyError } from "@uncnsrdlabel/lib";
import { useGetInContextVariables } from "@uncnsrdlabel/lib/client";
import { getQueryKey, graphQLClient } from "../utilities";

export function useGetShopifyGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseSuspenseQueryResult<TResult> {
  const inContextVariables = useGetInContextVariables();

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
  } catch (error) {
    if (isShopifyError(error) || error instanceof Error) {
      console.error(error.message);
    } else if (typeof error === "string") {
      console.error(error);
    }

    throw error;
  }
}
