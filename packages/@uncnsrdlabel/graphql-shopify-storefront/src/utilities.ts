import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { getInContextVariables, isShopifyError, useGetInContextVariables } from "@uncnsrdlabel/lib";
import { GraphQLClient } from "graphql-request";
import {
  PageFragment,
  type ImageFragment,
  type MediaImage
} from "./codegen/graphql";
import { getFragmentData } from "./codegen/index";
import {
  imageFragment
} from "./fragments/index";

export { graphql } from "./codegen/index";

export const domain = `https://${process.env
  .NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!}`;
export const endpoint = `${domain}/api/${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

const headers = new Headers({
  "X-Shopify-Storefront-Access-Token":
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
});

export const graphQLClient = new GraphQLClient(endpoint, {
  // errorPolicy: "all",
  fetch,
  headers,
});

export async function getShopifyGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
  "use server";

  const inContextVariables = getInContextVariables()

  const variablesWithContext = {...inContextVariables, ...variables}

  try {
    const request = graphQLClient.request(document, variablesWithContext);

    return request;
  } catch (error) {
    if (isShopifyError(error) || error instanceof Error) {
      console.error(error.message);
    } else if (typeof error === "string") {
      console.error(error);
    }

    throw error;
  }
}

export function useGetShopifyGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  "use client";

  const inContextVariables = useGetInContextVariables()

  const variablesWithContext = {...inContextVariables, ...variables}

  try {
    const name = (document.definitions[0] as any).name.value;

    const query = useQuery([name, variablesWithContext], async ({ queryKey }) =>
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

export function getPageImages(mediaImages: PageFragment["mediaImages"]) {
  const images = mediaImages?.references?.edges
    .map(
      ({ node }) =>
        node as Omit<MediaImage, "image"> & {
          image: { __typename?: "Image" } & {
            " $fragmentRefs"?: { ImageFragment: ImageFragment };
          };
        },
    )
    .filter((node) => node.__typename === "MediaImage")
    .map((mediaImage) => getFragmentData(imageFragment, mediaImage.image));

  return images;
}