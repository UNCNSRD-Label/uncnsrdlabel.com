import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import {
  QueryClient
} from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { cache } from "react";
import { endpoint } from "./constants";

export { graphql } from "./codegen/index";
// TODO: Move to @uncnsrdlabel/lib
export const getDefinitionName = (document: TypedDocumentNode<any, any>) =>
  (document.definitions[0] as any).name.value;

// TODO: Move to @uncnsrdlabel/lib
export const getQueryKey = (
  document: TypedDocumentNode<any, any>,
  variables: any,
) => [getDefinitionName(document), variables];

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
