"use server";

import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import { isShopifyError } from "@uncnsrdlabel/lib";
import {
  PageFragment,
  type ImageFragment,
  type MediaImage,
  type MenuItem,
} from "../codegen/graphql";
import { getFragmentData } from "../codegen/index";
import { domain } from "../constants";
import { imageFragment } from "../fragments/index";
import { graphQLClient } from "../utilities";

export async function getShopifyGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
  try {
    const request = graphQLClient.request(document, { ...variables });

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

export async function getPageImages(mediaImages: PageFragment["mediaImages"]) {
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

export async function getMenuItems(menuItems: Partial<MenuItem>[]) {
  const images = menuItems.map((menuItem) => ({
    ...menuItem,
    url: menuItem.url
      ?.replace(domain, "")
      .replace("/collections/", "/search/")
      .replace("/pages/", "/"),
  }));

  return images;
}
