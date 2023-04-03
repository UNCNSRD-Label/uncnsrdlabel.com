import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { type QueryClient, useQuery } from '@tanstack/react-query'
import request, { type ClientError, type Variables } from 'graphql-request'

import {
  getPublicTokenHeaders,
  getStorefrontApiUrl,
} from '#/lib/clients/shopify/storefront'

export function requestShopifyData<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: Variables
): Promise<TResult> {
  const requestHeaders = getPublicTokenHeaders()
  // const requestHeaders = getPrivateTokenHeaders()
  const url = getStorefrontApiUrl()

  return request({
    url,
    document,
    requestHeaders,
    variables,
  })
}

export function prefetchShopifyQuery<TResult, TVariables>(
  queryClient: QueryClient,
  document: TypedDocumentNode<TResult, TVariables>,
  variables: Variables = {}
): Promise<void> {
  return queryClient.prefetchQuery({
    queryKey: [document, variables] as const,
    queryFn: () => requestShopifyData(document, variables),
  })
}

export function useShopifyQuery<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: Variables
) {
  return useQuery({
    queryKey: [document, variables] as const,
    queryFn: async () => requestShopifyData(document, variables),
    onError: (err: ClientError) => err,
    keepPreviousData: true,
  })
}
