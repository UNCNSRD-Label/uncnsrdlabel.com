"use client";

import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import {
  useQuery,
  type UseQueryResult
} from "@tanstack/react-query";
import { isShopifyError, useGetInContextVariables } from "@uncnsrdlabel/lib";
import { getQueryKey, graphQLClient } from "../utilities";

export function useGetShopifyGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  const inContextVariables = useGetInContextVariables();

  const variablesWithContext = { ...inContextVariables, ...variables };

  try {
    const query = useQuery(
      getQueryKey(document, variablesWithContext),
      async ({ queryKey }) =>
        graphQLClient.request(document, queryKey[1] ? queryKey[1] : undefined),
    );

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