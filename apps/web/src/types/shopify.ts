import { ResultOf } from "@graphql-typed-document-node/core";
import {
  videoFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";

export type WithVideoFragment = Required<
  ResultOf<typeof videoFragment> & {
    __typename: "Video";
  }
>;

export type WithVideo = Required<
  FragmentType<typeof videoFragment> & {
    __typename: "Video";
  }
>;
