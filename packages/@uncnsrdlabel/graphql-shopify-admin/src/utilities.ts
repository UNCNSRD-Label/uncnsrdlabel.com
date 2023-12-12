import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import {
  QueryClient, useSuspenseQuery,
  type UseSuspenseQueryResult
} from "@tanstack/react-query";
import { formatErrorMessage, isShopifyError, useGetInContextVariables } from "@uncnsrdlabel/lib";
import { GraphQLClient } from "graphql-request";
import { cache } from "react";
import { endpoint } from "./constants";

export { graphql } from "./codegen/index";

// TODO: Move to @uncnsrdlabel/lib
export const getDefinitionName = <TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
) => (document.definitions[0] as any).name.value;

// TODO: Move to @uncnsrdlabel/lib
export const getQueryKey = <TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables: TVariables,
) => [getDefinitionName<TResult, TVariables>(document), variables];

const headers = new Headers({
  "X-Shopify-Access-Token":
    process.env.SHOPIFY_PRIVATE_ACCESS_TOKEN!,
});

export const graphQLClient = new GraphQLClient(endpoint, {
  fetch,
  headers,
});

export const getShopifyQueryClient = cache(() => new QueryClient());

export async function getShopifyGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
  try {
    const request = graphQLClient.request(document, { ...variables });

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
  } catch (error: unknown) {
    if (isShopifyError(error) || error instanceof Error) {
      console.error(error.message);
    } else if (typeof error === "string") {
      console.error(error);
    }

    throw error;
  }
}