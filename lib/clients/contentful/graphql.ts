import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { type QueryClient, useQuery } from '@tanstack/react-query'
import request, { type ClientError, type Variables } from 'graphql-request'

export function requestContentfulData<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: Variables
): Promise<TResult> {
  const requestHeaders = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  }
  const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`

  return request({
    url,
    document,
    requestHeaders,
    variables,
  })
}

export function prefetchContentfulQuery<TResult, TVariables>(
  queryClient: QueryClient,
  document: TypedDocumentNode<TResult, TVariables>,
  variables: Variables = {}
): Promise<void> {
  return queryClient.prefetchQuery({
    queryKey: [document, variables] as const,
    queryFn: () => requestContentfulData(document, variables),
  })
}

export function useContentfulQuery<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: Variables
) {
  return useQuery({
    queryKey: [document, variables] as const,
    queryFn: async () => requestContentfulData(document, variables),
    onError: (err: ClientError) => err,
    keepPreviousData: true,
  })
}
