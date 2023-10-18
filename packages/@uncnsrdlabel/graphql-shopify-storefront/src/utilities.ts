import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import {
  QueryClient
} from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { cache } from "react";
import { endpoint } from "./constants";

export { graphql } from "./codegen/index";
// TODO: Move to @uncnsrdlabel/lib
export const getDefinitionName = <TResult, TVariables>(document: TypedDocumentNode<TResult, TVariables>) =>
  (document.definitions[0] as any).name.value;

// TODO: Move to @uncnsrdlabel/lib
export const getQueryKey = <TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables: TVariables
) => [getDefinitionName<TResult, TVariables>(document), variables];

const headers = new Headers({
  "X-Shopify-Storefront-Access-Token":
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
});

export const graphQLClient = new GraphQLClient(endpoint, {
  // errorPolicy: "all",
  fetch,
  headers,
  cache: "no-store",
});

export const getShopifyQueryClient = cache(() => new QueryClient());
