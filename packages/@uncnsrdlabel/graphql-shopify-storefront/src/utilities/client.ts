"use client";

import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import {
  useQuery,
  type UseQueryResult
} from "@tanstack/react-query";
import { isShopifyError, useGetInContextVariables } from "@uncnsrdlabel/lib";
// import {
//   type VariablesWithContext,
// } from "../types";
import { getQueryKey } from "../utilities";

export function useGetShopifyGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  const inContextVariables = useGetInContextVariables();

  type TVariablesWithContext = typeof inContextVariables & TVariables;

  const variablesWithContext = { ...inContextVariables, ...variables } as TVariablesWithContext;

  try {
    const queryKey = getQueryKey<TResult, TVariablesWithContext>(document, variablesWithContext);

    const query = useQuery<TResult>({ queryKey });

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